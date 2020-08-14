import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, AutoComplete } from 'antd';
import { SelectProps } from 'antd/es/select';

import { setSearchQuery } from 'store/actions';

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState<SelectProps<object>['options']>([]);
  const basePokesList = useSelector((state) => state.data.all);

  const searchResult = (query: string) => basePokesList.filter((item) => item.match(query))
    .map((item) => (
      {
        value: item,
        label: (
          <div>
            {item}
          </div>
        ),
      }));

  const handleSearch = (value: string) => {
    dispatch(setSearchQuery(value));
    setOptions(value ? searchResult(value) : []);
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: '100%' }}
      options={options}
      onSelect={handleSearch}
      onSearch={handleSearch}
    >
      <Input size="large" placeholder="Find your pokemon" />
    </AutoComplete>
  );
};

export default SearchInput;
