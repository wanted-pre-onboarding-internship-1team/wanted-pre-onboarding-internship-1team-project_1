import React, { useState, useEffect } from 'react';
import FormInput from '../../components/common/input/FormInput';
import FormButton from '../../components/common/button/FormButton';
import styled from 'styled-components';
import { api } from './../../apis/index';
import { useNavigate } from 'react-router-dom';
import { utilOnChange } from '../../utils/utilOnChange';

export default function SignIn() {
  const [inputValue, setInputValue] = useState({ email: '', password: '' });
  const [btnState, setBtnState] = useState(false);
  const [btnOpacity, setBtnOpacity] = useState(0.3);
  const [guideEmailMsg, setGuideEmailMsg] = useState('');
  const [guidePwMsg, setGuidePwMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkEmail = inputValue.email.toString().includes('@');
    const checkPassword = inputValue.password.length;

    if (checkEmail === true && checkPassword >= 8) {
      setBtnState(false);
      setBtnOpacity(1);
    } else {
      setBtnState(true);
      setBtnOpacity(0.3);
    }

    if (checkEmail === false) {
      setGuideEmailMsg('@를 포함한 올바른 이메일 형식을 입력해주세요');
    } else {
      setGuideEmailMsg('');
    }

    if (checkPassword < 8) {
      setGuidePwMsg('비밀번호를 8자리 이상 입력해주세요');
    } else {
      setGuidePwMsg('');
    }
  }, [inputValue]);

  const onSubmit = async e => {
    e.preventDefault();

    const { email, password } = inputValue;

    api.auth
      .signin(email, password)
      .then(res => {
        localStorage.setItem('token', res.data.access_token);
        navigate('/todo');
      })
      .catch(err => alert('이메일 또는 비밀번호가 올바르지 않습니다.'));
  };

  return (
    <>
      <Title>로그인</Title>
      <FormSignIn onSubmit={onSubmit}>
        <FormInput
          testId='email-input'
          name='email'
          type='text'
          placeholder='이메일'
          value={inputValue.text}
          changeFunc={event => {
            utilOnChange(event, inputValue, setInputValue);
          }}
        />
        <GuideMsg>{guideEmailMsg}</GuideMsg>
        <FormInput
          testId='password-input'
          name='password'
          type='password'
          placeholder='비밀번호'
          value={inputValue.password}
          changeFunc={event => {
            utilOnChange(event, inputValue, setInputValue);
          }}
        />
        <GuideMsg>{guidePwMsg}</GuideMsg>
        <FormButton
          testId='signin-button'
          title='로그인'
          disabled={btnState}
          opacity={btnOpacity}
        />
      </FormSignIn>
      <GoSignupContainer>
        <GoSignupTitle>
          계정이 없으신가요?
          <GoSignup onClick={() => navigate('/signup')}>가입하기</GoSignup>
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

const GuideMsg = styled.p`
  margin-bottom: 20px;
  text-align: left;
  font-size: 13px;
  color: var(--color-accent);
`;
