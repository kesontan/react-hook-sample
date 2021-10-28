import React from 'react';
import { useParams } from 'react-router';
import useProducDetail from '../hooks/useProducDetail';



type Params = {
  id: string
}

function ProductDetail() {

  const { id = "" } = useParams<Params>();
  const [product, loading] = useProducDetail(id);
  const { name, price, qty } = product ?? {};

  function renderItem() {
    return <div>
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      <p>Qty: {qty} units</p>
    </div>
  }

  if (!product) {
    return <div>Access Denied</div>
  }


  return (
    <div>
      {loading ? "Loading..." : renderItem()}
    </div>
  )
}

export default ProductDetail
