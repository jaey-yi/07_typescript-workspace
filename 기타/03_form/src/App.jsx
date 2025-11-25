import { useState } from 'react'
import FormField from './components/FormField'
import Input from './components/Input'
import Select from './components/Select'
import Textarea from './components/Textarea'
import Checkbox from './components/Checkbox'
import Radio from './components/Radio'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [bio, setBio] = useState('')
  const [agree, setAgree] = useState(false)
  const [gender, setGender] = useState('female')

  return (
    <div className="app-container" style={{ padding: '24px' }}>
      <h1>Form 관련 컴포넌트 재사용</h1>

      <FormField label="Name" htmlFor="name" required helperText="2자 이상 입력하세요" size="lg" error={!name ? '이름을 입력해 주세요' : ''}>
        <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="홍길동" />
      </FormField>

      <FormField label="Email" htmlFor="email" helperText="연락 가능한 이메일" size="md">
        <Input id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@email.com" />
      </FormField>

      <FormField label="Role" htmlFor="role" helperText="역할을 선택하세요" size="sm">
        <Select id="role" value={role} onChange={e => setRole(e.target.value)}>
          <option value="">선택</option>
          <option value="admin">관리자</option>
          <option value="editor">에디터</option>
          <option value="viewer">뷰어</option>
        </Select>
      </FormField>

      <FormField label="Bio" htmlFor="bio" helperText="자기소개를 작성하세요">
        <Textarea id="bio" value={bio} onChange={e => setBio(e.target.value)} placeholder="간단한 소개를 입력하세요" rows={4} />
      </FormField>

      <FormField>
        <Checkbox id="agree" label="약관에 동의합니다" checked={agree} onChange={e => setAgree(e.target.checked)} />
      </FormField>

      <FormField label="성별">
        <div style={{ display: 'flex', gap: 12 }}>
          <Radio name="gender" id="female" label="여성" checked={gender === 'female'} onChange={() => setGender('female')} />
          <Radio name="gender" id="male" label="남성" checked={gender === 'male'} onChange={() => setGender('male')} />
        </div>
      </FormField>

      <div style={{ marginTop: 16, padding: 12, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 6 }}>
        <pre style={{ margin: 0 }}>
          {JSON.stringify({ name, email, role, bio, agree, gender }, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default App


