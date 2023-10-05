import React, { useState } from 'react';
import google from '../images/google.png'
import fb from '../images/fb.png'
import twit from '../images/twit.png'
import linkdin from '../images/linkdin.png'
import insta from '../images/insta.png'
import Image from 'next/image';
import Link from 'next/link';
import mprwlogo from "../assets/img/logo.png";


const MyComponent = () => {

	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	return (
		<>

			<nav className='newnavbar' style={{ backgroundColor: "#12C1E7" }}>
				<div className="newnavbar-container" >

					<Link className="navbar-brand pe-5 ps-xxl-4  ps-xl-4 ps-lg-4 ps-md-3 ps-sm-2 ps-0 " href="#" onClick={closeMobileMenu}>
						<Image src={mprwlogo} className="mprw-mainlogo m-0" alt="mprwlogo" />
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'newnav-menu active' : 'newnav-menu'}>
						<li className='newnav-item'>
							<Link href='/' className='newnav-links' onClick={closeMobileMenu} style={{ height: "58px" }}>
								HOME
							</Link>
						</li>
						<li className='newnav-item'>
							<Link href='/' className='newnav-links' onClick={closeMobileMenu}>
								ABOUT US
							</Link>
						</li>
						<li className='newnav-item'>
							<Link href='/' className='newnav-links' onClick={closeMobileMenu}>
								PRODUCTS
							</Link>
						</li>
						<li className='newnav-item'>
							<Link href='/' className='newnav-links' onClick={closeMobileMenu}>
								CONTACT US
							</Link>
						</li>
					</ul>
				</div>
			</nav >

			<div className='container mb-5 p-lg-3 p-3 mt-md-2 mt-sm-2 mt-lg-0 mt-2' >

				<div className="row justify-content-around ">
					<div className="col-12 col-sm-12 col-md-6 col-lg-3 py-3 py-lg-0 py-md-0 pt-sm-3 pb-sm-5 pb-5 animateIcon">
						<a href="https://www.google.com/search?q=mp+research+work&oq=mp+research+work&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j0i390i650j69i60l3.638j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3973715e1046fad3:0xd6bbf073d2d0d9f3,3" target="_blank" rel="noreferrer" className='text-decoration-none'>
							<div style={{ height: '100%', width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Image alt='google' src={google} priority placeholder='blur' />
							</div>
							<p className="font-weight-bold text-center" style={{ color: '#268fa7', textDecoration: 'none' }}>Google</p>
						</a>
					</div>

					<div className="col-12 col-sm-12 col-md-6 col-lg-3" >
						<a href="https://www.facebook.com/mpresearchwork" target="_blank" rel="noreferrer" className='text-decoration-none'>
							<div id="two" style={{ height: '100%', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Image className='fb' alt='fb' src={fb} priority placeholder='blur' />
							</div>
							<p className="font-weight-bold text-center" style={{ color: '#268fa7', textDecoration: 'none' }}>Facebook</p>
						</a>
					</div>
					<div className="  col-12 col-sm-12 col-md-6 col-lg-3 my-lg-0 my-md-0 my-5 ">
						<a href="https://twitter.com/mpresearchwork" target="_blank" rel="noreferrer" className='text-decoration-none'>
							<div id="two" style={{ height: '100%', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Image className='twit' alt='twit' src={twit} priority placeholder='blur' />
							</div>
							<p className="font-weight-bold text-center" style={{ color: '#268fa7', textDecoration: 'none' }}>Twitter</p>
						</a>
					</div>


				</div>

				<div className="row justify-content-center mt-lg-5 mt-md-5 mt-sm-3 mt-3">
					<div className="  col-12 col-sm-12 col-md-4 col-lg-4 pt-0 pb-5 py-lg-0 py-md-0 pt-sm-0 pb-sm-5 ">
						<a href="https://www.linkedin.com/company/mp-research-work/" target="_blank" rel="noreferrer" className='text-decoration-none'>
							<div id="two" style={{ height: '100%', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Image className='linkdin' alt='linkdin' src={linkdin} priority placeholder='blur' />
							</div>
							<p className="font-weight-bold text-center" style={{ color: '#268fa7', textDecoration: 'none' }}>LinkedIn</p>
						</a>
					</div>
					<div className=" col-12 col-sm-12 col-md-4 col-lg-4 ">
						<a href="https://www.instagram.com/mpresearchwork/" target="_blank" rel="noreferrer" className='text-decoration-none'>
							<div id="two" style={{ height: '100%', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Image className='insta' alt='insta' src={insta} priority placeholder='blur' />
							</div>
							<p className="font-weight-bold text-center" style={{ color: '#268fa7' }}>Instagram</p>
						</a>
					</div>
				</div>

			</div>



		</>
	);
};


export default MyComponent;
