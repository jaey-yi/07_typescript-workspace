import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container" style={{ padding: '24px' }}>
      <h1>Button 컴포넌트 재사용</h1>

      <h3>Variants</h3>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="link">Link</Button>
      </div>

      <h3 style={{ marginTop: 16 }}>Sizes</h3>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      <h3 style={{ marginTop: 16 }}>Block</h3>
      <div style={{ width: 320 }}>
        <Button block>Full width button</Button>
      </div>

      <h3 style={{ marginTop: 16 }}>Disabled</h3>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button disabled>Disabled</Button>
        <Button variant="secondary" disabled>
          Disabled Secondary
        </Button>
        <Button variant="ghost" disabled>
          Disabled Ghost
        </Button>
        <Button variant="success" disabled>
          Disabled Success
        </Button>
        <Button variant="danger" disabled>
          Disabled Danger
        </Button>
        <Button variant="warning" disabled>
          Disabled Warning
        </Button>
        <Button variant="outline" disabled>
          Disabled Outline
        </Button>
        <Button variant="link" disabled>
          Disabled Link
        </Button>
      </div>

      <h3 style={{ marginTop: 16 }}>Interactive</h3>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button onClick={() => setCount((c) => c + 1)}>Click +1</Button>
        <span>Count: {count}</span>
      </div>
    </div>
  )
}

export default App
