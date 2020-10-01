import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import proffyLogo from '../../assets/images/logo.svg';
import bannerLanding from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import logoutIcon from '../../assets/images/icons/logout.svg';

import './styles.css';
import api from '../../services/api';

function Landing() {

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(()=> {
    api.get('connections').then(response => {
      const {total} = response.data;
      setTotalConnections(total);
    });
  }, []);

  return(
    <div id="page-landing">        
      <header>
        <div className="profile-content">
          <img src="https://avatars0.githubusercontent.com/u/63480609?s=460&u=c69fe399d6e97159b75b64b597b007ff8e6ac553&v=4" alt="Felipe Antoniati"/>
          <Link to="/profile">Felipe Antoniati</Link>
        </div>
        <Link to="/">
          <img src={logoutIcon} alt="Sair" />
        </Link>
      </header>
      <main>
        <div id="page-landing-content" className="container">
          <div className="logo-container">
            <img src={proffyLogo} alt="Proffy"/>
            <h2>Sua plataforma de estudos online.</h2>
          </div>
    
          <img 
            src={bannerLanding} 
            alt="Plataforma de Estudos" 
            className="banner-proffy"
          />      
        </div>
      </main>
        
      <footer>
        <div className="welcome">
          <p>Seja Bem Vindo!</p>
          <p>Oque você deseja fazer?</p>
        </div>
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas"/>
            Dar Aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
        </span>
      </footer>
    </div>
  );
};

export default Landing;