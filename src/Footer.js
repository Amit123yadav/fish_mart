import React from 'react'

const Footer = () => {
    return (
        <section className='background-color'>
            <div className='header-img'>
                <img src='./images/logo1.jpeg' alt='' />
            </div>
            <div className='body-item'>
                <div className='item-1'>
                    <h3>Support</h3>
                    <h3>About Us</h3>
                    <h3>Privacy Policy </h3>
                </div>
                <div className='item-1'>
                    <h3>Terms & Conditions</h3>
                    <h3>Return & Refund Policy </h3>
                    <h3>Shipping & Delivery Policy</h3>
                </div>
            </div>
            <div className='footer-center'>
                <h5 className='footer-ma'>Sea Basket$ All Rights Reserved $ 2021 Copyright</h5>
            </div>

        </section>
    )
}

export default Footer