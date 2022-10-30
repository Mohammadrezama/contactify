import styles from './contact-card.module.css';
import { useMemo } from 'react';
import { UserName, Close } from 'components';
export const ContactCard = ({ user, onClose }) => {
  const infoArray = useMemo(
    () => [
      { label: 'e-mail', value: user.email ? user.email : ' ' },
      { label: 'phone', value: user.phone ? user.phone : '' },
      {
        label: 'street',
        value: user?.location?.street?.name ? user.location.street.name : '',
      },
      { label: 'city', value: user?.location?.city ? user.location.city : '' },
      {
        label: 'state',
        value: user?.location?.state ? user.location.state : '',
      },
      {
        label: 'postcode',
        value: user?.location?.postcode ? user?.location?.postcode : '',
      },
    ],
    [user]
  );
  return (
    <div className={styles['contact-card']}>
      <Close onClick={onClose} />
      <div className={styles['img-grid']}>
        <img
          src={user.picture.large}
          alt="user-img"
          className={styles['img']}
        />
      </div>
      <div className={styles['info-grid']}>
        <div className={styles['name-box']}>
          <span className="textw-uppercase ">{user.name.last}, </span>
          <span className="text-lowercase"> {user.name.first}</span>
        </div>
        <div className={styles['info-box']}>
          {infoArray.map((item) => {
            return (
              <>
                {' '}
                <div className={styles['label']}>{item.label}</div>
                <div className={styles['value']}>{item.value}</div>
              </>
            );
          })}
        </div>
        <UserName userName={user?.login?.username ? user.login.username : ''} />
      </div>
    </div>
  );
};
