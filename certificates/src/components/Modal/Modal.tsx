import { useEffect, useRef } from 'react';
import CloseBtn from '../../assets/svg/close-circle.svg';
import styles from './Modal.module.css';

export interface ModalProps {
  image: string;
  isOpen: boolean;
  closeModal: () => void;
}

export function Modal({image, isOpen, closeModal}: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, closeModal]);
  
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal} style={{opacity: `${isOpen ? 1 : 0}`}}>
        <img src={CloseBtn} className={styles.closeBtn} onClick={closeModal} />
        <div className={styles.modalContent} ref={modalRef}>
          <img src={image} alt="" className={styles.modalImage}/>
        </div>
      </div>
    </div>
  )
}
