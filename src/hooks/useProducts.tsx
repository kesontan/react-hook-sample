import { Product } from '../types/Product';
import useFetch from './useFetch';


type ProductsHook = [Product[], boolean]

const useProducts = (): ProductsHook => {
    return useFetch<Product[]>("/product", []);
}

export default useProducts

