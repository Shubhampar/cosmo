import React, { useState, useEffect } from 'react';

const FilteredList = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Pineapple',
  ];

  const filterItems = (value) => {
    return items.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setFilteredList(filterItems(inputValue));
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [inputValue]);

  const throttledFilter = (func, delay) => {
    let throttled = false;
    return function () {
      if (!throttled) {
        func.apply(this, arguments);
        throttled = true;
        setTimeout(() => {
          throttled = false;
        }, delay);
      }
    };
  };

  const throttledFilterItems = throttledFilter((value) => {
    setFilteredList(filterItems(value));
  }, 300);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    throttledFilterItems(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
