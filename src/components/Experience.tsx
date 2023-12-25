import styled from 'styled-components'

const FourthBlock = () => {


  return (
    <Background id='Experience'>
      <HeadText>
            <p><b>Work <span>Experience</span></b></p>
        </HeadText>

  
        
    </Background>
  )
}

export default FourthBlock

const Background = styled.div`
  width: 100%;
  height: 840px;
  background-color: #170550;

  /* @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
  } */
`

const HeadText = styled.div`
  padding-top: 60px;
  border-bottom: #fd562a solid;
  width: 450px;
  text-align: center;
  margin: auto;
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 70%;
    margin: auto;
    padding-top: 30px;
  }

  @media screen and (max-width: 600px) {
    width: 70%;
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
