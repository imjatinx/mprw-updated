import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import mission from "../assets/img/mission.png";
import vision from "../assets/img/vision.png";
import companybgline from "../assets/img/company-bgline.png";

export default function Company() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, [])
    return (
        <div id='company-wrapper' style={{ position: "relative" }}>
            <Image src={companybgline} className=" m-0" alt="support" id='companybgline' />
            <div className="row" style={{ margin: "0% 8%", position: "relative" }} id='company'>
                <div className="col-12 col-lg-4 col-md-12 col-sm-12 pb-4">
                    <div className="card align-items-center justify-content-center border-0  " data-aos="fade-right" data-aos-delay="350" id='company-headingbox' >
                        <div className="card-body">
                            <h1 className="card-title text-center fw-bolder" id='company-heading'>Our Company</h1>
                            <p className="card-text text-center" style={{ color: "#07ABCE" }}>Our company is dedicated to helping researchers and research institutions accelerate the pace of their discoveries and breakthroughs by providing the latest and most innovative tools and solutions.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-8 col-md-12 col-sm-12 rounded-4 company-colbox" style={{ backgroundColor: "#12c0e79c", backdropFilter: "blur(2.5px)" }}>
                    <div className="row p-3">
                        <div className="col-12 col-lg-6 col-md-6 col-sm-6 " id='missionbox' >
                            <div className="card rounded-5" data-aos="zoom-in" style={{ boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                                <div className="card-body p-1 p-lg-3 p-md-3 p-sm-3">
                                    <h5 className="card-title fs-3 fw-semibold ps-2" style={{ color: "#12C1E7" }}>
                                        <Image src={mission} className=" m-0" alt="mission" />
                                        <span className='ms-2'>Mission</span>
                                    </h5>
                                    <p className="card-text px-2 pt-2 pb-4	" style={{ color: "rgba(18, 193, 231, 0.9)" }}>To enable research scholars to focus on genuine ideas of research and development by providing state-of-the-art tools and solutions, expert guidance, and mentorship at every step of their research journey.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 col-sm-6" id="visionbox" >
                            <div className="card rounded-5" data-aos="zoom-in" style={{ boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                                <div className="card-body p-1 p-lg-3 p-md-3 p-sm-3">
                                    <h5 className="card-title fs-3 fw-semibold ps-2" style={{ color: "#12C1E7" }}>
                                        <Image src={vision} className=" m-0" alt="mission" />
                                        <span className='ms-2'>Vision</span>
                                    </h5>
                                    <p className="card-text px-2 pt-2 pb-4	" style={{ color: "rgba(18, 193, 231, 0.9)" }}>Our vision is to revolutionize the research landscape through transformative services.We aim to empower scholars and help them reach their full potential.By offering comprehensive support, we strive to create a significant impact in the world of research.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
