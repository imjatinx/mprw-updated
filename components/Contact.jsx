import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
	useEffect(() => {
		AOS.init();
	}, [])
	return (

		<div className="row" style={{ margin: "0% 8%" }} id='contact'>
			<div className="col-lg-8 col-md-8 col-sm-12 col-12 order-1 order-lg-0 order-md-0 order-sm-1">
				<div className='rounded-5 mx-0 mx-xxl-5 mx-xl-5 mx-lg-5 mx-md-5 mx-sm-5 form-box' data-aos="zoom-in" data-aos-delay="350" style={{ boxShadow: "3px 4px 7px 1px rgba(0, 0, 0, 0.25)" }}>
					<form >
						<div className="row">
							<div className="col-6">
								<div className="mb-3 mb-lg-4 mb-md-4 mb-sm-4m">
									<input type="text" className="form-control rounded-3" id="name" name='name' placeholder='Name' />
								</div>
							</div>
							<div className="col-6">
								<div className="mb-3 mb-lg-4 mb-md-4 mb-sm-4">
									<input type="tel" className="form-control rounded-3" id="email" name='tel' placeholder='Tel' />
								</div>
							</div>
						</div>
						<div className="mb-3 mb-lg-4 mb-md-4 mb-sm-4">
							<input type="email" className="form-control rounded-3" id="email" aria-describedby="emailHelp" placeholder='Email' />
						</div>
						<div className="mb-3 mb-lg-4 mb-md-4 mb-sm-4">
							<input type="text" className="form-control rounded-3" id="subject" name='subject' placeholder='Subject' />
						</div>
						<div className="mb-3 mb-lg-4 mb-md-4 mb-sm-4 ">
							<textarea className="form-control rounded-4" placeholder="Message" id="message"></textarea>
						</div>
						<div className="d-flex justify-content-center">
							<button type="submit" className="btn text-center rounded-5 " style={{ backgroundColor: "#12C1E7", color: "white", width: "30%" }}>Done</button>

						</div>
					</form>
				</div>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-12 col-12 order-0 order-lg-1 order-md-1 prder-sm-0">
				<h1 id='contact-heading' data-aos="fade-right" data-aos-delay="350">
					<div className='pt-5'>Let&apos;s</div>
					<div className='fw-semibold'>Research</div>
					<div className='fw-bold' style={{ color: "#12C1E7" }}>Together!!!</div>
				</h1>
			</div>
		</div>

	)
}
