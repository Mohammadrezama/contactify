import './contact.css';
export const Contact = (props) => {
  const { firstName, lastName } = props;
  return (
    <div className="contact">
      <span className="conatact__firstName">{firstName}, </span>
      <span className="lastName__lastName">{lastName}</span>
    </div>
  );
};
