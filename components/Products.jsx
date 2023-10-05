import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Products() {
	useEffect(() => {
		AOS.init();
	}, [])
	return (
		<div className='container my-5'>
			<div className="row justify-content-center " id='products' style={{ position: "relative" }}>
				<div className="row my-4 justify-content-between">
					<div className="col-12 col-lg-4 col-md-12 col-sm-12">
						<h1 className='fw-bolder text-center mb-4' id='product-heading' >Our Products</h1>
					</div>

					<div className="col-12 col-lg-4 col-md-6 col-sm-12 mt-sm-5 mt-lg-0 mt-5" style={{ padding: "0% 3% 2%" }}>
						<div className="card rounded-5 border-0" data-aos="fade-up" id='product-1' style={{ backgroundColor: "#12C1E7", color: "#FFFFFF", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} >
							<div className="wrirk-pro card-body  px-3 py-4 px-lg-4 px-md-4 px-sm-3 py-lg-5 py-md-5 py-sm-4">
								<h5 className="card-title fs-3 fw-semibold">CYR </h5>
								<p className="card-text mt-3 pb-4"> Generate a request for any research article and then review it on the behalf of request, having both automatic and manual functionality. </p>
							</div>
						</div>
					</div>

					<div className="col-12 col-lg-4 col-md-6 col-sm-12 mt-sm-5 mt-lg-0 mt-5" style={{ padding: "0% 3% 2%" }}>
						<div className="card rounded-5 border-0" data-aos="fade-up" id='product-2' style={{ backgroundColor: "#12C1E7", color: "#FFFFFF", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} >
							<div className="wrirk-pro card-body  px-3 py-4 px-lg-4 px-md-4 px-sm-3 py-lg-5 py-md-5 py-sm-4">
								<h5 className="card-title fs-3 fw-semibold">Paraphrasing </h5>
								<p className="card-text mt-3 pb-5">Provide non copied material or text to convey the same meaning using alternative wording and structure. </p>
							</div>
						</div>
					</div>
				</div>


				<div className="row my-lg-4 my-md-0 my-sm-0 my-0 justify-content-between">


					<div className="col-12 col-lg-4 col-md-6 col-sm-12 mt-sm-5 mt-lg-0 mt-5" style={{ padding: "0% 3% 2%" }}>
						<div className="card rounded-5 border-0" data-aos="fade-up" id='product-3' style={{ backgroundColor: "#12C1E7", color: "#FFFFFF", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} >
							<div className="wrirk-pro card-body  px-3 py-4 py-xxl-5 px-lg-4 px-md-4 px-sm-3 py-lg-5 py-md-5 py-sm-4">
								<h5 className="card-title fs-3 fw-semibold">Psuedo Code </h5>
								<p className="card-text mt-xxl-4 mt-3 pb-5">Automates algorithm creation using computational techniques, optimizing solutions for diverse applications, and fostering innovation.</p>
							</div>
						</div>
					</div>

					<div className="col-12 col-lg-4 col-md-6 col-sm-12 mt-md-5 mt-sm-5 mt-lg-0 mt-5 " style={{ padding: "0% 3% 2%" }}>
						<div className="card rounded-5 border-0" data-aos="fade-up" id='product-4' style={{ backgroundColor: "#12C1E7", color: "#FFFFFF", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} >
							<div className="wrirk-pro card-body px-3 py-4 px-lg-4 px-md-4 px-sm-3 py-lg-5 py-md-5 py-sm-4">
								<h5 className="card-title fs-3 fw-semibold">Data preprocessing </h5>
								<p className="card-text mt-3 pb-4">This feature involves data augmentation, data cleaning, transforming, normalizing, or enhancing raw data to prepare it for analysis or modelling tasks.</p>
							</div>
						</div>
					</div>

					<div className="col-12 col-lg-4 col-md-12 col-sm-12 mt-sm-5 mt-lg-0 mt-5 " style={{ padding: "0% 3% 2%" }}>
						<div className="card-5 rounded-5 border-0" data-aos="fade-up" id='product-5' style={{ backgroundColor: "#12C1E7", color: "#FFFFFF", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} >
							<div className=" wrirk-pro card-body px-3 py-4 px-lg-4 px-md-4 px-sm-3 py-lg-5 py-md-5 py-sm-4">
								<h5 className="card-title fs-3 fw-semibold">WRIRK </h5>
								<p className="card-text mt-3 ">With WRIRK&apos;s services, scholars can receive valuable guidance and assistance at any stage of their research process. Our dedicated team of professional researchers is here to guide, assist, and support scholars in reaching their research goals. </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
