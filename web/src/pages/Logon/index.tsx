import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import heartIcon from '../../assets/images/icons/purple-heart.svg';

import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

import api from '../../services/api';

const Logon = () => {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    try {
      const response = await api.post('sessions', { id });
      
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      
      history.push('/profile');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    };
  };


  return (
    
    <div id="page-logon">
      <div id="page-logon-content" className="container">
        <div className="proffy-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <section className="form">
          <div className="header-form">
            <h1> Fazer login </h1>
          </div>
          <form onSubmit={handleLogin}>
            <div className="input-form">
              <Input 
                type="email" 
                name="id" 
                placeholder="Insira seu E-mail" 
                value={id} 
                onChange={e => setId(e.target.value)} />
              <Input 
                name="id" 
                placeholder="Digite sua Senha" 
                value={id} 
                onChange={e => setId(e.target.value)} 
              />
            </div>
            <div className="footer-form">
              <div className="checkbox-container">
                <input type="checkbox" />
                <label htmlFor="check">Lembrar-me</label>                
              </div>
              <Link className="back-link" to="/recovery">
                Esqueci minha senha
              </Link>
            </div>
            <button className="button" type="submit">           
              Entrar 
            </button>
          </form>
          <div className="footer-login">
            <div className="register-now">
             Não tem conta ?
             <Link className="back-link" to="/register">
               Cadastre-se
            </Link>
            </div>
            <p>
              É de graça
              <img src={heartIcon} alt="Coração Roxo" />
            </p>
          </div>
        </section>
      </div>

      </div>
  );
};

export default Logon;