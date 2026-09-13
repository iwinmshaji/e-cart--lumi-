import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faEnvelope, faPhone, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <footer className="footer bg-primary text-light pt-3">
      <div className="container">
        <div className="footer-row d-flex flex-wrap">

          <div className="footer-brand col-lg-5 col-md-6">
            <h3>
              <FontAwesomeIcon icon={faTruck} className="truck-icon" />
              E Cart
            </h3>
            <p>
              Designed and built with all the love in the world by the
              <br />
              Luminar team with the help of our contributors.
            </p>
            <p>Code licensed Luminar, docs CC BY 3.0.</p>
            <p>Currently v5.3.2.</p>
          </div>

          <div className="footer-links col-lg-2 col-md-3 col-sm-6">
            <h4>Links</h4>
            <a className='text-light text-decoration-none' href="/">Home</a><br />
            <a className='text-light text-decoration-none' href="/wishlist">Wishlist</a><br />
            <a className='text-light text-decoration-none' href="/cart">Cart</a><br />
          </div>

          <div className="footer-links col-lg-2 col-md-3 col-sm-6">
            <h4>Guides</h4>
            <a target="_blank" className='text-light text-decoration-none' href="https://react-bootstrap.netlify.app/">Bootstrap</a><br />
            <a target="_blank" className='text-light text-decoration-none' href="https://redux.js.org/">Redux</a><br />
            <a target="_blank" className='text-light text-decoration-none' href="https://react.dev/">React</a><br />
          </div>

          <div className="footer-contact col-lg-3 col-md-6">
            <h4>Contact Us</h4>
            <form className="subscribe-form d-flex">
              <input
                type="email"
                placeholder="Email Here!!"
                className="form-control"
              />
              <button variant="light" type="submit" className="btn text-light">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>

            <div className="social-icons d-flex mt-3">
              <a target="_blank" className='text-light text-decoration-none ms-3' href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a target="_blank" className='text-light text-decoration-none ms-3' href="https://x.com/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a target="_blank" className='text-light text-decoration-none ms-3' href="https://web.whatsapp.com/">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a target="_blank" className='text-light text-decoration-none ms-3' href="https://www.instagram.com/?hl=en">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a target="_blank" className='text-light text-decoration-none ms-3' href="https://www.messenger.com/">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a target="_blank" className='text-light text-decoration-none ms-3' href="">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer