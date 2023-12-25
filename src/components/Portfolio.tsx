import styled from 'styled-components';

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
          
          </InsideBox>

          <InsideBox>
            
          </InsideBox>

          <InsideBox>
          
          </InsideBox>

        </Box>


        <Box>
          <InsideBox>
          
          </InsideBox>

          <InsideBox>
            
          </InsideBox>

          <InsideBox>
          
          </InsideBox>

        </Box>

      
    </Background>
  )
}

export default Portfolio


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
padding: 10px;
transition: transform 0.3s ease;

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
  width: 100px;
}
`