import styled from "styled-components";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { useEffect, useState } from "react";

const FirstBlock = () => {
  const handleFacebook = () => {
    const facebookProfileUrl = "https://www.facebook.com/arinzechukwu.gideon";
    window.open(facebookProfileUrl, "_blank");
  };

  const handleLinkedIn = () => {
    const linkedInProfileUrl = "https://www.linkedin.com/in/gideon-arinzechukwu-1171aa204/";
    window.open(linkedInProfileUrl, "_blank");
  };

  const handleGitHub = () => {
    const gitHubProfileUrl = "https://github.com/GideonAC";
    window.open(gitHubProfileUrl, "_blank");
  };

  const handleTwitter = () => {
    const twitterProfileUrl = "https://x.com/Arinzechukwugi1?t=DBnFN1gNc0vwhlZkpqOKbA&s=09";
    window.open(twitterProfileUrl, "_blank");
  };

  const handleIG = () => {
    const iGProfileUrl = "https://instagram.com/gideon_arinzechukwu?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr";
    window.open(iGProfileUrl, "_blank");
  };

  const [text, setText] = useState("");
  const fullText = "Hello, I'm";


  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);


  return (
    <Background1 id="Home">
      <MainDiv>
        <TextBox>
          <h1 className="hello"> {text} </h1>
          <h1 className="fName">Gideon</h1>
          <h1 className="lName">Arinzechukwu</h1>
          <h1 className="dev">a Software Developer</h1>
          <Icons>
            <button>
              <a href="#Contact">Contact</a>
            </button>

            <div className="socialIcons">
              <BsLinkedin onClick = {handleLinkedIn}/>
            </div>

            <div className="socialIcons">
            <BsGithub onClick = {handleGitHub} />
            </div>

            <div className="socialIcons">
            <BsFacebook
                onClick={handleFacebook}
              />
            </div>

            <div className="socialIcons">
            <FaSquareInstagram onClick = {handleIG} />
            </div>

            <div className="socialIcons">
            <RiTwitterXFill onClick = {handleTwitter} />
            </div>

          </Icons>
        </TextBox>
        <ImageDiv>
          <Image src="src/images/Banner Image.svg" alt="" />
        </ImageDiv>
      </MainDiv>
    </Background1>
  );
};

export default FirstBlock;

const Background1 = styled.div`
  width: 100%;
  height: 776px;
  background-color: #31065a;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
  }
`;

const MainDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  padding-top: 40px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: auto;
  }

`;

export const TextBox = styled.div`
  padding-top: 50px;
  line-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px){
    line-height: 80px;
  }

  @media screen and (max-width: 600px){
    line-height: 55px;
    font-size: small;
  }

  .hello {
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    color: white;
  }

  .fName {
    font-family: "Dangrek", sans-serif;
    font-size: 90px;
    color: white;
    animation: slideInLeft 1s ease-in 0s 1 normal both;

    transform: translateX(-150);

    @media screen and (max-width: 600px){
      font-size: 55px;
    }
  }

  .lName {
    font-family: "Dangrek", sans-serif;
    font-size: 90px;
    color: #fd562a;

    animation: slideInRight 1s ease-in 0.5s 1 normal both;

    transform: translateX(150);


    @media screen and (max-width: 600px){
      font-size: 53px;
    }
  }

  .dev {
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    animation: bounce;


    @media screen and (max-width: 600px){
      font-size: 20px;
    }
  }

  .socialIcons {
    padding-top: 10px;
    display: flex;
    gap: 20px;
    transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.5);
  }
    

    @media screen and (max-width: 600px){
      font-size: 20px;
      gap: 10px;
    }
  }
`;

export const ImageDiv = styled.div`
  width: 350px;
  height: 460px;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    margin: auto;
  }

`;

const Image = styled.img`
  width: 577px;
  height: 683px;

  @media screen and (max-width: 600px){
      width: 100%;
      height: 100%;
      margin-top: 0%;
    }
`;

export const Icons = styled.div`
  display: flex;
  gap: 20px;
  color: white;
  font-size: x-large;
  padding-top: 20px;
  margin-top: 50px;

  :hover {
    cursor: pointer;
  }

  button {
    padding: 10px 20px;
    background-color: #fd562a;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 20px;
    color: white;
    border-radius: 30px;
    cursor: pointer;
    transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

    @media screen and (max-width: 600px){
      font-size: 15px;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 600px){
      font-size: 15px;
      gap: 8px;
      margin-top: 0px;
    }
`;
