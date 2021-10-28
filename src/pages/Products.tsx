import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import { Product } from '../types/Product';



function Products() {
  const [products, loading] = useProducts();

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
