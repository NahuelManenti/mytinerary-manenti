import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './style/App.css';


function App() {
  return (
    <div className="App">
      <h1>Texto de componente App</h1>
      <Main/>
      <Footer/>
      <Header/>
    </div>
  );
}

export default App;
