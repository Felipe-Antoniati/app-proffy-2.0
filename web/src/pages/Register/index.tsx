import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

import api from '../../services/api';

const Register = () => {
  const [id, setId] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');

  const history = useHistory();

  async function handleRegister(e: FormEvent) {
    e.preventDefault();
    try {
      const response = await api.post('teachers', { id });
      
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      
      history.push('/profile');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    };
  };


  return (
    
    <div id="page-register">
      <div id="page-register-content" className="container">

        <div className="header-back">
          <Link className="back-link" to="/">
            <img src={backIcon} alt="Voltar"/>
          </Link>
        </div>

        <div className="proffy-container">
          <Link className="back-link" to="/">
            <img src={backIcon} alt="Voltar"/>
          </Link>
          <div className="logo-proffy">
            <img src={logoImg} alt="Proffy"/>
            <p>Sua plataforma de estudos online</p>
          </div>
        </div>
        <section className="form">
          <div className="header-form">
            <h1> Cadastro </h1>
            <p>Preencha os dados abaixo <br/>para começar</p>
          </div>
          <form onSubmit={handleRegister}>
            <div className="input-form">
            <Input 
                name="fullname" 
                placeholder="Nome" 
                value={firstname} 
                onChange={e => setFirstName(e.target.value)} 
              />
              <Input 
                name="whatsapp" 
                placeholder="Whatsapp" 
                value={lastname} 
                onChange={e => setLastName(e.target.value)} 
              />
              <Input 
                type="email" 
                name="id" 
                placeholder="E-mail" 
                value={id} 
                onChange={e => setId(e.target.value)} />
              <Input 
                name="id" 
                placeholder="Senha" 
                value={id} 
                onChange={e => setId(e.target.value)} 
              />
            </div>
            <button className="button" type="submit">           
              Concluir cadastro 
            </button>
          </form>
        </section>
      </div>

      </div>
  );
};

export default Register;