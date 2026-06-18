import React from "react";

const GuaranteeSection = () => {
  return (
    <>
      <div className="guarantee-section">
        <div className="guarantee-section__content">
          <div className="guarantee-section__content__left">
            <div className="guarantee-section__content__left__title">
              <h2>30 Day Money Back Guarantee</h2>
            </div>
            <div className="guarantee-section__content__left__text">
              <p>
                Try Our Products Risk-free and If You Don't Love Them, Return
                Within 30 Days For A Full Refund!
              </p>
            </div>
          </div>
          <div className="certification-images">
            <img
              src="src/assets/images/guarantee-certi.png"
              alt="Certification 1"
            />
            <img
              src="src/assets/images/guarantee-certi-1.png"
              alt="Certification 1"
            />{" "}
            <img
              src="src/assets/images/guarantee-certi-2.png"
              alt="Certification 1"
            />{" "}
            <img
              src="src/assets/images/guarantee-certi-3.png"
              alt="Certification 1"
            />
          </div>
          <div className="guarantee-img">
            <img
              src="src/assets/images/guarantee-img.png"
              alt="Certification 1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GuaranteeSection;
