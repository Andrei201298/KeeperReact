import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Header from './components/Header'
import Footer from './components/Footer';
import Note from './components/Note';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  
  <Header />
  <Note title="New Task" content="Do react module"/>
  <Note title="New Task_2" content="buy a car"/>
  <Footer />

</div>

);


