import React from 'react';
import Logo from '../../images/logo.svg';
import './nav.css';

const Nav = () => {
	return (
		<nav>
			<img className='nav-logo' src={Logo} alt='logo' />
			<div className='nav-links'>
				<a className='single-nav-link' href='#/'>
					Pricing
				</a>
				<a className='single-nav-link' href='#/'>
					Product
				</a>
				<a className='single-nav-link' href='#/'>
					About Us
				</a>
				<a className='single-nav-link' href='#/'>
					Careers
				</a>
				<a className='single-nav-link' href='#/'>
					Community
				</a>
			</div>
			<button className='nav-btn' type='button'>
				Get Started
			</button>
		</nav>
	);
};

export default Nav;
