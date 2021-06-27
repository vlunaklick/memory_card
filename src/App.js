import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [points,setPoints] = useState(0);
  
  const [bestscore,setBestscore] = useState(points);


  return (
    <>
      <Header points={points} bestscore={bestscore} />
      <Main />
    </>
  );
}

export default App;
