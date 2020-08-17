import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from 'components/Loading';

import { fetchCategoriesSuccess } from 'store/actions';
import { fetchCategories } from 'api';
import { normalizeCategory } from 'utils/utils';

const InitApp: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const isLoadingList = useSelector((store) => store.isLoadingList);

  useEffect(() => {
    (async () => {
      const categories = await fetchCategories();
      dispatch(fetchCategoriesSuccess(normalizeCategory(categories)));
    })();
  }, []);

  if (isLoadingList) return <Loading />;

  return (
    <>
      {children}
    </>
  );
};

export default InitApp;
