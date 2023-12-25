import styled from "styled-components";

const SecondBlock = () => {
  return (
    <Background id="About">
      <HeadText>
        <p>
          <b>
            About <span>Me</span>
          </b>
        </p>
      </HeadText>

      <Box>
        <Profile>
          <img src="src/images/profile-pic.jpeg" alt="" />
        </Profile>

        <Text>
          <p>
            I'm a Node.JS Software Developer on a mission to bring innovation to the world of tech. With a Bachelor's degree in Anatomy from Chukwuemeka Odumegwu Ojukwu University, My smooth transition into the ever-evolving world of Tech is due to my keen and unwavering interest in implementing innovative ideas in problem solving. <br />

            I thrive on crafting cutting-edge web applications that not only meet but exceed expectations. From frontend to backend, I've got a solid grip on technologies like JavaScript, React, Node.JS, TypeScript, Docker, GraphQL, MongoDB, and more – showcasing my versatility in the vast MERN stack. My continuous learning ability has been my reason of staying updated in the industry trends. <br />

            As a full stack engineer, my focus is on delivering scalable applications that not only meet the needs of clients but also ensure an exceptional user experience. Throughout my career, I've been dedicated to designing and implementing efficient, maintainable code while collaborating with diverse teams to ensure successful project delivery. Additionally, I embrace the Agile mindset, enabling me to collaborate seamlessly within a team. <br />

            What sets me apart is not just my tech skills – but my work ethics, adaptability, collaborative spirit, problem-solving mindset, and an unwavering commitment to innovation. Challenges fuel my passion, and I'm here to deliver solutions that go beyond the ordinary.

            Let's connect and discuss about how I can bring my skills and enthusiasm to your projects. Looking forward to it!
          </p>
        </Text>
      </Box>
    </Background>
  );
};

export default SecondBlock;

const Background = styled.div`
  width: 100%;
  height: 800px;
  background-color: #170550;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
  }
`;

const HeadText = styled.div`
  padding-top: 60px;
  border-bottom: #fd562a solid;
  width: 250px;
  text-align: center;
  margin: auto;
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 50%;
    margin: auto;
    padding-top: 30px;
  }

  @media screen and (max-width: 600px) {
    width: 50%;
    margin: auto;
    padding-top: 30px;
  }

  p {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: white;
    font-size: 40px;

    span {
      color: #fd562a;
    }

    @media screen and (max-width: 768px) {
      font-size: 26px;
    }
  }
`;

const Box = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 25px;
  }
`;

const Profile = styled.div`
  width: 360px;
  height: 410px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    margin-top: -10px;
    width: 80%;
    height: 70%;
    margin: auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
`;

const Text = styled.div`
  width: 50%;
  height: 410px;

  p {
    color: white;
    line-height: 30px;
    font-size: 23px;
    text-align: justify;
    font-family: "Times New Roman", Times, serif;

    @media screen and (max-width: 768px) {
      font-size: 10px;
      line-height: 15px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: auto;
    height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
    height: auto;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;
