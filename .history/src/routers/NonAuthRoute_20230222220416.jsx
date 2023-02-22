import { Navigate, Outlet } from 'react-router-dom';

export default function NonAuthRoute() {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to={'/signin'} />;

  return <Outlet />;
}
