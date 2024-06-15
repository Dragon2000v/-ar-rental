import { numberDeFormat } from './numberFormat';

export const inputDataChecker = (event) => {
  if (isNaN(numberDeFormat(event.target.value))) {
    event.target.value = event.target.value.slice(
      0,
      event.target.value.length - 2
    );
  }
};
