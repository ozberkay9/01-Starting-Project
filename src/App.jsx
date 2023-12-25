// import { Fragment } from "react";
import Header from "./components/header";
import CoreConcepts from './components/CoreConsepts';
import Examples from './components/Examples.jsx';

function App() {
 
  return (
    // Fragment
    <>  
      <Header />

      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts />
        <Examples />
      </main>
    </>   // =>Fragment
  );
}

export default App;
