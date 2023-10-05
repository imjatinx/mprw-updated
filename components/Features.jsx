import React from 'react'
import featurebg from "../assets/img/feature-bg.png";
import featurebgline2 from "../assets/img/feature-bgline2.png";
import productcircle from "../assets/img/product-circle.png";
import productcurve1 from "../assets/img/product-curve1.png";
import productcurve2 from "../assets/img/product-curve2.png";
import Image from 'next/image'

export default function Features() {
	return (
		//<div className='container my-5'>
		<div className="row pb-5" id='features' >
			<div className="row" id='feature-heading-box'>
				<Image src={featurebg} className=" m-0" alt='featurebg' />
				<h1 className='fw-bolder m-0' id='feature-heading'>Features</h1>
				<h3 className='fw-bolder' id='feature-subheading' style={{ color: "rgba(0, 180, 211, 0.67)" }}>Providing excellent support for your research journey</h3>
			</div>
			<div className="row py-5" id='feature-card-row' style={{ margin: "0" }}>
				<Image src={featurebgline2} className=" m-0" id='featurebgline2' alt='featurebgline2' />
				<Image src={productcircle} className=" m-0" id='productcircle1' alt='productcircle' />
				<Image src={productcurve1} id="productcurve1" alt='productcurve1' />
				<Image src={productcurve2} id="productcurve2" alt='productcurve2' />
				<Image src={productcircle} className=" m-0" id='productcircle2' alt='productcircle' />
				<div className="col-lg-3 col-md-6 col-sm-6 col-6">
					<div className="feature-card1 border-0" >
						<div className="card-body">
							<h5 className="card-title  fw-bold mt-3" style={{ color: "#12C1E7" }}>Shadow Support</h5>
							<p className="card-text" style={{ color: "#12C1E7" }}>As you progress through each phase of your Ph.D. degree, let your online adviser lead the way.</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6 col-6">
					<div className="feature-card2 border-0" >
						<div className="card-body">
							<h5 className="card-title  fw-bold mt-3" style={{ color: "#12C1E7" }}>Research ethics and compliances </h5>
							<p className="card-text" style={{ color: "#12C1E7" }}>Our support helps maintain integrity and compliance, promoting ethical research practices. </p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6 col-6">
					<div className="feature-card3 border-0" >
						<div className="card-body">
							<h5 className="card-title fw-bold mt-3" style={{ color: "#12C1E7" }}>Research across all Discipline</h5>
							<p className="card-text" style={{ color: "#12C1E7" }}>Get One Stop Solution for every concern letting your research struggled.</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6 col-6">
					<div className="feature-card4 border-0" >
						<div className="card-body">
							<h5 className="card-title fw-bold mt-3" style={{ color: "#12C1E7" }}>Privacy Integrity</h5>
							<p className="card-text" style={{ color: "#12C1E7" }}>Protect your research and personal information against unauthorised reading, access, or modification.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		//</div>
	)
}
