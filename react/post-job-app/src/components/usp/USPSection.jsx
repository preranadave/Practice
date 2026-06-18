import React from 'react';
import coverLetterIcon from '../../assets/image/letter.svg';
import resumeIcon from '../../assets/image/personalize.svg';
import jobSearchIcon from '../../assets/image/scanner.svg';
import ServiceGrid from '../common/ServiceGrid';
import BorderButton from '../buttons/BorderButton';


const USPSection = () => {

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
        }, {
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
    <div className="usp-wrapper">
        <div className="usp-heading">
            <h2>Spend less time looking for work</h2>
            <p>We'll help you through the hardest part of your job search.</p>
            <BorderButton href="#">Create an Account</BorderButton>
        </div>

        <ServiceGrid services={services} />
    </div>
   </>
  )
}

export default USPSection