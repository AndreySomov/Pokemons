import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox } from 'antd';

import { changeActiveCategories } from 'store/actions';

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.data);
  const formattedCategories = Object.keys(categories).map((key) => ({ value: key }));

  const onChange = (checkedValues) => {
    dispatch(changeActiveCategories(checkedValues));
  };

  return (
    <Checkbox.Group
      onChange={onChange}
      style={{ marginTop: '30px', display: 'flex', flexDirection: 'column' }}
    >
      {formattedCategories.map(
        (category) => (
          <Checkbox
            value={category.value}
            style={{ color: 'white', marginLeft: '10px' }}
          >
            {category.value}
          </Checkbox>
        ),
      )}
    </Checkbox.Group>
  );
};

export default Filters;
