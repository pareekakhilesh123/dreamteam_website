// App.js
import React, { useState, useEffect } from "react";
import '@fontsource/anton';

import './App.css';
import AppRoutes from './routes/AppRoutes';
import Preloader from './components/Preloader/Preloader';



function App() {

  const [loading, setLoading] = useState(true);

 useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     <>
      {loading ? (
        <Preloader />
      ) : (
        <div className=""><AppRoutes /></div>
      )}
    </>


    </>
  );
}

export default App;


