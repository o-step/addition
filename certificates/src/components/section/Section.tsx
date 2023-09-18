import styles from './Section.module.css';

export interface SectionProps {
  title: string;
  images: string[];
  openImage: (image: string) => void;
}

export function Section({title, images, openImage}: SectionProps) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.images}>
        {images.map((src, i) => <img className={styles.image} src={src} key={i} onClick={() => openImage(src)}/>)}
      </div>
    </section>
  )
}
