import useSWR from "swr";
import billboardDataApi, { billboardRoute } from "../utils/billboard-table/billboard-api";

const useBillboardData = () => {
    const { data, error } = useSWR(billboardRoute.get,billboardDataApi.get);

    return {
        billboardData: !error && !data ? [] : data.billboardData,
        isLoading: !error && !data,
        isError: error
    }
}

const useBillboardGeneralInfo = () => {
    const { data, error } = useSWR(billboardRoute.general_info,billboardDataApi.billboard_general_get);
    return {
        billboardGeneralInfo: data,
        isLoading: !error && !data,
        isError: error
    }
}

export { useBillboardData, useBillboardGeneralInfo }