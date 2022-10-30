import { useEffect, useRef, forwardRef } from 'react';
export const ClickAwayListener = forwardRef((props, ref) => {
  const { children, onClickAway } = props;
  const componentRef = useRef(null);
  function handleClickAway(e) {
    if (componentRef.current.contains(e.target)) return;
    if (ref && ref.current.contains(e.target)) return;
    onClickAway();
  }

  useEffect(() => {
    window.addEventListener('click', handleClickAway, true);
    return () => {
      window.removeEventListener('click', handleClickAway, true);
    };
  }, []);

  return <div ref={componentRef}>{children}</div>;
});
