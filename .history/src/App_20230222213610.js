import { api } from './apis';
import './App.css';

function App() {
  api.auth.signup('1q2w3e4r5t@naver.com', 'asdasdasd').then(res => {
    console.log(res);
  });
  return <div></div>;
}

export default App;
