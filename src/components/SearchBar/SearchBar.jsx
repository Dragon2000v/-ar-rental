import { useDispatch } from 'react-redux';
import { perHour } from '../../helpers/perHour';
import { AdjInput } from '../AdjInput/AdjInput';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import s from './SearchBar.module.css';
import { clearFilter, setFilter } from '../../redux/filter/slice';
import { fetchAllThunk } from '../../redux/catalog/operations';
import { toast } from 'react-toastify';
import { numberDeFormat } from '../../helpers/numberFormat';
import { motion } from 'framer-motion';
import { brands } from '../../helpers/brands';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filterValues = {
      brand: formData.get('brand'),
      perHour: Number(formData.get('perHour')),
      min: numberDeFormat(formData.get('min')),
      max: numberDeFormat(formData.get('max')),
    };
    const { brand, perHour, min, max } = filterValues;
    if (min !== 0 && max !== 0 && min > max) {
      toast.error('Min Mileage cannot be bigger than Max!');
      return;
    }
    if (
      (brand || perHour || min || max) &&
      !(min !== 0 && max !== 0 && min > max)
    ) {
      dispatch(fetchAllThunk());
      dispatch(setFilter(filterValues));
    } else {
      toast.success('No values entered - filter reseted!');
      dispatch(clearFilter());
    }
  };

  return (
    <motion.form
      className={s.form}
      onSubmit={(event) => onSubmit(event)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Input
        title="Car brand"
        placeholder="Enter the text"
        options={brands}
        name="brand"
        width="224px"
      />
      <Input
        title="Price / 1 hour"
        placeholder="To $"
        options={perHour()}
        name="perHour"
        width="125px"
      />
      <AdjInput
        title="Сar mileage / km"
        width="320px"
      />
      <Button
        type="submit"
        width="136px"
      >
        Search
      </Button>
    </motion.form>
  );
};
