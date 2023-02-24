import { useState } from 'react';
import { FILTERS } from '../const/filter';

const useFilter = () => {
  const [currentFilter, setCurrentFilter] = useState(FILTERS[0].id);
  const filterTitle = id => {
    let title;
    FILTERS.forEach(filter => {
      if (filter.id === id) {
        title = filter.title;
      }
    });
    return title;
  };
  return [currentFilter, setCurrentFilter, filterTitle];
};

export default useFilter;
