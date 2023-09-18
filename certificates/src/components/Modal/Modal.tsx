import styles from './Modal.module.css';

export interface ModalProps {
  image: string;
  isOpen: boolean;
}

export function Modal({image, isOpen}: ModalProps) {
  return (
    <div className={styles.modal} style={{opacity: `${isOpen ? 1 : 0}`}}>
      <img src={image} alt="" className={styles.modalImage}/>
    </div>
  )
}
