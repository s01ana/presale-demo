import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderWrapper from "./Header.style";
import ConnectWalletButton from "../../connectWalletButton/ConnectWalletButton";
import MobileMenu from "../mobileMenu/MobileMenu";
import HeaderSocialLinks from "../../../assets/data/headerSocialLinks";
import Logo from "../../../assets/images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = ({ variant }) => {
  const [logoImg, setLogoImg] = useState(Logo);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  useEffect(() => {
    setLogoImg(Logo);
  }, [variant]);

  return (
    <>
      <HeaderWrapper className="header-section">
        <div className="container">
          <div className="presale-header-content">
            <div className="presale-header-left">
              <NavLink className="presale-header-logo" to="/" end>
                <img src={logoImg} alt="Logo" />
              </NavLink>
            </div>
            <div className="presale-header-right">
              <div className="presale-header-menu-toggle">
                <button className="menu-toggler" onClick={handleMobileMenu}>
                  <HiMenuAlt3 />
                </button>
              </div>
              <div className="presale-header-right-menu">
                {(
                  <ul className="social-links">
                    {HeaderSocialLinks?.map((socialLinkItem, i) => (
                      <li key={i}>
                        <a
                          href={socialLinkItem.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={socialLinkItem.icon}
                            alt={socialLinkItem.title}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                <ConnectWalletButton variant="v6" />
              </div>
            </div>
          </div>
        </div>
      </HeaderWrapper>

      {isMobileMenu && <MobileMenu mobileMenuHandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
