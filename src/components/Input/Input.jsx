import s from './Input.module.css';
import Select from 'react-select';

export const Input = ({ title, name, placeholder, options, width }) => {
  const defaultValues = JSON.parse(window.localStorage.getItem(name))
    ? JSON.parse(window.localStorage.getItem(name))
    : null;
  return (
    <label
      style={{ width }}
      htmlFor={title}
      className={s.label}
    >
      {title}
      <Select
        className="basic-single"
        classNamePrefix="select"
        isClearable={true}
        placeholder={placeholder}
        isSearchable={true}
        defaultValue={defaultValues}
        onChange={(data) => {
          window.localStorage.setItem(name, JSON.stringify(data));
        }}
        name={name}
        options={options.map((brand) => ({ value: brand, label: brand }))}
      />
    </label>
  );
};
