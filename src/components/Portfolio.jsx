import styled from 'styled-components';
import eagwall from '../assets/eagwall.png';
import expe from '../assets/expe.png';
import hori from '../assets/hori.png';

const Portfolio = () => {
  return (
    <Background id="Portfolio">
      <HeadText>
        <p>
          <b>
            My <span>Portfolio</span>
          </b>
        </p>
      </HeadText>

      <Box>
        <InsideBox>
          <a href="https://elegance-gallery.netlify.app">
            <img src={eagwall} alt="" style={{ width: "100%" }} />
          </a>
        </InsideBox>

        <InsideBox>
          <a href="https://github.com/Pgodwin1/package-tracker.git">
          <img src={expe} alt="" style={{ width: "100%" }} />
          </a>
        </InsideBox>

        <InsideBox>
          <a href="https://github.com/Pgodwin1/real-estate-app.git">
          <img src={hori} alt="" style={{ width: "100%" }} />
          </a>
        </InsideBox>

      </Box>


      {/* <Box>
        <InsideBox>
          <img src={eagwall} alt="" style={{ width: "100%" }} />
        </InsideBox>

        <InsideBox>
          <img src={eagwall} alt="" style={{ width: "100%" }} />
        </InsideBox>

        <InsideBox>
          <img src={eagwall} alt="" style={{ width: "100%" }} />
        </InsideBox>

      </Box> */}


    </Background>
  )
}

export default Portfolio


const Background = styled.div`
  width: 100%;
  height: 500px;
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
  width: 300px;
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

    @media screen and (max-width: 600px) {
      font-size: 26px;
    }
  }
`;

const Box = styled.div`
  padding-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding-bottom: 30px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding-bottom: 30px;
  }

`

const InsideBox = styled.div`
    background-color: white;
    width: 275px;
    height: 200px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    justify-content: center;
    text-align: center;
    transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

span{
  color: #31065a;
  font-size: 1.5rem;
  font-weight: bold;
}

.text{
  padding-top: 20px;
  font-size: 1.2rem;
  line-height: 20px;
  color: #31065a;
}

img{
  width: 110%;
  height: 115%;
  overflow: hidden;
}
`