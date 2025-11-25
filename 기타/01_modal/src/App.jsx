import useModal from './hooks/useModal'
import Modal from './components/Modal'

function App() {
  const productModal = useModal()
  const confirmModal = useModal()

  return (
    <div>
      <button onClick={productModal.open}>상품 모달 열기</button>
      <button onClick={confirmModal.open}>확인 모달 열기</button>

      <Modal isOpen={productModal.isOpen} onClose={productModal.close}>
        <h2>상품 정보</h2>
        <p>상품 상세 내용을 표시합니다</p>
        <button onClick={productModal.close}>닫기</button>
      </Modal>

      <Modal isOpen={confirmModal.isOpen} onClose={confirmModal.close}>
        <h2>확인</h2>
        <p>이 작업을 진행하시겠습니까?</p>
        <button onClick={confirmModal.close}>확인</button>
      </Modal>
    </div>
  )
}

export default App
