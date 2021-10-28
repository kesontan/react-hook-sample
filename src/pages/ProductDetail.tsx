import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useAuthContext } from '../context/AuthContext';
import { Product } from '../types/Product';


const API_URL = "https://r25sdug75k.execute-api.ap-southeast-1.amazonaws.com/stage"

type Params = {
  id: string
}

function ProductDetail() {

  const { id = "" } = useParams<Params>();
  const { isLoggedIn, token } = useAuthContext();


  const [loading, setLoading] = useState<boolean>();
  const [product, setProduct] = useState<Product>();

  const { name,
    price,
    qty } = product ?? {};

  useEffect(() => {

    async function init() {
      if (!isLoggedIn) {
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/product/${id}`, {
          headers: {
            Authorization: `basic ${token}`
          }
        });
        const data = await response.json();
        setProduct(data);
      } catch (ex) {
        console.log(ex);
        setProduct(undefined);
      }
      setLoading(false)
    }

    init();

  }, [isLoggedIn, id]);


  function renderItem() {
    return <div>
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      <p>Qty: {qty} units</p>
    </div>
  }

  if (!isLoggedIn) {
    return <div>Access Denied</div>
  }


  return (
    <div>
      {loading ? "Loading..." : renderItem()}
    </div>
  )
}

export default ProductDetail
