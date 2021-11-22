import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import Loader from './Loader';

const Result = ({ url }) => {
  const { data, isLoading, error } = useJsonFetch(url);

  return (
    <>
      {isLoading && <Loader />}
      {data && <p>{JSON.stringify(data)}</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default Result;
