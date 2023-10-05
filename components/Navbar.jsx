import React, { useState } from 'react'
import Link from 'next/link';
import mprwlogo from "../assets/img/logo.png";

import Image from 'next/image'

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<div >
			<nav className='newnavbar'>
				<div className="newnavbar-container" >

					<Link className="navbar-brand pe-5 ps-xxl-4  ps-xl-4 ps-lg-4 ps-md-3 ps-sm-2 ps-0 " href="#" onClick={closeMobileMenu}>
						<Image src={mprwlogo} className="mprw-mainlogo m-0" alt="mprwlogo" />
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'newnav-menu active' : 'newnav-menu'}>
						<li className='newnav-item'>
							<Link href='#' className='newnav-links' onClick={closeMobileMenu} style={{ height: "58px" }}>
								HOME
							</Link>
						</li>
						<li className='newnav-item'>
							<Link href='#about' className='newnav-links' onClick={closeMobileMenu}>
								ABOUT US
							</Link>
						</li>
						<li className='newnav-item'>
							<Link href='#products' className='newnav-links' onClick={closeMobileMenu}>
								PRODUCTS
							</Link>
						</li>
						<li className='newnav-item'>
							<Link href='#contact' className='newnav-links' onClick={closeMobileMenu}>
								CONTACT US
							</Link>
						</li>
					</ul>
				</div>
			</nav >
		</div >
	)
}

export default Navbar
