import React, { useEffect, useState } from 'react';
import FormInput from '../../components/common/input/FormInput';
import FormButton from '../../components/common/button/FormButton';
import styled from 'styled-components';
import { api } from './../../apis/index';
import { useNavigate } from 'react-router-dom';
import { utilOnChange } from '../../utils/utilOnChange';

export default function SignUp() {
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
      .signup(email, password)
      .then(res => {
        alert('회원가입이 완료되었습니다 🙌');
        navigate('/signin');
      })
      .catch(err => alert(err.response.data.message));
  };

  return (
    <>
      <Title>이메일 주소로 가입하기</Title>
      <FormSignUp onSubmit={onSubmit}>
        <InputInfo>어떤 이메일로 가입하시겠습니까?</InputInfo>
        <FormInput
          testId='email-input'
          name='email'
          type='text'
          placeholder='internship@wanted.co.kr'
          value={inputValue.text}
          changeFunc={event => {
            utilOnChange(event, inputValue, setInputValue);
          }}
        />
        <GuideMsg>{guideEmailMsg}</GuideMsg>
        <InputInfo>비밀번호를 설정해주세요.</InputInfo>
        <FormInput
          testId='password-input'
          name='password'
          type='password'
          placeholder='비밀번호'
          value={inputValue.text}
          changeFunc={event => {
            utilOnChange(event, inputValue, setInputValue);
          }}
        />
        <GuideMsg>{guidePwMsg}</GuideMsg>
        <FormButton
          testId='signup-button'
          disabled={btnState}
          opacity={btnOpacity}
          title='가입하기'
        />
      </FormSignUp>
      <GoLoginContainer>
        <GoLoginTitle>
          이미 계정이 있으신가요?
          <GoLogin onClick={() => navigate('/signin')}>로그인하기</GoLogin>
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

const GuideMsg = styled.p`
  margin-bottom: 20px;
  text-align: left;
  font-size: 13px;
  color: var(--color-accent);
`;
