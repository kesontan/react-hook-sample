import { useAuthContext } from "../context/AuthContext";
import useFetch, { FetchHook } from "./useFetch";


function useAuthFetch<T>(url: string, defaultValue?: T): FetchHook<T> {
    const { token } = useAuthContext();
    return useFetch(token ? url : "", defaultValue, token);
}

export default useAuthFetch
