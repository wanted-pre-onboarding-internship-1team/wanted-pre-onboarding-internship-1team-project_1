import { createContext, useContext } from 'react';
import useFilter from '../../hooks/useFilter';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [currentFilter, setCurrentFilter, filterTitle] = useFilter();

  const value = { currentFilter, setCurrentFilter, filterTitle };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
