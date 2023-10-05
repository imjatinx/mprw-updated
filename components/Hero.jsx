import React, { useEffect } from 'react'
import AOS from 'aos';
import Image from 'next/image'
import 'aos/dist/aos.css';
import girlimg from "../assets/img/girl-img.png";
import navbgdesk from "../assets/img/navbgdesk.png";

export default function Hero() {
	useEffect(() => {
		AOS.init();
	}, [])

	return (
		<div>
			<Image src={navbgdesk} className=" m-0" id='navbgdesk' alt='navbgdesk' />
			<div className='container' style={{ position: "relative" }}>
				<div className="row" id="home" >
					<div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-0 order-md-1 order-sm-1 order-1" data-aos="fade-up" data-aos-duration="2000">
						<h5 className='d-flex fw-bolder'>
							<hr style={{ border: "2px solid #FF712B", width: "10%" }} />
							<span className='justify-content-center ms-2'>Enlighten your research journey
							</span>
						</h5>
						<h1 className='fw-bolder' style={{ position: "relative" }} >Research Solutions and Support Services for you...</h1>
						<h5 className='mt-3 home-para' >MPRW offers a range of research solutions and services, including editing services, expert, guidance, and mentorship. The main aim of our company is to provide such tools that help research scholars to enhance their research with innovative solutions. </h5>
						<div className='home-button'>
							<button id='contact-btn' type="button" className="btn rounded-5 my-3  align-item-center py-2" style={{ backgroundColor: "#FF712B", color: "#FFFFFF" }}><a className='text-decoration-none text-white' href='#contact'>CONTACT US</a></button>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-0 order-sm-0 order-0" data-aos="fade-down" data-aos-duration="2000">
						<Image src={girlimg} className=" m-0 img-fluid " alt="girl-image" id='girlimg' />
					</div>
				</div>
			</div>
		</div>
	)
}
