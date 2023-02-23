import { Navigate, Outlet } from 'react-router-dom';

export default function NonAuthRoute() {
  const token = localStorage.getItem('token');
  if (!token) <Navigate />;
  return <Outlet />;
}
