import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import ServiceGrid from '../common/ServiceGrid';


import coverLetterIcon from '../../assets/image/letter.svg';
import resumeIcon from '../../assets/image/personalize.svg';
import jobSearchIcon from '../../assets/image/scanner.svg';

const HeroBanner = () => {
    const services = [
        {
            icon: coverLetterIcon,
            title: 'AI Cover Letter Generator',
            description: 'The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.',
        },
        {
            icon: resumeIcon,
            title: 'Resume Builder',
            description: 'Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.',
        },
        {
            icon: jobSearchIcon,
            title: 'Job Search',
            description: 'A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes.',
        }
    ];
    return (
        <>
            <div className="hero-wrapper">
                <div className="hero-cta">
                    <h1 className="hero-heading">
                        <span>Win your dream job</span><br /> with PostJob
                    </h1>
                    <p className="hero-desc">
                        Submit better job app — 10x faster. AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT
                    </p>

                    <div className="hero-form">
                        <form action="" className='hero-cta-form'>
                            <input name='email-frm' className='form-input email' type='text' placeholder='Your Email'></input>

                            <PrimaryButton href="#">Strat for free</PrimaryButton>
                        </form>
                    </div>
                </div>
                <ServiceGrid services={services} />

            </div>

        </>

    )
}

export default HeroBanner