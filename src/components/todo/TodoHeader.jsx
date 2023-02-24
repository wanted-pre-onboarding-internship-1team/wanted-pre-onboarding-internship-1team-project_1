import React from 'react';
import { HiHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeadButton from '../../components/common/HeadButton';
import { FILTERS } from '../../const/filter';
import { useFilterContext } from './FilterContext';

export default function TodoHeader() {
  const { currentFilter, setCurrentFilter } = useFilterContext();

  const onFilterChange = id => {
    setCurrentFilter(id);
  };
  return (
    <TodoHead>
      <Links to='/'>
        <HiHome className='home-logo' />
      </Links>
      <Filter>
        {FILTERS.map(filter => {
          const isCurrent = currentFilter === filter.id;
          return (
            <FilterList key={filter.id}>
              <HeadButton
                clickFunc={() => onFilterChange(filter.id)}
                title={filter.title}
                isCurrent={isCurrent}
              />
            </FilterList>
          );
        })}
      </Filter>
    </TodoHead>
  );
}

const TodoHead = styled.header`
  border-bottom: 1px solid var(--color-grey);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .home-logo {
    margin: 5px 0 0 20px;
    color: var(--color-darkblue);
    font-size: 40px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Links = styled(Link)``;

const Filter = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px 0 60px;
`;

const FilterList = styled.li``;
