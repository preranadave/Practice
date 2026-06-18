import React from "react";
import uspimg1 from "../../assets/images/about-usp-1.png";

import uspimg2 from "../../assets/images/about-usp-2.png";

import uspimg3 from "../../assets/images/about-usp-3.png";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-sec">
        <div className="about-us-bg">
          <div className="about-us-inner">
            <div className="about-us-content">
              <div className="desc-container">
                <h2 className="section-title">About Us</h2>
                <p className="section-desc">
                  Okie Bee was founded on the lifestyle and values of the bee
                  with the desire to see families adopt these same
                  characteristics. Our goal is to promote healthy lifestyles and
                  encourage parents and grandparents to recognize their role in
                  the family unit and to also value what they contribute to
                  society.
                </p>
                <a href="#" className="read-more">
                  Read More
                </a>
              </div>
              <div className="usp-details">
                <div className="usp-det-item">
                  <div className="image-wrapper">
                    <img src={uspimg1} />
                  </div>
                  <div className="usp-info">
                    <h6 className="usp-title">Free Delivery</h6>
                    <p className="usp-desc">
                      Spend $75 to qualify for free shipping!
                    </p>
                  </div>
                </div>
                <div className="usp-det-item">
                  <div className="image-wrapper">
                    <img src={uspimg2} />
                  </div>
                  <div className="usp-info">
                    <h6 className="usp-title">Professionals</h6>
                    <p className="usp-desc">
                      Professional grade products, trusted by our team and
                      customers.
                    </p>
                  </div>
                </div>
                <div className="usp-det-item">
                  <div className="image-wrapper">
                    <img src={uspimg3} />
                  </div>
                  <div className="usp-info">
                    <h6 className="usp-title">Online Support</h6>
                    <p className="usp-desc">
                      Please reach out if you have any questions about our
                      products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
