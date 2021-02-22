import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./carousel.module.css";
import "./customOwlCarouselStyle.css";
import dataa from "../../../test_folder/blogs.json";

export default function Owl({ head }) {
  const state = {
    options: {
      loop: true,
      responsive: {
        0: {
          items: 1,
        },
        500: {
          items: 2,
          margin: 20,
        },
        800: {
          items: 2,
          margin: 0,
        },
        1000: {
          items: 2,
          margin: 50,
        },
        1100: {
          items: 4,
        },
      },
    },
  };

  return (
    <React.Fragment>
      <div className={styles.sliderDiv}>
        <OwlCarousel
          className={`owl-theme ${styles.slide} `}
          {...state.options}
          autoplay={true}
          responsiveClass={true}
          nav={false}
        >
          {dataa.map((item, i) => (
            <div className={styles.slideCard}>
              <h3 className={styles.cardHead}>{item.title}</h3>
              <div
                className={styles.cardText}
              >
                {item.desc.substring(0, 400)}...
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </React.Fragment>
  );
}
