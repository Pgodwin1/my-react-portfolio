import styled from "styled-components";

const Icons = [
  {
    id: 1,
    imageUrl: <img src="src/images/html.png" alt="html" />,
    name: "HTML & CSS",
  },
  // {
  //   id: 2,
  //   imageUrl: <img src="src/images/css.png" alt="css" />,
  //   name: "CSS",
  // },
  {
    id: 3,
    imageUrl: <img src="src/images/icon-javscript.svg" alt="javascript" />,
    name: "JavaScript",
  },
  {
    id: 4,
    imageUrl: <img src="src/images/icon-typescript.svg" alt="typescript" />,
    name: "TypeScript",
  },
  {
    id: 5,
    imageUrl: <img src="src/images/icon-react.svg" alt="react" />,
    name: "React",
  },
  {
    id: 6,
    imageUrl: <img src="src/images/icon-nodejs.svg" alt="node" />,
    name: "Node.Js",
  },
  {
    id: 7,
    imageUrl: <img src="src/images/icon-express.svg" alt="express" />,
    name: "Express",
  },
  {
    id: 8,
    imageUrl: <img src="src/images/icon-nextjs.svg" alt="nextjs" />,
    name: "Next.Js",
  },
  {
    id: 9,
    imageUrl: <img src="src/images/icon-tailwindcss.svg" alt="tailwindcss" />,
    name: "Tailwindcss",
  },
  {
    id: 10,
    imageUrl: <img src="src/images/icon-postgresql.svg" alt="postgresql" />,
    name: "PosggreSQL",
  },
  {
    id: 11,
    imageUrl: <img src="src/images/mongoDB.svg" alt="mongoDB" />,
    name: "MongoDB",
  },
  {
    id: 12,
    imageUrl: <img src="src/images/mysql.jpeg" alt="mysql" />,
    name: "MySQL",
  },
  {
    id: 13,
    imageUrl: <img src="src/images/GraphQL_Logo.svg.png" alt="graphql" />,
    name: "GraphQL",
  },
  {
    id: 14,
    imageUrl: <img src="src/images/icon-git.svg" alt="git" />,
    name: "Git",
  },
  {
    id: 15,
    imageUrl: <img src="src/images/docker.png" alt="docker" />,
    name: "Docker",
  }
];

const FifthBlock = () => {
  return (
    <Background id="Skills">
      <HeadText>
        <p>
          <b>
            My <span>Skills</span>
          </b>
        </p>
      </HeadText>

      <MotherDiv>
        <DivOne>
          {Icons.map((icon) => (
            <Container key={icon.id}>
              <Icon>{icon.imageUrl}</Icon>
              <p>{icon.name}</p>
            </Container>
          ))}
        </DivOne>

      </MotherDiv>
    </Background>
  );
};

export default FifthBlock;

const Background = styled.div`
  width: 100%;
  height: 840px;
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


const MotherDiv = styled.div`
  background-color: white;
  width: 80%;
  height: 450px;
  padding: 10px;
  margin-top: 70px;
  margin-left: 150px;
  border-radius: 10px;
  justify-content: center;
  align-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 85%;
    margin: auto;
    height: 100%;
    margin-top: 30px;
    
  }

  @media screen and (max-width: 600px) {
    width: 85%;
    margin: 30px auto 0px;
    height: 100%;
    padding-bottom: 10px;
  }
`;

// const extra = styled.div::after`
//   height: 30px;

// `


const DivOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 1px;  
  }

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 1px;
  }
`;

const Icon = styled.div`
  height: 100px;
  width: 100px;
  position: relative;
  margin-top: 20px;
  padding-left: 17px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    height: 70px;
    width: 70px;
    margin: auto;
    margin-top: 20px;
  }

  @media screen and (max-width: 600px) {
    height: 60px;
    width: 60px;
    margin: auto;
    margin-top: 20px;
  }
`;

const Container = styled.div`
  height: 150px;
  width: 150px;
  gap: 15px;
  transition: transform 0.3s ease;
  margin: auto;

  &:hover {
    transform: scale(1.2);
  }

  p {
    font-size: 20px;
    font-weight: bold;
    color: #31065a;
    margin-top: 10px;
  }

`;
