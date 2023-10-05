import React from 'react'
import Link from 'next/link';

export default function Backbtn() {
	return (
		<div>
			<button className='back-to-top d-flex border-0 align-items-center justify-content-center' id='backbtn' style={{
				position: "fixed", right: "15px", bottom: "15px", zIndex: "999999", backgroundColor: "#00224a", width: "42px", height: "42px", borderRadius: "4px", transition: "all 0.4s"
			}}>
				<Link href="#" className="d-flex align-items-center justify-content-center text-decoration-none" >
					<i className="bi bi-arrow-up-short " style={{ fontSize: "29px", color: "white" }}></i>
				</Link>
			</button>
		</div>
	)
}
