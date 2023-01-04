import React, { components } from 'react'
import styled from 'styled-components'
import Button from './signup/Button'
import Icon from './signup/Icon'
import Input from './signup/Input'
import { BsGoogle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Singup = () => {
  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content={'sign in'} />
      </ButtonContainer>
      <HorizonalRule />
      <ButtonContainer>
        <Button content={'sign in with google'} />
      </ButtonContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`
const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`
const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: center;
`
const HorizonalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 1.5rem 0 1rem 0;
  background: linear-gradient(to right, blue 0%, #03217b 79%);
  backdrop-filter: blur(25px);
`
const ForgotPassword = styled.h4`
  cursor: pointer;
`
export default Singup
