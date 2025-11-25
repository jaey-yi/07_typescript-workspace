import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'


/**
 * Modal 컴포넌트 
 * 
 * @param {object} props - 컴포넌트에 전달된 props 객체
 * @param {boolean} props.isOpen - 모달 열림 여부
 * @param {function} props.onClose - 모달 닫기 함수 (오버레이 클릭, X 버튼 클릭시 실행할 닫기 핸들러)
 * @param {React.ReactNode} props.children - 모달 내부에 렌더링할 콘텐츠 (재사용의 핵심 포인트)
 * @returns 
 */
function Modal({ isOpen, onClose, children }) {

  // case1. 열려있지 않다면 아무것도 렌더링하지 않음 (DOM 자체를 만들지 않음)
  if (!isOpen) return null;

  // case2. 열려있다면 React Portal을 사용해 모달을 루트 외부의 별도 DOM 노드(#modal-root)에 렌더링
  // - 모달이 레이아웃/overflow의 제약을 받지 않도록 독립적으로 표시 가능
  return ReactDOM.createPortal(
    // 오버레이: 배경 영역(모달 박스 바깥 영역) 클릭 시 닫기
    <div className="modal-overlay" onClick={onClose}>
      {/* 실제 모달 박스. 내부 클릭이 오버레이 클릭으로 전파되지 않도록 중단 */}
      <div className="modal" onClick={e => e.stopPropagation()}>
        {/* 우상단 닫기 버튼 */}
        <button className="modal-close-btn" onClick={onClose}>X</button>
        {/* 외부로부터 주입되는는 콘텐츠: 어떤 UI든 children으로 전달해 재사용 */}
        {children}
      </div>
    </div>,
    // 모달을 렌더링할 DOM 노드: index.html 내의 <div id="modal-root"></div>
    document.getElementById('modal-root')
  );
}

export default Modal

/*
  ## ReactDOM.createPortal() 
  1. 리액트 컴포넌트 자식을 현재 컴포넌트의 DOM 계층 바깥에 있는 특정 DOM 노드로 렌더링할 수 있게 해주는 함수입니다. 
  2. 주로 모달, 드롭다운, 툴팁 등 부모 컴포넌트의 overflow, z-index 등의 스타일 영향을 받지 않고 별도의 위치에 UI를 표시해야 할 때 사용합니다.
  3. 작성 형식 
    ReactDOM.createPortal(렌더링할 내용, 대상 DOM 노드)
*/
