import React from 'react';
import Layout from '../components/Layout';
import google from '../images/google.png'
import fb from '../images/fb.png'
import twit from '../images/twit.png'
import linkdin from '../images/linkdin.png'
import insta from '../images/insta.png'
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Image from 'next/image';


const MyComponent = () => {
    return (
        <>
            <Layout>
                {/* <Navbar /> */}
                <div className='container mt-5 mb-5 p-lg-5' >

                    <div className="row justify-content-around ">
                        <div className="col-6 col-sm-6 col-md-3 col-lg-3 animateIcon">
                            <a href="https://www.google.com/search?q=mp+research+work&oq=mp+research+work&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j0i390i650j69i60l3.638j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3973715e1046fad3:0xd6bbf073d2d0d9f3,3" target="_blank" rel="noreferrer">
                                <div style={{ height: '100%', width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image alt='google' src={google} priority placeholder='blur' />
                                </div>
                                <p className="font-weight-bold text-center" style={{ color: '#268fa7', fontStyle: 'italic' }}>Google</p>
                            </a>
                        </div>

                        <div className="col-6 col-sm-6 col-md-3 col-lg-3" >
                            <a href="https://www.facebook.com/wrirk" target="_blank" rel="noreferrer">
                                <div id="two" style={{ height: '100%', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image className='fb' alt='fb' src={fb} priority placeholder='blur' />
                                </div>
                                <p className="font-weight-bold text-center" style={{ color: '#268fa7', fontStyle: 'italic' }}>Facebook</p>
                            </a>
                        </div>
                        <div className="  col-6 col-sm-6 col-md-3 col-lg-3  my-lg-0 my-md-0 my-5 ">
                            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FWrirk1" target="_blank" rel="noreferrer">
                                <div id="two" style={{ height: '100%', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image className='twit' alt='twit' src={twit} priority placeholder='blur' />
                                </div>
                                <p className="font-weight-bold text-center" style={{ color: '#268fa7', fontStyle: 'italic' }}>Twitter</p>
                            </a>
                        </div>
                       

                    </div>

                    <div className="row justify-content-center">
                        <div className="  col-6 col-sm-6 col-md-4 col-lg-4  ">
                            <a href="https://www.linkedin.com/company/wrirk" target="_blank" rel="noreferrer">
                                <div id="two" style={{ height: '100%', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image className='linkdin' alt='linkdin' src={linkdin} priority placeholder='blur' />
                                </div>
                                <p className="font-weight-bold text-center" style={{ color: '#268fa7', fontStyle: 'italic' }}>LinkedIn</p>
                            </a>
                        </div>
                        <div className=" col-6 col-sm-6 col-md-4 col-lg-4 ">
                            <a href="https://www.instagram.com/wrirk_/" target="_blank" rel="noreferrer">
                                <div id="two" style={{ height: '100%', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image className='insta' alt='insta' src={insta} priority placeholder='blur' />
                                </div>
                                <p className="font-weight-bold text-center" style={{ color: '#268fa7', fontStyle: 'italic' }}>Instagram</p>
                            </a>
                        </div>
                    </div>

                </div>


            </Layout>
        </>
    );
};


export default MyComponent;
