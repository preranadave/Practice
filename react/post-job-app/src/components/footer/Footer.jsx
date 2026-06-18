import React from 'react'
import MenuList from '../common/MenuList';
import BorderButton from '../buttons/BorderButton';
import facebook from '../../assets/image/facebook.svg'
import linkedin from '../../assets/image/linkedin.svg'
import telegram from '../../assets/image/telegram.svg'
import instagram from '../../assets/image/instagram.svg'
const Footer = () => {
    const menuData = [
        {
            heading: 'Platform',
            items: [
                { label: 'Plans and Prices', href: '/blog' },
                { label: 'AI Create Letters', href: '/resume-tips' },
                { label: 'AI Resume Checker', href: '/career-advice' },
            ],
        },
        {
            heading: 'Features',
            items: [
                { label: 'AI Cover Letter Creator', href: '/about' },
                { label: 'Resume Keywords Optimizer', href: '/contact' },
                { label: 'ATS Resume Checker', href: '/careers' },
            ],
        },
        {
            heading: 'Resources',
            items: [
                { label: 'AI Cover Letter Creator', href: '/about' },
                { label: 'Resume Keywords Optimizer', href: '/contact' },
                { label: 'ATS Resume Checker', href: '/careers' },
            ],
        },
        {
            heading: 'Support',
            items: [
                { type: 'email', value: 'support@example.com' },
                { type: 'icon', label: 'Facebook', href: 'https://facebook.com', iconSrc: facebook },
                { type: 'icon', label: 'Telegram', href: 'https://twitter.com', iconSrc: telegram },
                { type: 'icon', label: 'LinkedIn', href: 'https://linkedin.com', iconSrc: linkedin },
                { type: 'icon', label: 'Instagram', href: 'https://linkedin.com', iconSrc: instagram }
            ],
        },

    ];
    return (
        <>
            <footer className='footer'>
                <div className="footer-inner">
                    <div className="footer-top">
                        <div className="footer-heading">
                            <h2>What’s next</h2>
                            <p>Submit better job app — 10x faster. AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT</p>
                            <BorderButton href="#" classNameBtn="black">Try For Free</BorderButton>
                        </div>
                        <div className="footer-menu-wrapper">
                            {menuData.map((menu, idx) => (
                                <MenuList key={idx} heading={menu.heading} items={menu.items} />
                            ))}
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-copyright">© Copywriting | All Rights Reserved | Terms of Use | Privacy</div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer