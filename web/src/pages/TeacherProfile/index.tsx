import React, {FormEvent, useState} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css';

function TeacherForm() {

  const history = useHistory();
 
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 7,from: '',to: '' }
  ]);

  function addNewScheduleItem(){
   
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0,from: '',to: '' }
    ]);
  }

  function handleCreateClass(e: FormEvent){
    
    e.preventDefault();

    api.post('users', { 
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro realizado com Sucesso!')
      history.push('/');
    }).catch(() => {
      alert('Erro no Cadastro!')
    })
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return {...scheduleItem, [field]: value};
      } 

      return scheduleItem;
    });
    setScheduleItems(updatedScheduleItems);
  }



  return(
    <div id="page-teacher-form" className="container">
     <PageHeader>
     <div className="profile-content">
       <div className="avatar-profile">
          <img src="https://avatars0.githubusercontent.com/u/63480609?s=460&u=c69fe399d6e97159b75b64b597b007ff8e6ac553&v=4" alt="Felipe Antoniati"/>
       </div>
       <div className="profile-info">
          <h1>Felipe Antoniati<br/><span>Matemática</span></h1>
       </div>
        </div>
     </PageHeader>
    <main>
      <form onSubmit={handleCreateClass}>
        <fieldset>
          <legend>Seus Dados</legend>
          <div className="fullname">
            <Input 
              name="firstname" 
              label="Nome" 
              value={name}
              onChange={(e) => {setName(e.target.value)}}
            />
            <Input 
              name="lastname" 
              label="Sobrenome"
              value={avatar}
              onChange={(e) => {setAvatar(e.target.value)}} 
            />
          </div>
          <div className="contact-container">
            <Input 
              name="whatsapp" 
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => {setWhatsapp(e.target.value)}}
            />
            <Input 
              name="email" 
              label="E-mail"
              value={whatsapp}
              onChange={(e) => {setWhatsapp(e.target.value)}}
            />

          </div>
          <Textarea 
            name="bio" 
            label="Biografia"
            value={bio}
            onChange={(e) => {setBio(e.target.value)}}
          />
        </fieldset>
        <fieldset>
          <legend>Sobre à Aula</legend>
          <div className="about-class">
            <Select 
              name="subject" 
              label="Matéria" 
              value={subject}
              onChange={(e) => { setSubject(e.target.value) }}
              options={[
                {value: 'Artes', label: 'Artes'},
                {value: 'Biologia', label: 'Biologia'},
                {value: 'Ciências', label: 'Ciências'},
                {value: 'Portugûes', label: 'Portugûes'},
                {value: 'Matemática', label: 'Matemática'},
                {value: 'Geografia', label: 'Geografia'},
                {value: 'Quimica', label: 'Quimica'},
                {value: 'História', label: 'História'},
                {value: 'Educação Física', label: 'Educação Física'},
                {value: 'Física', label: 'Física'},
              ]}
            />
            <Input 
              name="cost" 
              label="Custo da sua hora por Aula" 
              value={cost}
              onChange={(e) => { setCost(e.target.value) }}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>            
          </legend>
        {scheduleItems.map((scheduleItem, index) => {
          return(
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select 
                  name="week_day" 
                  value={scheduleItem.week_day}
                  onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                  label="Dia da Semana" 
                  options={[
                    {value: '0', label: 'Domingo'},
                    {value: '1', label: 'Segunda-feira'},
                    {value: '2', label: 'Terça-feira'},
                    {value: '3', label: 'Quarta-feira'},
                    {value: '4', label: 'Quinta-feira'},
                    {value: '5', label: 'Sexta-feira'},
                    {value: '6', label: 'Sábado'},              
                  ]}
                />
                <Input 
                  name="from" 
                  label="Das" 
                  type="time" 
                  value={scheduleItem.from}
                  onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                />
                <Input 
                  name="to" 
                  label="até" 
                  type="time" 
                  value={scheduleItem.to}
                  onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                />
              </div>          
            );
          })}
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br />
            Preencha todos os dados.
          </p>
          <button type="submit">
            Salvar Cadastro
          </button>
        </footer>
      </form>
    </main>
    </div>
  );
};

export default TeacherForm;