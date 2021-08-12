import styled from 'styled-components';
import background from '../../assets/background.png';
import logo from '../../assets/logowhite.png';

export const Container = styled.div`
  position: absolute;
  background: url(${background});
  background-repeat: no-repeat;
  background-size:100%;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  bottom:0;
  left: 0;
  top: 0;
  right: 0;
  overflow: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  background-image: url(${logo});
  width: 104px;
  height: 36px;
  margin-right: 16px;
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const Title = styled.label`
  font-family: Heebo;
  color: #ffffff;
  font-weight: 300;
  line-height: 40px;
  font-size: 28px;
  margin-bottom: 48px;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  @media (max-width: 460px) {
    margin: auto;
  }
`;

export const Form = styled.form`
  position: relative;
`;

export const InputContainer = styled.div`
  width: 368px;
  height: 60px;
  left: 115px;
  top: 360px;
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 5px 16px 5px 16px;
  

  @media (max-width: 460px) {
    width: 288px;
  }
  label {
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #FFFFFF;
  opacity: 0.5;
  cursor: pointer;
  }
  input {
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  height: 24px;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  } 
  button{
  position: absolute;
  right: 10px;
  width: 85px;
  height: 36px;
  bottom: 25px;
  top: 20%;
  background: #ffffff;
  border-radius: 44px;
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.value || '#b22e6f'};
  border: none;
  cursor: pointer; 
  }
`;

export const Error = styled.div`
  &::before {
    content: '';
    position: absolute;
    left: 1rem;
    top: -0.5rem;
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid rgba(255, 255, 255, 0.4);
  }
  padding: 1rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  position: relative;
  margin-top: 0.5rem;
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  width: 240px;
  color: #ffffff;
`;