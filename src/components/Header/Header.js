import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '../../images/logo.svg'
// import { totalPrice } from "../../utils";
import { connect } from "react-redux";
// import { removeFromCart } from "../../store/actions/action";


const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    // const [cartActive, setcartState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    // const { carts } = props;

    return (
        <header id="header" className={props.topbarNone}>
            <div className={`wpo-site-header wpo-header-style-1 ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-3 col-3 d-lg-none d-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6 d-lg-block d-none">
                                <div className="social-info">
                                    <ul>
                                        <li><Link to="/"><i className="fi flaticon-facebook-app-symbol"></i></Link></li>
                                        <li><Link to="/"><i className="fi flaticon-twitter"></i></Link></li>
                                        <li><Link to="/"><i className="fi flaticon-linkedin"></i></Link></li>
                                        <li><Link to="/"><i className="fi flaticon-instagram-1"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-6 d-lg-none dl-block">
                                <div className="navbar-header">
                                    <Link className="navbar-brand" to="/"><img src={Logo}
                                            alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link to="/">Home</Link>
                                            <ul className="sub-menu">
                                                {/* <li><Link onClick={ClickHandler} to="/home">Main Home</Link></li> */}
                                                <li><Link onClick={ClickHandler} to="/home2">Wedding Planner</Link></li>
                                                {/* <li><Link onClick={ClickHandler} to="/home3">Announcement Home</Link></li> */}
                                                <li><Link onClick={ClickHandler} to="/home4">Wedding Home</Link></li>
                                                {/* <li><Link onClick={ClickHandler} to="/home5">Asian / Indian Wedding Announcement</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/home6">Asian / Indian Wedding Planner</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/home7">Muslim Wedding</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/home8">Shop Home</Link></li> */}
                                                <li><Link onClick={ClickHandler} to="/home9">Wedding Invitation</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link to="/about">About</Link>
                                            <ul className="sub-menu">
                                                {/* <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link to="/tory">Our Story</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/story">Our Story Style 1</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/story-2">Our Story Style 2</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/story-3">Our Story Style 3</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/story-4">Our Story Style 4</Link></li>
                                                    </ul>
                                                </li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/accomodation">Accomodation</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link to="/svp">RSVP</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/rsvp">RSVP Style 1</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/rsvp-2">RSVP Style 2</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/rsvp-3">RSVP Style 3</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/rsvp-4">RSVP Style 4</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/rsvp-5">RSVP Style 5</Link></li>
                                                    </ul>
                                                </li> */}
                                                <li><Link onClick={ClickHandler} to="/gallery">Gallery</Link></li>
                                                <li><Link onClick={ClickHandler} to="/planner">Planners</Link></li>
                                                {/* <li><Link onClick={ClickHandler} to="/team-single/1">Planner Single</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/groom-bride">Brides & Grooms</Link></li> */}
                                                {/* <li className="menu-item-has-children">
                                                    <Link to="/ervice">Serevice</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/service">Serevice</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/service-s2">Serevice S2</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/service-s3">Serevice S3</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/service-single/1">Serevice Single</Link></li>
                                                    </ul>
                                                </li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/pricing">Pricing</Link></li> */}
                                                {/* <li className="menu-item-has-children">
                                                    <Link to="/">Auth Pages</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/login">Login</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} to="/register">Register</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/forgot">Forgot Password</Link></li>
                                                    </ul>
                                                </li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/coming">Coming Soon</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/404">404 Error</Link></li> */}
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link to="/portfolio-grid">Portfolio</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/portfolio-grid">Portfolio-1</Link></li>
                                                <li><Link onClick={ClickHandler} to="/portfolio-masonary">Portfolio-2</Link></li>
                                                {/* <li><Link onClick={ClickHandler} to="/portfolio-masonary-s2">Portfolio Masonary S2</Link></li>
                                                <li><Link onClick={ClickHandler} to="/portfolio-masonary-s3">Portfolio Masonary S3</Link></li>
                                                <li><Link onClick={ClickHandler} to="/portfolio-masonary-s4">Portfolio Masonary S4</Link></li>
                                                <li><Link onClick={ClickHandler} to="/project-single/1">Portfolio Single</Link></li> */}
                                            </ul>
                                        </li>
                                        {/* <li className='brand-logo'><Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={Logo}
                                            alt="" /></Link></li> */}

                                                <li className="menu-item-has-children">
                                                    <Link to="/service">Serevice</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/service">Venue</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/service-s2">Event planning </Link></li>
                                                        <li><Link onClick={ClickHandler} to="/service-s3">photography</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/service-single/1">Dj's</Link></li>
                                                    </ul>
                                                </li>

                                        
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link to="/blog">Blog</Link>
                                           
                                        </li>


                                        <li className="menu-item-has-children">
                                                    <Link to="/register">Sign-up</Link>
                                                    {/* <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/login">Login</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} to="/register">Register</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/forgot">Forgot Password</Link></li>
                                                    </ul> */}
                                                </li>

                                                <li className="menu-item-has-children">
                                                    <Link to="/login">Sign-in</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi ti-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="mini-cart">
                                        <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                                            {" "}
                                            <i className="fi flaticon-shopping-cart"></i>{" "}
                                            <span className="cart-count">{carts.length}</span>
                                        </button>
                                        <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                                            <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}><i className="ti-close"></i></button>
                                            <div className="mini-cart-items">
                                                {carts &&
                                                    carts.length > 0 &&
                                                    carts.map((catItem, crt) => (
                                                        <div className="mini-cart-item clearfix" key={crt}>
                                                            <div className="mini-cart-item-image">
                                                                <span>
                                                                    <img src={catItem.proImg} alt="icon" />
                                                                </span>
                                                            </div>
                                                            <div className="mini-cart-item-des">
                                                                <p>{catItem.title} </p>
                                                                <span className="mini-cart-item-price">
                                                                    ${catItem.price} x {" "} {catItem.qty}
                                                                </span>
                                                                <span className="mini-cart-item-quantity">
                                                                    <button
                                                                        onClick={() =>
                                                                            props.removeFromCart(catItem.id)
                                                                        }
                                                                        className="btn btn-sm btn-danger"
                                                                    >
                                                                        <i className="ti-close"></i>
                                                                    </button>{" "}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                           
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        // carts: state.cartList.cart,
    };
};
export default connect(mapStateToProps, { })(Header);