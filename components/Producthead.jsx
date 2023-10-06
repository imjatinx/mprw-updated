import react from "react";
import Image from "next/image";
import ranveersinghmprw from "../assets/img/ranveersinghmprw.png";

export default function Producthead() {
  return (
    <div
      className="producthead row container-fluid position-relative d-flex "
      style={{padding: "8% 8% 8% 8%"}}
      id="producthead"
    >
      <div className="producthead-img mx-auto col-lg-4 col-md-4 col-sm-12 col-12 order-lg-1 order-md-0 order-sm-0 order-0 h-75">
        <Image
          className="headimg m-auto d-block img-fluid h-75 w-75 "
          src={ranveersinghmprw}
          alt="ranveersinghmprw"
          
        />
      </div>
      <div className="producthead-disc col-lg-8 col-md-8 col-sm-12 col-12 order-lg-1 order-md-0 order-sm-0 order-0 ">
        <p className="name m-0"
          
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "11px",
            paddingLeft: "5px",
            color: "grey",
            paddingTop: "30px"
          }}
        >
          Director
        </p>
        <p className="m-0"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            paddingLeft: "5px",
          }}
        >
          {" "}
          <b>Ranveer Singh</b>
        </p>
        <p className="m-0"
          style={{
            fontFamily: "Mulish, sans-serif",
            fontSize: "12px",
            marginTop: "16px",
            fontWeight: "700",
            color: "black"
          }}
        >
          From the directors desk, achieving success in the realm of research
          and innovation extends beyond the mere act of producing discoveries.
          It encompasses a persistent commitment to attaining the highest
          standards of quality, the willingness to view failure as a valuable
          opportunity for growth, and a steadfast conviction in the
          transformative potential of our collaborative endeavors to effect
          meaningful change on a global scale.
        </p>
        
        <p
          style={{
            fontFamily: "Qwitcher Grypen, sans-serif",
            fontSize: "28px",
          }}
        >
          Ranveer Singh
        </p>
      </div>
    </div>
  );
}
