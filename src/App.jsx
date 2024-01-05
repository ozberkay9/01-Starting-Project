//import { Fragment } from "react";
import Header from "./components/header";
import CoreConcepts from './components/CoreConsepts';
import Examples from './components/Examples.jsx';

function App() {
 
  return (
    
    // Fragment
    <>  {/* return sadece tek satır çevirir. bu yüzden bir div ya da section içerisinde kodu çalıştırmak zorundasın. */}
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
