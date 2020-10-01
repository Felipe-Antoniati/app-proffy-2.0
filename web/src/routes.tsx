import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Logon from './pages/Logon';
import Register from './pages/Register';
import TeacherProfile from './pages/TeacherProfile';
import RecoveryPassword from './pages/RecoveryPassword';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Logon} />
      <Route path="/home" component={Landing} />
      <Route path="/recovery" component={RecoveryPassword} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={TeacherProfile} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/study" component={TeacherList} />
    </BrowserRouter>
  );
};

export default Routes;