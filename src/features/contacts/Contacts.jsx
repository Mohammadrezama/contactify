import { useState } from 'react';
import { Contact, Popover, ClickAwayListener } from 'components';
import { ContactCard } from 'features';
import styles from './contacts.module.css';
export const Contacts = ({ items }) => {
  const [showPopup, setShow] = useState(false);
  const [position, setPositon] = useState({ top: 0, right: 0, left: 0 });
  const [user, setUser] = useState(null);
  function onClick(e, item) {
    let position = e.currentTarget.getBoundingClientRect();
    setPositon({
      top: position.top + position.height,
      right: position.right,
      left: position.left,
      width: position.width,
    });
    setUser(item);
    setShow(true);
  }
  const onClose = () => {
    setUser(null);
    setShow(false);
  };

  return (
    <ClickAwayListener onClickAway={onClose}>
      <div className={styles['contacts']} style={{ position: 'relative' }}>
        {items.map((item, index) => (
          <Contact
            lastName={item.name.last}
            firstName={item.name.first}
            key={index}
            onClick={(e) => onClick(e, item)}
          />
        ))}
        <Popover show={showPopup} style={{ ...position }}>
          {user && <ContactCard user={user} onClose={onClose} />}
        </Popover>
      </div>
    </ClickAwayListener>
  );
};
