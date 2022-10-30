import styles from './contact.module.css';
export const Contact = (props) => {
  const { firstName, lastName, onClick } = props;
  return (
    <div className={styles.contact} onClick={onClick}>
      <span className={styles.firstName}>{firstName}, </span>
      <span className={styles.lastName}>{lastName}</span>
    </div>
  );
};
