import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { delCart } from '../redux/action';

const cart = () => {
    const state=useSelector((state)=>state.handleCart);
    const dispatch =useDispatch();

    const cartItems =(product)=>{
        return (
            <div className='px-4 my-5 bg-light rounded-3 ' key={product.id}>

                <div className='container py-4'>
                    <button className='btn-close float-end' aria-label='Close'>
                         </button>
                         <div className='row justify-content-center'>


<div className='col-md-4'>
    <img src={product.image} alt={product.title}
    height="200px" width="100px"/>
    
</div>
<div className='col-md-4'>
   <h3>{product.title}</h3>
   <p className="lead fw-bold">
    {product.qty} * ${product.price}=${product.qty*product.price}
   </p>
   <button className="btn btn-outline-dark me-4" onClick={()=>handleButton(product)}>
    <i className='fa fa-minus'></i>
   </button>
   <button className="btn btn-outline-dark me-4" onClick={()=>handleButton(product)}>
    <i className='fa fa-plus'></i>
   </button>
    
</div>

</div>

                </div>
            </div>
        );
    }
  return (
    <>
   {state.length!==0 && state.map(cartItems)}
    
    </>
  );
}

export default cart