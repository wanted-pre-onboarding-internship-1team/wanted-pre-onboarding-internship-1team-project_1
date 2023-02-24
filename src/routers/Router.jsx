import { Navigate, Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import NonAuthRoute from './NonAuthRoute';
import TodoPage from '../pages/todo/todoPage';
import SignUp from './../pages/signUp/SignUp';
import SignIn from './../pages/signIn/SignIn';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/todo' />} />
      <Route element={<AuthRoute />}>
        <Route path='/todo' element={<TodoPage />} />
      </Route>
      <Route element={<NonAuthRoute />}>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Route>
    </Routes>
  );
}
