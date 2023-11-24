import styles from "./ContainerTitle.module.scss";

interface ContainerTitleProps {
  title: string;
}

export const ContainerTitle = ({ title }: ContainerTitleProps) => (
  <p className={styles.title}>{title}</p>
);
