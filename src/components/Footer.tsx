import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterDiv>
        <p>
            <span>&copy;</span> 2022 | All Rights Reserved by Gidlify
        </p>
    </FooterDiv>
  )
}

export default Footer


const FooterDiv = styled.div`
  width: 100%;
  height: 80px;
  justify-content: space-between;
  display: flex;
  background-color: #170550;
  align-items: center;
  justify-content: center;

  p{
    color: white;
    font-size: 18px;
    padding-top: 15px;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }

    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }

  span{
    font-weight: bolder;
  }
  
`;