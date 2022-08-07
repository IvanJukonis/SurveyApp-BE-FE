import styles from './sd.module.css';
import React, { Component }  from 'react';

function SelectDropdown({
  fixedWidth = 1,
  name,
  error,
  value,
  disabled,
  onChange,
  pattern,
  options,
  required
}) {
  return (
    <div className={`${styles.container} ${!fixedWidth && styles.containerWidth}`}>
      <label className={`${styles.label} ${error && styles.labelError}`} htmlFor={name}>
        {name}
      </label>
      <select
        value={value}
        disabled={disabled}
        onChange={onChange}
        required={required}
        pattern={pattern}
        className={`${styles.select} ${error && styles.selectError}`}
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p className={styles.errorMessage}>{error}</p>
    </div>
  );
}

export default SelectDropdown;
