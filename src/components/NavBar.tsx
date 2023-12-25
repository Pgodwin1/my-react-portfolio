import { useState } from "react";
import styled from "styled-components";
import { FaTimes, FaBars } from "react-icons/fa";

const navLinks = [
  "Home",
  "About",
  "Services",
  "Experience",
  "Skills",
  "Portfolio",
  "Contact",
];

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  // const { showDrawer, showDrawerHandle } = useUserContext();
  // console.log(showDrawer);

  return (
    <Nav>
      <Logo>
        <p>Gidlify</p>
      </Logo>

      {showNav && (
        <MobileNav>
          {navLinks.map((link) => (
            <a href={`#${link}`} onClick={() => setShowNav(false)}>
              {link}
            </a>
          ))}
          {/* <a href="#About">About</a>
          <a href="#Services">Services</a>
          <a href="#Experience">Work Experience</a>
          <a href="#Skills">Skills</a>
          <a href="#Portfolio">Portfolio</a>
          <a href="#Contact">Contact</a> */}
        </MobileNav>
      )}

      <NavButtons>
        {navLinks.map((link) => (
          <a href={`#${link}`}>{link}</a>
        ))}
        {/* <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Services">Services</a>
        <a href="#Experience">Work Experience</a>
        <a href="#Skills">Skills</a>
        <a href="#Portfolio">Portfolio</a>
        <a href="#Contact">Contact</a> */}
      </NavButtons>
      {showNav ? (
        <FaTimes onClick={toggleNav} className="humbarg" />
      ) : (
        <FaBars onClick={toggleNav} className="humbarg" />
      )}
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  background-color: #170550;
  position: fixed;
  z-index: 20;

  @media screen and (max-width: 768px) {
    height: 60px;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    height: 60px;
    width: 100%;
  }

  .humbarg {
    display: none;
    color: white;
    font-size: 30px;
    margin-right: 30px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

const Logo = styled.div`
  padding: 15px 100px;
  font-family: "Freestyle script", sans-serif;
  font-size: 40px;
  color: #fd562a;

  @media screen and (max-width: 768px) {
    padding: 15px 50px;
    font-size: 30px;
  }

  @media screen and (max-width: 600px) {
    padding: 15px 50px;
    font-size: 30px;
  }
`;

const NavButtons = styled.div`
  gap: 30px;
  padding: 30px 50px;
  display: flex;

  a {
    text-decoration: none;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: large;
    color: white;

    &:hover {
      color: #fd562a;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  background-color: white;
  flex-direction: column;
  padding: 30px 50px;
  gap: 30px;
  position: absolute;
  top: 80px;
  left: 0;
  width: 50%;
  display: none;

  a {
    text-decoration: none;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      color: #fd562a;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

// const Hamburger = styled.span`
//   display: none;
//   font-size: 30px;
//   vertical-align: middle;
//   cursor: pointer;
//   @media (max-width: 768px) {
//     display: block;
//   }
// `;
