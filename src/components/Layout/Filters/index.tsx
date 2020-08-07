import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox } from 'antd';

import { changeActiveCategories } from 'store/actions';

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.data);
  const formattedCategories = Object.keys(categories).map((key) => ({ label: key, value: key }));

  const onChange = (checkedValues) => {
    dispatch(changeActiveCategories(checkedValues));
  };

  return (
    <Checkbox.Group
      options={formattedCategories}
      onChange={onChange}
      style={{ display: 'flex', flexWrap: 'wrap', marginTop: '30px' }}
    />
  );
};

export default Filters;
