import { Link } from 'react-router-dom';
import './PopupWithForm.css';

function PopupWithForm(props) {
  return (
    <div
      className={`modal modal_type_${props.name} ${
        props.isOpen ? 'modal_open' : ''
      }`}
    >
      <div className='modal__container'>
        <button
          type='button'
          className='modal__close-button'
          onClick={props.onClose}
        ></button>
        <h3 className='modal__title'>{props.title}</h3>
        <form
          className='form'
          name={props.name}
          onSubmit={props.onSubmit}
          noValidate
        >
          {props.children}
          <button
            className='form__submit'
            type='submit'
            disabled={!props.buttonState}
          >
            {props.title}
          </button>
          <div className='form__option'>
            or{' '}
            <Link
              to='/'
              onClick={() => {
                props.onClose();
                props.onLinkClick();
              }}
              className='form__option-link'
            >
              {props.link}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
