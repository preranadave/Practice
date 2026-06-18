import React from 'react'

import AiCoverIllustration from '../../assets/image/ai-cover-Illustration.svg';

import ResumeIllustration from '../../assets/image/resume-Illustration.svg';
import CTADesign from './CTADesign';


const AIToolsCTA = () => {
    return (
        <>
            <div className="ai-tools-cta">
                <CTADesign
                    textColor="#000"
                    flexDirection="row"
                    heading="Free AI cover letter generator powered by GPT"
                    paragraph="A free AI cover letter generator powered by GPT is a tool that uses artificial intelligence and natural language processing to help job seekers create customized and effective cover letters."
                    buttonText="Try For free Now"
                    imageSrc={AiCoverIllustration}
                    classNameBtn="black"
                />
                <CTADesign
                    textColor="#000"
                    flexDirection="row-reverse"
                    heading="Optimize the keywords in your resume"
                    paragraph="By optimizing keywords in your resume, you can increase your chances of getting noticed by recruiters and landing interviews for the jobs you want."
                    buttonText="Optimize your Resume"
                    imageSrc={ResumeIllustration}
                    classNameBtn="black"
                />
            </div>
        </>
    )
}

export default AIToolsCTA