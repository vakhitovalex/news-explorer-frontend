import { Link } from 'react-router-dom';

function InfoPopup(props) {
  return (
    <div
      className={`modal modal_type_info ${props.isOpen ? 'modal_open' : ''}`}
    >
      <div className='modal__container'>
        <button
          type='button'
          className='modal__close-button'
          onClick={props.onClose}
        ></button>
        <h3 className='modal__title'>
          {props.isRegistered
            ? `Registration successfully completed!`
            : `Oops, something went wrong! Please try again.`}
        </h3>

        <Link
          onClick={() => {
            props.onClose();
            props.onLinkClick();
          }}
          className='modal__link'
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default InfoPopup;
