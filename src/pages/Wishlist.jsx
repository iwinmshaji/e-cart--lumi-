import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';
import Swal from 'sweetalert2';

function WishList() {
  const userWishlist = useSelector(state => state.wishlistReducer)
  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()

  const handleCart = (product)=>{
    const existingproduct = userCart?.find(item=>item.id==product?.id)
    dispatch(addToCart(product))
    Swal.fire({
        title: "Success",
        text: existingproduct?`Product ${existingproduct.title} quantity incremented`:`Product Added to cart`,
        icon: "success",
        confirmButtonText: "OK"
      });
  }

  return (
    <>
      <Header />
      <div className="container my-5">
        {
          userWishlist?.length > 0 ?
            <>
              <h1 className="pt-5 text-primary">User Wishlist</h1>
              <div className="row pt-5">
                {
                  userWishlist?.map(item => (
                    <div key={item?.id} className="col-md-3 mb-2">
                      <Card style={{ width: '18rem' }}>
                        <Card.Img style={{ height: '250px' }} variant="top" src={item?.thumbnail} />
                        <Card.Body>
                          <Card.Title>{item?.title}</Card.Title>
                          <div className="d-flex justify-content-evenly">
                            <button onClick={()=>dispatch(removeFromWishlist(item?.id))} className="btn text-danger fs-4"><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                            <button onClick={()=>handleCart(item)} className="btn text-success fs-4"><FontAwesomeIcon icon={faCartPlus} /></button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                }
              </div>
            </>
            :
            <div style={{ height: '100vh' }} className='d-flex flex-column justify-content-center align-items-center text-center'>
              <img className='w-25' src="https://cdn.dribbble.com/userupload/29471897/file/original-445e7655908c71a77099cdca6b1528e1.gif" alt="Wishlist empty" />
              <h1>Your wishlist is empty</h1>
              <Link to={'/'} className='btn btn-primary'>Add More..</Link>
            </div>
        }
      </div>
    </>
  )
}

export default WishList