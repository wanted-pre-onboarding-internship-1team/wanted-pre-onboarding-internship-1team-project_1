import React from 'react';
import FormInput from '../../components/input/FormInput';
import FormButton from '../../components/button/SignButton';
import styled from 'styled-components';

export default function SignUp() {
  return (
    <>
      <Title>이메일 주소로 가입하기</Title>
      <FormSignUp>
        <InputInfo>어떤 이메일로 가입하시겠습니까?</InputInfo>
        <FormInput
          testId='email-input'
          name='id'
          type='text'
          placeholder='internship@wanted.co.kr'
        />
        <InputInfo>
          비밀번호를 설정해주세요. <ValidatePw>8자 이상</ValidatePw>
        </InputInfo>
        <FormInput
          testId='password-input'
          name='pw'
          type='password'
          placeholder='비밀번호'
        />
        <FormButton
          testId='signup-button'
          disabled={false}
          opacity={1}
          title='가입하기'
        />
      </FormSignUp>
      <GoLoginContainer>
        <GoLoginTitle>
          이미 계정이 있으신가요?
          <GoLogin>로그인하기</GoLogin>
        </GoLoginTitle>
      </GoLoginContainer>
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

const FormSignUp = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  text-align: center;
`;

const InputInfo = styled.h2`
  text-align: left;
  font-size: 13px;
  margin-bottom: 10px;
`;

const ValidatePw = styled.span`
  color: var(--color-accent);
`;

const GoLoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px auto;
`;

const GoLoginTitle = styled.h2`
  text-align: left;
  font-size: 15px;
  margin-bottom: 10px;
`;

const GoLogin = styled.span`
  margin-left: 5px;
  color: var(--color-darkblue);

  &:hover {
    cursor: pointer;
  }
`;
