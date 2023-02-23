import React from 'react';
import FormInput from '../../components/common/input/FormInput';
import FormButton from '../../components/common/button/FormButton';
import styled from 'styled-components';

export default function SignIn() {
  return (
    <>
      <Title>로그인</Title>
      <FormSignIn>
        <FormInput
          testId='email-input'
          name='id'
          type='text'
          placeholder='이메일'
        />
        <FormInput
          testId='password-input'
          name='pw'
          type='password'
          placeholder='비밀번호'
        />
        <FormButton
          testId='signin-button'
          title='로그인'
          disabled={false}
          opacity={1}
        />
      </FormSignIn>
      <GoSignupContainer>
        <GoSignupTitle>
          계정이 없으신가요?
          <GoSignup>가입하기</GoSignup>
        </GoSignupTitle>
      </GoSignupContainer>
    </>
  );
}

const Title = styled.h1`
  margin: 100px auto 50px auto;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  color: var(--color-darkgrey);
`;

const FormSignIn = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  text-align: center;
`;

const GoSignupContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px auto;
`;

const GoSignupTitle = styled.h2`
  text-align: left;
  font-size: 15px;
  margin-bottom: 10px;
`;

const GoSignup = styled.span`
  margin-left: 5px;
  color: var(--color-darkblue);

  &:hover {
    cursor: pointer;
  }
`;
