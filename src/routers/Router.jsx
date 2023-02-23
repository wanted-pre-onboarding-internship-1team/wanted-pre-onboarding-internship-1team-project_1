import { Navigate, Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import NonAuthRoute from './NonAuthRoute';
import SignUp from './../pages/signUp/SignUp';
import SignIn from './../pages/signIn/SignIn';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/todo' />} />
      <Route element={<AuthRoute />}>
        <Route path='/todo' element={<>todo페이지</>} />
      </Route>
      <Route element={<NonAuthRoute />}>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Route>
    </Routes>
  );
}
