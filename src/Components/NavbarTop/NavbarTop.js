import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./NavbarTop.css";

export const NavbarTop = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="navbar-top-header">
			<h3><AccountCircleIcon/></h3>
			<nav className="navbar-top" ref={navRef}>
				<Link to="/">Home</Link>
				<Link to="/my-work">My Work</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/about-me">About Me</Link>
				<Link to="/art-gallery">Art Gallery</Link>
				|
				<a target='_blank'
            	   rel='noopener noreferrer' 
				   href="https://main.d2wjzzgdwb3l7w.amplifyapp.com/">
					My Shop
				</a>
				|
				<a target='_blank'
            	   rel='noopener noreferrer' 
				   href="https://main.d2bk2zp4dcjv9g.amplifyapp.com/">
					Ski Bookings
				</a>
				|
				<a target='_blank'
            	   rel='noopener noreferrer' 
				   href="https://main.d1byw4xc5jg2zw.amplifyapp.com/">
					Backstreet barbers
				</a>
				|
				<a target='_blank'
            	   rel='noopener noreferrer' 
				   href="https://main.d2kbu11rec6yhm.amplifyapp.com/login">
					SYC Review app
				</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}