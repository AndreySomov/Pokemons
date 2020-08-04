import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from 'components/Layout';

import actions from 'store/actions';
import { getBasePokesList, getCategories } from '../../api';

const InitApp: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const isLoadingList = useSelector((store) => store.pokes.isLoadingList);

  useEffect(() => {
    dispatch(actions.fetchBasePokesList());
    dispatch(actions.fetchCategories());

    getBasePokesList()
      .then((data) => dispatch(actions.fetchBasePokesListSuccess(data.results)));

    getCategories()
      .then((data) => dispatch(actions.fetchCategoriesSuccess(data)));
  }, []);

  return (
    <>
      <Layout>
        {isLoadingList ? 'Loading...' : children}
      </Layout>
    </>
  );
};

export default InitApp;
