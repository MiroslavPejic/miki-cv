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
				   href="https://miki-p-shop.myshopify.com/">
					My Shop
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