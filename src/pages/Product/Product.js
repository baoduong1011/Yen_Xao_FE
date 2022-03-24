import React, { useEffect, useState } from 'react'
import { getProductsService } from '../../Services/service'
import { useDispatch } from 'react-redux';
export default function Product() {

    const [listProducts , setListProducts] = useState({
        products:[]
    })

    useEffect(() => {
        getProductsService.getProducts().then(res => {
            setListProducts({ ...listProducts, products: res.data})
        })
        .catch(error => {
            console.log(error.response.data);
        })
    },[])

    const dispatch = useDispatch();

    let renderListProduct = () => {
        return listProducts.products?.map((product,index) => {
            return <div className='box' >
            <div className='icons' >
                <a href='#' className='fas fa-heart' ></a>
                <a href='#' className='fas fa-share' ></a>
                <a href='#' className='fas fa-eye' ></a>
            </div>
            <img src={product.imgProduct} />
            <div className='content' >

                <h3>{product.name}</h3>
                <div className='price' >
                ${product.price-20}.00 <span>${product.price}.00</span>
                </div>

                <div className='stars' >
                    <i className='fas fa-star' ></i>
                    <i className='fas fa-star' ></i>
                    <i className='fas fa-star' ></i>
                    <i className='fas fa-star' ></i>
                    <i className='fas fa-star' ></i>
                </div>
                <button  onClick={() => {
                    dispatch({
                        type: 'SELECT_PRODUCT',
                        name: product.name,
                        imgPro: product.imgProduct,
                        price:product.price,
                    })
                }} className='btn'>Add to cart <i class="fa fa-cart-plus"></i> </button>

                <button  style={{'padding':"1rem 3.5rem"}} className='btn' >View Detail <i class="fa fa-search"></i></button>

            </div>
        </div>
        })
    }

    return (
        <>
        <h1  style={{'padding':"5rem 8rem"}} className='heading' >MY <span>PRODUCTS</span></h1>
        <section className='main-product' id='product'>
            <div className='box-container'>
                {renderListProduct()}
            </div>
            



        </section>
        </>
        
    )
}
