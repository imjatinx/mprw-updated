import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import whyus from "../assets/img/whyus.png";

export default function About() {
	useEffect(() => {
		AOS.init();
	}, [])
	return (

		<div className="row mx-0 justify-content-center" style={{ width: "100%", padding: "80px 0 80px" }} id='about'>
			<Image src={whyus} className=" m-0 p-0 image-fluid" alt="why us" style={{ position: "absolute" }} />
			<div className="row align-item-center justify-content-center" data-aos="zoom-in" data-aos-delay="200" id='whyusbox' style={{ position: "relative" }}>
				<div className="card align-item-center justify-content-center border-0 rounded-4" style={{ padding: "3% 3%", backgroundColor: "rgba(255, 255, 255, 0.63)", backdropFilter: "blur(4px)" }}>
					<div className="card-body p-0 p-lg-3 p-md-3 p-sm-0">
						<h2 className="card-title text-center fw-bolder" id='whyus-heading'>Why us?</h2>
						<p className="card-text my-lg-3 my-md-3 my-sm-3 my-0 fw-semibold text-center">At MPRW, we offer a wide range of research solutions designed to make research more efficient and effective with advanced data analysis tools, research management systems and publication software. We understand that research is a complex and often challenging process, which is why we are dedicated to providing the tools and solutions that researchers need to succeed..</p>
					</div>
				</div>
			</div>
		</div>

	)
}
