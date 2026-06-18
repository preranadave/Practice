import React from 'react';
import '../../assets/css/CTADesign.css'
import BorderButton from '../buttons/BorderButton';

const CTADesign = ({
    textColor = 'black',
    flexDirection = 'row',
    heading = 'Your Heading Here',
    paragraph = 'Your paragraph text goes here.',
    buttonText = 'Click Me',
    imageSrc = 'https://via.placeholder.com/300',
    classNameBtn = "black"
}) => {
    return (
        <div
            className="cta-container"
            style={{ flexDirection: flexDirection }} // Only dynamic prop retained here
        >
            <div className="cta-text" style={{ color: textColor }}>
                <h2>{heading}</h2>
                <p>{paragraph}</p>
                <BorderButton href="#" classNameBtn={classNameBtn}>{buttonText}</BorderButton>
            </div>

            <div className="cta-image">
                <img src={imageSrc} alt="CTA visual" />
            </div>
        </div>
    );
};

export default CTADesign;
