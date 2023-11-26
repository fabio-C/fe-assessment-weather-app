import styles from "./ContainerTitle.module.scss";

interface ContainerTitleProps {
  title: string;
}

export const ContainerTitle = ({ title }: ContainerTitleProps) => (
  <p data-testid="container-title" className={styles.title}>{title}</p>
);
