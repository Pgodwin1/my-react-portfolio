import styled from 'styled-components'
import { FaLaptopCode } from "react-icons/fa";


const ThirdBlock = () => {
  return (
    <Background id='Services'>
      <HeadText>
            <p><b>My <span>Services</span></b></p>
        </HeadText>


        <Box>
          <InsideBox>
          <StyledFaLaptopCode />
          <span><p>Web Development</p></span> 
          <p className='text'>Crafting digital excellence through innovative web development services. From conceptualization to execution, we transform ideas into seamlessly functioning online experiences. Elevate your brand with our tailored web solutions, where code meets creativity to build tomorrow's digital landscapes today.</p>
          </InsideBox>

          <InsideBox>
            <img src="src/images/icons8-quality-assurance-64.png" alt="" />
            <span><p>Quality Assurance</p></span>
            <p className='text'>Ensuring excellence through every line of code and pixel on screen. Our Quality Assurance is more than testing; it's a commitment to delivering flawless digital experiences. Rigorous testing meets meticulous attention to detail, guaranteeing the highest standards in every project. Elevate your digital presence with confidence — where quality is not just assured but embedded in our DNA</p>
          </InsideBox>

          <InsideBox>
          <img src="src/images/agile.png" alt=""/>
          <span><p>Agile Methodologist</p></span> 
          <p className='text'>Guiding innovation through the rhythm of Agile methodologies. As Agile methodologist, I orchestrate collaboration, adaptability, and iterative excellence. Transforming challenges into opportunities and turning visions into tangible successes. Each sprint propels us towards digital excellence and client delight.</p>
          </InsideBox>

        </Box>
        
    </Background>
  )
}

export default ThirdBlock

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
`

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
  padding-top: 130px;
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
    margin: auto 25px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

`

const InsideBox = styled.div`
background-color: white;
width: 367px;
height: 399px;
position: relative;
overflow: hidden;
border-radius: 20px;
justify-content: center;
text-align: center;
padding: 10px;
transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

@media screen and (max-width: 768px) {
  margin-top: -10px;
  width: 80%;
  height: 70%;
  margin: auto;
  padding-bottom: 10px;
}

@media screen and (max-width: 600px) {
  margin-top: -10px;
  width: 80%;
  height: 70%;
  margin: auto;
  padding-bottom: 10px;
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
  width: 100px;
}
`
const StyledFaLaptopCode = styled(FaLaptopCode)`
  font-size: 6.5rem;
`