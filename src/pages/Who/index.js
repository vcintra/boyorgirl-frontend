import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

export default function Who(){
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
    history.push('/quiz');
  }
  
  return (
    <div className="who-container">
      <section className="form">        
        <form onSubmit={handleLogin}>
          <h1>Olá pessoal! Sabemos que estão ansiosos para saber quem sou eu. 
            Mas antes responda quem sou eu.</h1>          
          <button className="button-girl" type="submit">Menina</button>
          <button className="button-boy" type="submit">Menino</button>
        </form>
      </section>
    </div>
  );
}