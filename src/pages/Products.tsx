import React, { useEffect, useState } from 'react'
import { Product } from '../types/Product';

import {
  Link
} from "react-router-dom";


const API_URL = "https://r25sdug75k.execute-api.ap-southeast-1.amazonaws.com/stage"

function Products() {
  const [loading, setLoading] = useState<boolean>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {

    async function init() {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/product`);
        const data = await response.json();
        setProducts(data);
      } catch (ex) {
        console.log(ex);
        setProducts([])
      }
      setLoading(false)
    }

    init();

  }, []);


  function renderItem({
    id,
    name,
  }: Product) {
    return <li>
      <Link to={`/${id}`}>{id}</Link>: {name}
    </li>
  }

  return (
    <div>
      {loading ? "Loading ..." : <ul>{products.map(renderItem)}</ul>}
    </div>
  )
}

export default Products
