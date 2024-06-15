import s from './Button.module.css';
export const Button = ({ type, children, width, onClick }) => {
  return (
    <>
      {onClick ? (
        <button
          style={{ width }}
          className={s.button}
          type={type}
          onClick={() => onClick()}
        >
          {children}
        </button>
      ) : (
        <button style={{ width }} className={s.button} type={type}>
          {children}
        </button>
      )}
    </>
  );
};
