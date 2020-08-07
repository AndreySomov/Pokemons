import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from 'components/Layout';

import { fetchCategoriesSuccess, fetchCategories } from 'store/actions';
import { getCategories } from 'api';
import { normalizeCategory } from 'utils/utils';

const InitApp: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const isLoadingList = useSelector((store) => store.isLoadingList);

  useEffect(() => {
    dispatch(fetchCategories());

    getCategories()
      .then((data) => dispatch(fetchCategoriesSuccess(normalizeCategory(data))));
  }, []);

  if (isLoadingList) return <Layout><div>Loading...</div></Layout>;

  return (
    <>
      <Layout>
        {children}
      </Layout>
    </>
  );
};

export default InitApp;
