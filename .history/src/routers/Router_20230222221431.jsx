import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import NonAuthRoute from './NonAuthRoute';

export default function Router() {
  return (
    <Routes>
      <Route path='/'>
        <Route path='todo' index element={<>todo페이지</>} />

        <Route element={<NonAuthRoute />}>
          <Route path='signup' element={<>회원가입페이지</>} />
          <Route path='signin' element={<>로그인페이지</>} />
        </Route>
      </Route>
    </Routes>
  );
}
