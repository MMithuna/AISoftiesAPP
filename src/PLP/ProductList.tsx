import Product from './Product';
import axios from 'axios';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const ProductList = () => {
  // let products =[
  //   { "prodId": 1, "id": 1, "title": "AI Imagify", "body": "Generate creative AI images." },
  //   { "prodId": 2, "id": 2, "title": "Coding", "body": "Create apps with AI" },
  // ] 

  // axios.get('http://localhost:3001/')
  // .then((resp) => console.log(resp))
  // // .then((data) => console.log("data ::", data))
  // .catch((error) => console.log(error));

  // const payload = {
  //   name:'getproducts',
  //   limit:50
  //  }

  // axios.post('http://localhost:3001/products', payload)
  // .then((resp) => console.log(resp))
  // // .then((data) => console.log("data ::", data))
  // .catch((error) => console.log(error));

  // const getUserfun = gql`
  //   query GetUser{
  //     getUser
  //   }
  // `
  // const resp = useQuery(getUserfun);
  // console.log( " RESP ::", resp)

  const getProdList = gql`
    query GetProds{
      getProducts {
        id,name, description, price
      }
    }`

  const {loading, error, data} = useQuery(getProdList);
  // const products = data?.getProducts;

  return (
    <div>
      <h2> Products </h2>
      <div className='grid grid-cols-4 gap-4'>
        {data?.getProducts?.map((product:{}) => 
          <Product listItem={product} key={product?.id}></Product>
        )}
      </div>   
    </div>
  )
}

export default ProductList;