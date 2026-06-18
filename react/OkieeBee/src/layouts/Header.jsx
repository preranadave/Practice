import { useState } from "react";
import Container from "./Container";
import logo from "../assets/logos/Logo-OkieeBee.png";
import truckIcon from "../assets/icons/truck-icon.svg";
// import "../styles/header.css";
import { navigation } from "../data/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <header className="site-header">
      {/* Header Inner */}
      <div className="header-announcement">
        <Container className="container--fluid">
          <img src={truckIcon} alt="delivery" />
          <p>
            <strong>Free Delivery:</strong> Spend $75 to qualify for free
            shipping!
          </p>
        </Container>
      </div>
      <Container className="container">
        <div className="header-inner">
          {/* Navigation */}
          <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
            {isMenuOpen && (
              <ul className="mobile-nav-actions">
                <li>
                  <a href="#" className="header-icon whishlist">
                    <svg
                      width={24}
                      height={21}
                      viewBox="0 0 24 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6658 19.1897C-9.27403 7.8014 5.38417 -4.56141 11.6658 3.25607C17.9484 -4.56141 32.6065 7.8014 11.6658 19.1897Z"
                        stroke="#55AA12"
                        strokeWidth="1.6"
                      />
                    </svg>
                    <span>Wishlist</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="header-icon search">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.9375 1.62382C7.97721 1.62382 7.02632 1.81297 6.13913 2.18045C5.25193 2.54794 4.44581 3.08658 3.76678 3.7656C3.08775 4.44463 2.54912 5.25076 2.18163 6.13795C1.81414 7.02514 1.625 7.97603 1.625 8.93632C1.625 9.89661 1.81414 10.8475 2.18163 11.7347C2.54912 12.6219 3.08775 13.428 3.76678 14.107C4.44581 14.7861 5.25193 15.3247 6.13913 15.6922C7.02632 16.0597 7.97721 16.2488 8.9375 16.2488C10.8769 16.2488 12.7369 15.4784 14.1082 14.107C15.4796 12.7357 16.25 10.8757 16.25 8.93632C16.25 6.99693 15.4796 5.13696 14.1082 3.7656C12.7369 2.39424 10.8769 1.62382 8.9375 1.62382ZM5.40392e-08 8.93632C0.000189552 7.50101 0.34606 6.08685 1.00836 4.81348C1.67065 3.5401 2.62989 2.44497 3.80492 1.6207C4.97996 0.796439 6.33623 0.267299 7.75901 0.0780397C9.18179 -0.111219 10.6292 0.0449713 11.9789 0.533399C13.3285 1.02183 14.5407 1.82812 15.5128 2.88409C16.485 3.94005 17.1885 5.21461 17.5639 6.59996C17.9393 7.98531 17.9755 9.4407 17.6695 10.843C17.3635 12.2453 16.7242 13.5533 15.8058 14.6563L20.8867 19.7372C20.9665 19.8115 21.0305 19.9012 21.0749 20.0009C21.1193 20.1006 21.1432 20.2082 21.1451 20.3173C21.1471 20.4264 21.127 20.5347 21.0861 20.6359C21.0453 20.7371 20.9844 20.829 20.9073 20.9061C20.8301 20.9833 20.7382 21.0441 20.6371 21.085C20.5359 21.1258 20.4275 21.1459 20.3184 21.144C20.2093 21.142 20.1017 21.1182 20.0021 21.0738C19.9024 21.0293 19.8127 20.9653 19.7383 20.8855L14.6575 15.8047C13.3523 16.8918 11.7644 17.5844 10.0797 17.8015C8.39499 18.0186 6.68332 17.7511 5.14519 17.0303C3.60707 16.3096 2.30618 15.1655 1.39493 13.7319C0.483686 12.2984 -0.000186701 10.6349 5.40392e-08 8.93632Z"
                        fill="#55AA12"
                      />
                    </svg>
                    <span>Search</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="header-icon user">
                    <svg
                      width="18"
                      height="24"
                      viewBox="0 0 18 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.6 18.7V23.5H16.1V18.7C16.1 17.8 15.8 17 15.2 16.4C14.6 15.8 13.8 15.5 12.9 15.5H4.8C3.9 15.5 3.1 15.8 2.5 16.4C1.9 17 1.6 17.8 1.6 18.7V23.5H0V18.7C0 17.4 0.5 16.3 1.4 15.4C2.3 14.5 3.5 14 4.7 14H12.8C14.1 14 15.2 14.5 16.1 15.4C17 16.3 17.6 17.4 17.6 18.7Z"
                        fill="#55AA12"
                      />
                      <path
                        d="M13.6 2.5C13 1.5 12.1 0.8 11 0.4C10.3 0.1 9.49999 0 8.79999 0C8.39999 0 7.99999 2.23517e-08 7.69999 0.1C6.59999 0.3 5.59999 0.9 4.69999 1.7C3.89999 2.5 3.39999 3.5 3.09999 4.7C2.89999 5.7 2.99999 6.9 3.49999 7.9C3.89999 8.9 4.69999 9.9 5.59999 10.5C6.49999 11.1 7.59999 11.5 8.79999 11.5C10.3 11.5 11.8 10.9 12.9 9.8C14 8.7 14.6 7.3 14.6 5.7C14.6 4.6 14.2 3.5 13.6 2.5ZM12.3 8.1C11.8 8.8 11.2 9.3 10.4 9.7C9.89999 9.9 9.29999 10 8.79999 10C8.49999 10 8.29999 10 7.99999 9.9C7.09999 9.7 6.39999 9.3 5.79999 8.7C5.19999 8.1 4.79999 7.4 4.59999 6.5C4.49999 5.7 4.59999 4.9 4.89999 4.1C5.19999 3.3 5.79999 2.7 6.49999 2.2C7.09999 1.7 7.99999 1.5 8.79999 1.5C9.89999 1.5 11 1.9 11.8 2.7C12.6 3.5 13 4.6 13 5.7C13 6.5 12.8 7.4 12.3 8.1Z"
                        fill="#55AA12"
                      />
                    </svg>

                    <span>My Account</span>
                  </a>
                </li>
              </ul>
            )}
            {navigation.map((link) => {
              const hasSubmenu = link.submenu?.length > 0;
              const isOpen = openSubmenu === link.label;
              return (
                <div
                  key={link.label}
                  className={`nav-item ${hasSubmenu ? "has-submenu" : ""} ${
                    isOpen ? "submenu-open" : ""
                  }`}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (hasSubmenu) {
                        e.preventDefault();
                        setOpenSubmenu(isOpen ? null : link.label);
                      }
                    }}
                  >
                    {link.label}

                    {/* Chevron */}
                    {hasSubmenu && (
                      <span className="chevron">
                        <svg
                          width={8}
                          height={6}
                          viewBox="0 0 8 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.5"
                            d="M7 1L4 4L1 1"
                            stroke="#47454B"
                            strokeWidth={2}
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    )}
                  </a>

                  {/* Submenu */}
                  {hasSubmenu && (
                    <ul className="submenu">
                      {link.submenu.map((sub) => (
                        <li key={sub.href}>
                          <a href={sub.href}>{sub.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
            {/* Mobile Menu Toggle */}
            {isMenuOpen && (
              <button
                className="menu-close"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
              >
                ✕
              </button>
            )}
          </nav>

          {/* Logo */}
          <div className="header-logo">
            <a href="/" className="header-logo-link">
              <img src={logo} alt="OkieeBee" />
            </a>
          </div>

          {/* Right Actions */}
          <div className="header-actions">
            <ul className="header-action-list">
              <li>
                <a href="#" className="header-icon whishlist">
                  <svg
                    width={24}
                    height={21}
                    viewBox="0 0 24 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6658 19.1897C-9.27403 7.8014 5.38417 -4.56141 11.6658 3.25607C17.9484 -4.56141 32.6065 7.8014 11.6658 19.1897Z"
                      stroke="#55AA12"
                      strokeWidth="1.6"
                    />
                  </svg>
                  <span>Wishlist</span>
                </a>
              </li>
              <li>
                <a href="#" className="header-icon search">
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.9375 1.62382C7.97721 1.62382 7.02632 1.81297 6.13913 2.18045C5.25193 2.54794 4.44581 3.08658 3.76678 3.7656C3.08775 4.44463 2.54912 5.25076 2.18163 6.13795C1.81414 7.02514 1.625 7.97603 1.625 8.93632C1.625 9.89661 1.81414 10.8475 2.18163 11.7347C2.54912 12.6219 3.08775 13.428 3.76678 14.107C4.44581 14.7861 5.25193 15.3247 6.13913 15.6922C7.02632 16.0597 7.97721 16.2488 8.9375 16.2488C10.8769 16.2488 12.7369 15.4784 14.1082 14.107C15.4796 12.7357 16.25 10.8757 16.25 8.93632C16.25 6.99693 15.4796 5.13696 14.1082 3.7656C12.7369 2.39424 10.8769 1.62382 8.9375 1.62382ZM5.40392e-08 8.93632C0.000189552 7.50101 0.34606 6.08685 1.00836 4.81348C1.67065 3.5401 2.62989 2.44497 3.80492 1.6207C4.97996 0.796439 6.33623 0.267299 7.75901 0.0780397C9.18179 -0.111219 10.6292 0.0449713 11.9789 0.533399C13.3285 1.02183 14.5407 1.82812 15.5128 2.88409C16.485 3.94005 17.1885 5.21461 17.5639 6.59996C17.9393 7.98531 17.9755 9.4407 17.6695 10.843C17.3635 12.2453 16.7242 13.5533 15.8058 14.6563L20.8867 19.7372C20.9665 19.8115 21.0305 19.9012 21.0749 20.0009C21.1193 20.1006 21.1432 20.2082 21.1451 20.3173C21.1471 20.4264 21.127 20.5347 21.0861 20.6359C21.0453 20.7371 20.9844 20.829 20.9073 20.9061C20.8301 20.9833 20.7382 21.0441 20.6371 21.085C20.5359 21.1258 20.4275 21.1459 20.3184 21.144C20.2093 21.142 20.1017 21.1182 20.0021 21.0738C19.9024 21.0293 19.8127 20.9653 19.7383 20.8855L14.6575 15.8047C13.3523 16.8918 11.7644 17.5844 10.0797 17.8015C8.39499 18.0186 6.68332 17.7511 5.14519 17.0303C3.60707 16.3096 2.30618 15.1655 1.39493 13.7319C0.483686 12.2984 -0.000186701 10.6349 5.40392e-08 8.93632Z"
                      fill="#55AA12"
                    />
                  </svg>
                  <span>Search</span>
                </a>
              </li>
              <li>
                <a href="#" className="header-icon user">
                  <svg
                    width="18"
                    height="24"
                    viewBox="0 0 18 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6 18.7V23.5H16.1V18.7C16.1 17.8 15.8 17 15.2 16.4C14.6 15.8 13.8 15.5 12.9 15.5H4.8C3.9 15.5 3.1 15.8 2.5 16.4C1.9 17 1.6 17.8 1.6 18.7V23.5H0V18.7C0 17.4 0.5 16.3 1.4 15.4C2.3 14.5 3.5 14 4.7 14H12.8C14.1 14 15.2 14.5 16.1 15.4C17 16.3 17.6 17.4 17.6 18.7Z"
                      fill="#55AA12"
                    />
                    <path
                      d="M13.6 2.5C13 1.5 12.1 0.8 11 0.4C10.3 0.1 9.49999 0 8.79999 0C8.39999 0 7.99999 2.23517e-08 7.69999 0.1C6.59999 0.3 5.59999 0.9 4.69999 1.7C3.89999 2.5 3.39999 3.5 3.09999 4.7C2.89999 5.7 2.99999 6.9 3.49999 7.9C3.89999 8.9 4.69999 9.9 5.59999 10.5C6.49999 11.1 7.59999 11.5 8.79999 11.5C10.3 11.5 11.8 10.9 12.9 9.8C14 8.7 14.6 7.3 14.6 5.7C14.6 4.6 14.2 3.5 13.6 2.5ZM12.3 8.1C11.8 8.8 11.2 9.3 10.4 9.7C9.89999 9.9 9.29999 10 8.79999 10C8.49999 10 8.29999 10 7.99999 9.9C7.09999 9.7 6.39999 9.3 5.79999 8.7C5.19999 8.1 4.79999 7.4 4.59999 6.5C4.49999 5.7 4.59999 4.9 4.89999 4.1C5.19999 3.3 5.79999 2.7 6.49999 2.2C7.09999 1.7 7.99999 1.5 8.79999 1.5C9.89999 1.5 11 1.9 11.8 2.7C12.6 3.5 13 4.6 13 5.7C13 6.5 12.8 7.4 12.3 8.1Z"
                      fill="#55AA12"
                    />
                  </svg>

                  <span>My Account</span>
                </a>
              </li>
              <li>
                <a href="#" className="header-icon cart">
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_2084_661"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={28}
                      height={28}
                    >
                      <rect width={28} height={28} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_2084_661)">
                      <path
                        d="M3.97256 13.3737C4.30334 10.8928 4.46874 9.65236 5.3172 8.90951C6.16567 8.16666 7.41709 8.16666 9.91993 8.16666H18.0804C20.5832 8.16666 21.8347 8.16666 22.6831 8.90951C23.5316 9.65236 23.697 10.8928 24.0278 13.3737L24.7611 18.8737C25.1829 22.0372 25.3938 23.619 24.4974 24.6428C23.6011 25.6667 22.0053 25.6667 18.8137 25.6667H9.1866C5.99505 25.6667 4.39927 25.6667 3.50289 24.6428C2.60652 23.619 2.81742 22.0372 3.23923 18.8737L3.97256 13.3737Z"
                        stroke="#FFD302"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M9.3335 7L9.58316 5.87653C10.0432 3.80629 11.8794 2.33333 14.0002 2.33333C16.1209 2.33333 17.9571 3.80629 18.4172 5.87653L18.6668 7"
                        stroke="#FFD302"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.6665 12.8333L18.4168 13.9568C17.9568 16.027 16.1206 17.5 13.9998 17.5C11.8791 17.5 10.0429 16.027 9.58283 13.9568L9.33317 12.8333"
                        stroke="#FFD302"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </a>
              </li>
              {/* Mobile Toggle */}
            </ul>
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
