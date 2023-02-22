import { Navigate, Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import NonAuthRoute from './NonAuthRoute';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/todo' />} />
      <Route element={<AuthRoute />}>
        <Route path='/todo' element={<>todo페이지</>} />
      </Route>
      <Route element={<NonAuthRoute />}>
        <Route path='/signup' element={<>회원가입페이지</>} />
        <Route path='/signin' element={<>로그인페이지</>} />
      </Route>
    </Routes>
  );
}
