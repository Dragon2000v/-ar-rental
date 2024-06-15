import { numberDeFormat, numberFormat } from '../../helpers/numberFormat';
import s from './AdjInput.module.css';
import clsx from 'clsx';

import { getDefaultData } from '../../helpers/getDefaultData';
import { inputDataChecker } from '../../helpers/inputDataChecker';

export const AdjInput = ({ width, title }) => {
  const defaultValues = getDefaultData('min', 'max');

  const onChange = (event, value) => {
    const number = numberDeFormat(event.target.value);
    if (number !== 0) {
      event.target.value = numberFormat(number);
    } else {
      event.target.value = '';
    }
    window.localStorage.setItem(value, JSON.stringify(event.target.value));
  };
  return (
    <label style={{ width }} htmlFor={title} className={s.label}>
      {title}
      <div className={s.div}>
        <p className={clsx(s.placeholder, s.from)}>From </p>
        <input
          className={clsx(s.input, s.left)}
          type="text"
          name="min"
          id="min"
          maxLength="7"
          defaultValue={defaultValues.min}
          onChange={event => {
            inputDataChecker(event);
            onChange(event, 'min');
          }}
        />

        <p className={clsx(s.placeholder, s.to)}>To </p>
        <input
          className={clsx(s.input, s.right)}
          type="text"
          name="max"
          id="max"
          maxLength="7"
          defaultValue={defaultValues.max}
          onChange={event => {
            inputDataChecker(event);
            onChange(event, 'max');
          }}
        />
      </div>
    </label>
  );
};
