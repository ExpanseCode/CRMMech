import ReactModal from 'react-modal';
import css from './Modal.module.css';

export default function Modal({
  isOpen,
  onClose,
  children,
  allowOverlayClickClose = true,
}) {
  return (
    <ReactModal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={allowOverlayClickClose}
      ariaHideApp={false}
      onRequestClose={onClose}
      bodyOpenClassName="modal-open"
      onAfterClose={() => {
        const openedModals = document.querySelectorAll(
          '.ReactModal__Overlay'
        ).length;
        if (openedModals === 0) {
          document.body.classList.remove('modal-open');
        }
      }}
    >
      <>{children}</>
    </ReactModal>
  );
}
