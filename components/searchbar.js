import React from 'react';
import styles from './SearchBar.module.css'; // Make sure the path is correct

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <div className={styles['search-bar']}>
      <input
        type="text"
        placeholder={placeholder || 'Search...'}
        onChange={onChange}
        className={styles.input} // Add className for input if needed
      />
      <button type="submit" className={styles.button}>Search</button>
    </div>
  );
};

export default SearchBar;
