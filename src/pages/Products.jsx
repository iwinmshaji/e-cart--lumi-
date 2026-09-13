import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slice/productSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

function Products() {

  const { loading, allProducts, error } = useSelector(state => state.productReducer)
  const dispatch = useDispatch()

  // pagination
  const [currentPage,SetCurrentPage] = useState(1)
  const productPerPage = 8
  const totalPage = Math.ceil(allProducts?.length/productPerPage)
  const currentPageLastIndex = currentPage*productPerPage
  const currentPageFirstIndex = currentPageLastIndex-productPerPage
  const visibleProductsArray = allProducts?.slice(currentPageFirstIndex,currentPageLastIndex)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  const navigatePrevPage = ()=>{
    currentPage != 1 && SetCurrentPage(currentPage-1) 
  }
  const navigateNextPage = ()=>{
    currentPage != totalPage && SetCurrentPage(currentPage+1) 
  }

  return (
    <>
      <Header insideHeader />
      <div className="m-5">
        {
          loading ?
            <div className="text-center fw-bolder py-5">Loading...</div>
            :
            <div className="row pt-5">
              {
                allProducts.length > 0 ?
                  visibleProductsArray?.map(product => (
                    <div key={product?.id} className="col-md-3 mb-2">
                      <Card style={{ width: '18rem' }}>
                        <Card.Img style={{ height: '250px' }} variant="top" src={product?.thumbnail} />
                        <Card.Body className='text-center'>
                          <Card.Title>{product?.title}</Card.Title>
                          <Link to={`product/${product?.id}`} className='btn btn-primary'>View More</Link>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                  :
                  <div className="text-center fw-bolder py-5">Product Not Found!!!</div>
              }
            </div>
        }
        <div className="text-center my-3 fw-bolder fs-5">
          <button onClick={navigatePrevPage } className='btn'><FontAwesomeIcon icon={faBackward} /></button>
          {currentPage}/{totalPage}
          <button onClick={navigateNextPage} className='btn'><FontAwesomeIcon icon={faForward} /></button>
        </div>
      </div>
    </>
  )
}

export default Products