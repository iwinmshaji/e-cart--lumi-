import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slice/productSlice'

function Header({insideHeader}) {
  const dispatch = useDispatch() 
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  console.log(userCart);

  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-light text-decoration-none fw-bold'><FontAwesomeIcon icon={faTruckFast} />E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          { insideHeader && <Nav.Item><input onChange={e=>dispatch(searchProduct(e.target.value))} type='text' className='form-control rounded' placeholder='Search the Products...'/></Nav.Item>}
          <Link to={'/wishlist'} className='text-light text-decoration-none fw-bold'><FontAwesomeIcon icon={faHeart} />Wishlist <Badge pill className='bg-secondary'>{userWishlist?.length}</Badge></Link>
          <Link to={'/cart'} className='text-light text-decoration-none fw-bold'><FontAwesomeIcon icon={faCartShopping} />Cart <Badge pill className='bg-secondary'>{userCart?.length}</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header