import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Input, AutoComplete } from 'antd';
import { SelectProps } from 'antd/es/select';

const SearchInput: React.FC = () => {
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
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: '100%' }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  );
};

export default SearchInput;
