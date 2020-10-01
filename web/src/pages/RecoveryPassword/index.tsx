import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

const RecoveryPassword = () => {

  return (
    
    <div id="page-recovery">
      <div id="page-recovery-content" className="container">

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
            <h1> Eita, esqueceu <br/> sua senha?</h1>
            <p>Não esquenta, vamos dar um jeito nisso.</p>
          </div>
          <form>
            <div className="input-form">
            <Input 
                type="email"
                name="email" 
                placeholder="E-mail" 
              />
            </div>
            <button className="button" type="submit">           
              Enviar 
            </button>
          </form>
        </section>
      </div>

      </div>
  );
};

export default RecoveryPassword;