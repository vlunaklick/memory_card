import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [points,setPoints] = useState(0);
  
  const [bestscore,setBestscore] = useState(points);


  useEffect(() =>{
    setPoints(0);
  }, [])


  useEffect(() => {
    if (points > bestscore){
      setBestscore(points)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[points])

  const increment = () =>{
    setPoints(prevPoints =>{
      return prevPoints + 1
    });
  };

  const reset = () =>{
    setPoints(0);
  };

  return (
    <>
      <Header points={points} bestscore={bestscore} />
      <Main increment={increment} reset={reset} />
    </>
  );
}

export default App;
