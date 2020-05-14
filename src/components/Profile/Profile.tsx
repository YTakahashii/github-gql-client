import React from 'react';
import { useGetProfileQuery } from '../../__generated__/graphql';

export const Profile: React.FC = () => {
  const { data, loading, error } = useGetProfileQuery();

  if (loading) return <p>loading</p>;
  if (error) return <p>{JSON.stringify(error, null, 2)}</p>;
  return <p>{data ? data.viewer.login : 'empty'}</p>;
};
