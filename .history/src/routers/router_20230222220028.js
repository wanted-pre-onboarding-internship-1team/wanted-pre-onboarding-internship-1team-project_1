import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='todo' element={<>todo페이지</>} />
          <Route path='signup' element={<>회원가입페이지</>} />
          <Route path='signin' element={<>로그인페이지</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
