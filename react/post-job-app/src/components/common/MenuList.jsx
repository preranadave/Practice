import React from 'react';

const MenuList = ({ heading, items = [] }) => {
    const iconItems = items.filter(item => item.type === 'icon');
    const otherItems = items.filter(item => item.type !== 'icon');

    return (
        <div className="footer-menu">
            <h4>{heading}</h4>
            <ul>
                {otherItems.map((item, index) => {
                    if (item.type === 'email') {
                        return (
                            <li key={index}>
                                <a href={`mailto:${item.value}`}>{item.value}</a>
                            </li>
                        );
                    } else {
                        return (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        );
                    }
                })}
            </ul>

            {iconItems.length > 0 && (
                <div className="social-icons">
                    {iconItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            <img src={item.iconSrc} alt={item.label} width="20" height="20" />
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuList;
