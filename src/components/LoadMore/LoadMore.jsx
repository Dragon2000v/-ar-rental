import s from './LoadMore.module.css';

export const LoadMore = ({ nextPage }) => {
  return (
    <button
      type="button"
      className={s.button}
      onClick={() => nextPage()}
    >
      Load more
    </button>
  );
};
