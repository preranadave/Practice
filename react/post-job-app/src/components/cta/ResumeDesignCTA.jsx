import React from 'react'
import accountIllustration from '../../assets/image/account-Illustration.svg';
import CTADesign from './CTADesign';

const ResumeDesignCTA = () => {
    return (
        <>
        <div className='resume-design-cta'>
        <CTADesign
                    textColor="#fff"
                    flexDirection="row"
                    heading="Free resume design templates"
                    paragraph="By following these design tips, you can create a professional and effective resume that will help you stand out to recruiters and hiring managers."
                    buttonText="Create an Account"
                    imageSrc={accountIllustration}
                    classNameBtn="green"
                />
        </div>
        </>

    )
}

export default ResumeDesignCTA