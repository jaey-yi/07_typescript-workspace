import { useState } from 'react'
import Button from './components/common/Button'
import Modal from './components/common/Modal'
import useModal from './hooks/useModal'
import FormField from './components/common/FormField'
import Input from './components/common/Input'
import Select from './components/common/Select'
import Textarea from './components/common/Textarea'
import Checkbox from './components/common/Checkbox'
import Radio from './components/common/Radio'

function App() {
  // Modal 상태 관리
  const modal1 = useModal()
  const modal2 = useModal()

  // Form 상태 관리
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
    terms: false,
    newsletter: false,
    gender: 'male',
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('폼이 제출되었습니다! 콘솔을 확인하세요.')
  }

  return (
    <div className="app-container" style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '32px', color: 'var(--color-text-primary)' }}>
        공통 컴포넌트 예시
      </h1>

      {/* ===== Button 예시 ===== */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', color: 'var(--color-text-primary)' }}>Button 컴포넌트</h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <Button size="sm" variant="primary">Small</Button>
          <Button size="md" variant="primary">Medium</Button>
          <Button size="lg" variant="primary">Large</Button>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <Button block variant="primary" onClick={modal1.open}>
            Modal 열기 (Block 버튼)
          </Button>
        </div>

        <Button variant="primary" disabled>Disabled</Button>
      </section>

      {/* ===== Modal 예시 ===== */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', color: 'var(--color-text-primary)' }}>Modal 컴포넌트</h2>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="primary" onClick={modal1.open}>
            기본 Modal 열기
          </Button>
          <Button variant="secondary" onClick={modal2.open}>
            폼이 있는 Modal 열기
          </Button>
        </div>

        <Modal isOpen={modal1.isOpen} onClose={modal1.close}>
          <div style={{ padding: '8px 0' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--color-text-primary)' }}>
              기본 Modal 예시
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
              이것은 기본 모달입니다. 오버레이를 클릭하거나 X 버튼을 눌러 닫을 수 있습니다.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <Button variant="secondary" onClick={modal1.close}>취소</Button>
              <Button variant="primary" onClick={modal1.close}>확인</Button>
            </div>
          </div>
        </Modal>

        <Modal isOpen={modal2.isOpen} onClose={modal2.close}>
          <div style={{ padding: '8px 0' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--color-text-primary)' }}>
              폼이 있는 Modal
            </h3>
            <form onSubmit={(e) => { e.preventDefault(); modal2.close(); }}>
              <FormField label="이름" required>
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="이름을 입력하세요"
                />
              </FormField>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
                <Button type="button" variant="secondary" onClick={modal2.close}>취소</Button>
                <Button type="submit" variant="primary">제출</Button>
              </div>
            </form>
          </div>
        </Modal>
      </section>

      {/* ===== Form 컴포넌트 예시 ===== */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', color: 'var(--color-text-primary)' }}>Form 컴포넌트</h2>
        
        <form onSubmit={handleSubmit} style={{ background: 'var(--color-neutral-50)', padding: '24px', borderRadius: 'var(--radius-md)' }}>
          <FormField 
            label="이름" 
            htmlFor="name"
            required
            helperText="실명을 입력해주세요"
          >
            <Input 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="홍길동"
            />
          </FormField>

          <FormField 
            label="이메일" 
            htmlFor="email"
            required
            helperText="이메일을 입력해주세요"
            error={formData.email && !formData.email.includes('@') ? '올바른 이메일 형식이 아닙니다' : ''}
          >
            <Input 
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
            />
          </FormField>

          <FormField 
            label="역할" 
            htmlFor="role"
            helperText="현재 역할을 선택하세요"
          >
            <Select 
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">선택하세요</option>
              <option value="developer">개발자</option>
              <option value="designer">디자이너</option>
              <option value="pm">프로젝트 매니저</option>
              <option value="other">기타</option>
            </Select>
          </FormField>

          <FormField 
            label="메시지" 
            htmlFor="message"
            size="lg"
          >
            <Textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="메시지를 입력하세요..."
              rows={5}
            />
          </FormField>

          <FormField 
            label="성별"
            helperText="성별을 선택하세요"
          >
            <div style={{ display: 'flex', gap: '16px' }}>
              <Radio 
                name="gender"
                id="male"
                label="남성"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              <Radio 
                name="gender"
                id="female"
                label="여성"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              <Radio 
                name="gender"
                id="other"
                label="기타"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
              />
            </div>
          </FormField>

          <FormField>
            <Checkbox 
              id="terms"
              name="terms"
              label="이용약관에 동의합니다"
              checked={formData.terms}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <Checkbox 
              id="newsletter"
              name="newsletter"
              label="뉴스레터 구독하기"
              checked={formData.newsletter}
              onChange={handleChange}
            />
          </FormField>

          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
            <Button type="submit" variant="primary" block disabled={!formData.name || !formData.email || !formData.email.includes('@')}>
              제출하기
            </Button>
            <Button type="button" variant="secondary" onClick={() => setFormData({
              name: '',
              email: '',
              role: '',
              message: '',
              terms: false,
              newsletter: false,
              gender: 'male',
            })}>
              초기화
            </Button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default App
