import { useSelector } from 'react-redux';
import useSWR from 'swr';
import billboardDataApi, {
  billboardRoute,
} from '../utils/billboard-table/billboard-api';

const useBillboardData = () => {
  const { _id } = useSelector((state) => state.user);
  const { data, error } = useSWR(
    `${billboardRoute.url}${_id}/billboard`,
    billboardDataApi.get
  );

  return {
    billboardData: !error && !data ? [] : data.billboardData,
    isLoading: !error && !data,
    isError: error,
  };
};

const useBillboardGeneralInfo = () => {
  const { _id } = useSelector((state) => state.user);
  const { data, error } = useSWR(
    `${billboardRoute.url}${_id}/billboard-general`,
    billboardDataApi.billboard_general_get
  );
  return {
    billboardGeneralInfo: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { useBillboardData, useBillboardGeneralInfo };
