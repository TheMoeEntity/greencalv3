"use client";
import React, { CSSProperties, useState } from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Image from "next/image";

export default function Testimonials() {
  const buttonStyles: CSSProperties = {
    background: "#0C4949",
    color: "white",
    padding: "12px 12px",
    border: "none",
    borderRadius: "4px",
    marginTop: "5px",
  };
  const [status, setStatus] = useState("");
  const openVideo = (): void => {
    setStatus("Video currently unavailable.");
    setTimeout(() => {
      setStatus("");
    }, 2500);
  };
  return (
    <MDBContainer classNameName="my-5">
      <MDBCarousel dark>
        <MDBCarouselItem classNameName="active text-center" itemId={0}>
          <div classNameName="w-[150px] mx-auto h-[150px]">
            <Image
              src="/images/avatar.jpeg"
              alt="avatar"
              width={150}
              height={150}
              classNameName="rounded-circle shadow-1-strong mb-4"
              style={{ width: "150px" }}
            />
          </div>

          <MDBRow classNameName="flex flex-col gap-3 mx-auto items-center justify-center">
            <MDBCol lg="9">
              <h5 classNameName="my-3 font-medium text-2xl">Kepha</h5>
              <p classNameName="my-2">
                Medical student (Co-founder, Greencal Foundation)
              </p>
              <p classNameName="text-muted">
                <MDBIcon fas icon="quote-left" classNameName="pe-2" />
                As a medical student witnessing the healthcare struggles faced
                by many in Abakaliki, I knew I had to act. Greencal Foundation
                allows me to combine my medical knowledge with a passion for
                social justice. Working alongside Adum and our dedicated team,{" "}
                {`we're`} actively improving access to quality healthcare in
                underserved communities. Together, {`we're`} building a
                healthier Abakaliki, one step at a time.{" "}
                <MDBIcon fas icon="quote-right" classNameName="pe-2" />
              </p>
              <button
                classNameName="mt-4 block mx-auto"
                onClick={() => openVideo()}
                style={{ ...buttonStyles }}
              >
                <i></i>
                Watch Video
              </button>
              <div classNameName="title-color mt-3 font-weight-bold">
                {status}
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
        {/* 
                <MDBCarouselItem classNameName="text-center">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        classNameName="rounded-circle shadow-1-strong mb-4"
                        style={{ width: "150px" }}
                    />
                    <MDBRow classNameName="d-flex justify-content-center">
                        <MDBCol lg="8">
                            <h5 classNameName="mb-3">CHIJIOKE NWANKWO</h5>
                            <p>Software Engineer, Lagos, Nigeria
                            </p>
                            <p classNameName="text-muted">
                                <MDBIcon fas icon="quote-left" classNameName="pe-2" />
                                Greencal Foundation has been a beacon of hope for children in our community. Their dedication to education and scholarships is changing lives and shaping a brighter future.
                            </p>
                        </MDBCol>
                    </MDBRow>

                </MDBCarouselItem> */}

        {/* <MDBCarouselItem classNameName="text-center">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                        alt="avatar"
                        classNameName="rounded-circle shadow-1-strong mb-4"
                        style={{ width: "150px" }}
                    />
                    <MDBRow classNameName="d-flex justify-content-center">
                        <MDBCol lg="8">
                            <h5 classNameName="mb-3">IBRAHIM ABDULLAHI</h5>
                            <p>Education Advocate, Kano, Nigeria</p>
                            <p classNameName="text-muted">
                                <MDBIcon fas icon="quote-left" classNameName="pe-2" />
                                As an education advocate, I applaud Greencal {`Foundation's`} commitment to empowering young minds. The scholarships offered are instrumental in bridging the gap and creating opportunities for deserving students.
                            </p>
                        </MDBCol>
                    </MDBRow>

                </MDBCarouselItem> */}
      </MDBCarousel>
    </MDBContainer>
  );
}
