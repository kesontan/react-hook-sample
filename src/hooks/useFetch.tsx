import { useEffect, useState } from 'react';

const API_URL = "https://r25sdug75k.execute-api.ap-southeast-1.amazonaws.com/stage"

export type FetchHook<T> =  [T, boolean]

function useFetch<T>(url: string, defaultValue?: T, token? : string): FetchHook<T> {

    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<T | undefined>(defaultValue);

    useEffect(() => {
        
        async function init() {
            if(!url) {
                return setResponse(defaultValue);
            }

            setLoading(true);
            try {
                const response = await fetch(`${API_URL}${url}`, {
                    headers: {
                        authorization: token ?? ""
                    }
                });
                const data = await response.json();
                setResponse(data);
            } catch (ex) {
                console.log(ex);
                setResponse(defaultValue)
            }
            setLoading(false)
        }

        init();

    // eslint-disable-next-line 
    }, [url, token]);

    return [response as T, loading];
}

export default useFetch
