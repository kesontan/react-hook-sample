
import { Product } from '../types/Product';
import useAuthFetch from './useAuthFetch'

type ProductHooks = [Product, boolean]

const useProducDetail = (id: string) : ProductHooks => {
    return useAuthFetch<Product>(`/product/${id}`);
}

export default useProducDetail
