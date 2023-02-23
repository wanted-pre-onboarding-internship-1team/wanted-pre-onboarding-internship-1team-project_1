import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import NonAuthRoute from './NonAuthRoute';

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route element={<AuthRoute />}>
            <Route path='todo' index={true} element={<>todo페이지</>} />
          </Route>

          <Route element={<NonAuthRoute />}>
            <Route path='signup' element={<>회원가입페이지</>} />
            <Route path='signin' element={<>로그인페이지</>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
