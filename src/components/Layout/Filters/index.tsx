import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox } from 'antd';

import actions from 'store/actions';

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);
  const formattedCategories = categories.map(
    (category) => ({ label: category.name, value: category.name }),
  );

  const onChange = (checkedValues) => {
    dispatch(actions.changeActiveCategories(checkedValues));
  };

  return (
    <Checkbox.Group
      style={{ color: 'white' }}
      options={formattedCategories}
      onChange={onChange}
    />
  );
};

export default Filters;
