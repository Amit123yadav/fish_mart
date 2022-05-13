import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg  mb-10">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src='./images/logo1.jpeg' alt='logo' className='nav-image' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Catagory</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">My Cart</a>
                            </li> <li className="nav-item ">
                                <a className="nav-link nav-button" href="#">Login</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header