import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox } from 'antd';
import { useRouter } from 'next/router';

import { changeActiveCategories } from 'store/actions';
import { Container } from './styles';

const Filters: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.data);
  const formattedCategories = Object.keys(categories).map((key) => ({ value: key }));

  const onChange = useCallback((checkedValues) => {
    dispatch(changeActiveCategories(checkedValues));
  }, []);

  return (
    <Container disabled={router.pathname === '/'}>
      <Checkbox.Group
        onChange={onChange}
        style={{
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
        }}
        disabled={router.pathname !== '/'}
      >
        {formattedCategories.map(
          (category) => (
            <Checkbox
              value={category.value}
              style={{ color: 'white', marginLeft: '10px' }}
              key={category.value}
            >
              {category.value}
            </Checkbox>
          ),
        )}
      </Checkbox.Group>
    </Container>
  );
};

export default Filters;
