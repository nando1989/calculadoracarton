"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import GridMenu from "../components/GridMenu/GridMenu";
import "./page.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsApp from "@/components/whatsappButton/whatsappButton";

const Home = () => {
  const [bannerImages, setBannerImages] = useState([]);

  useEffect(() => {
    const updateImages = () => {
      if (window.innerWidth <= 768) {

        setBannerImages(["/banner7.png", "/banner8.png", "/banner9.png"]);
      } else {

        setBannerImages(["/banner1.png", "/banner2.png", "/banner3.png"]);
      }
    };

    updateImages();
    window.addEventListener("resize", updateImages);

    return () => {
      window.removeEventListener("resize", updateImages);
    };
  }, []);

  const items1 = [
    { href: "/removivel", image: "/removivel-isopor.png", alt: "Forro removível", title: "Forro Removível" },
  ];
  const items2 = [
    { href: "/drywall", image: "/drywall.png", alt: "teto drywall", title: "Drywall" },
  ];
 


  return (
    <div className="container">
      <div className="containerSlide">
        <Navbar />
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="mySwiper"
          alt="frete de caminhão em Teresópolis"
        >
          {bannerImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="imgBanner"
                src={image}
                alt={`Banner ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="containerForm">
        <div className="containerTitleServices">
          <h3>Escolha o serviço abaixo.</h3>
        </div>
        <div className="griComponent">
          <GridMenu items={items2} />
          <GridMenu items={items1} />
        </div>
      </div>
      <div className="containerFooter">
        <Footer />
        <WhatsApp />
      </div>

    </div>
  );
};

export default Home;
