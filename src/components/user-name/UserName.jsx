import styles from './user-name.module.css';

export const UserName = ({ userName }) => {
  return (
    <div className={styles['user-name-wrapper']}>
      <span className={styles['label']}> Username </span>
      <span className={styles['user-name']}>{userName}</span>
    </div>
  );
};
