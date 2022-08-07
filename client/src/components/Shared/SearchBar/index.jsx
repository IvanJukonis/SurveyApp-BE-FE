import styles from './search.module.css';
import React, { Component }  from 'react';

const Search = ({ searchQuery, setSearchQuery, placeholder }) => {
  return (
    <form className={styles.flatSearch}>
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder={placeholder}
        className={styles.search}
      />

      {searchQuery ? (
        <button
          className={styles.xButton}
          onClick={() => {
            setSearchQuery('');
          }}
        >
          X
        </button>
      ) : (
        <span>&#x1F50E;&#xFE0E;</span>
      )}
    </form>
  );
};

export default Search;
