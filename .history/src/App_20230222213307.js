import { api } from './apis';
import './App.css';

function App() {
  api.auth.signup('asdasd@naver.com', 'asdasdasd').then(res => {
    console.log(res);
  });
  return <div></div>;
}

export default App;
