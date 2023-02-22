import { Navigate, Outlet } from 'react-router-dom';

export default function AuthRoute() {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to='/signup' />;
  return <Outlet />;
}
