import React from 'react';
import './App.css';
import LeftMenu from "./LeftMenu";

import ReadmePage from "./pages/readme-page";
import RegexPage from "./pages/regex-page";
import JinjavaPage from "./pages/jinjava-page";
import {Switch, Route} from 'react-router-dom';




const App: React.FC = () => {
  return (

    <div>
      <LeftMenu  />

      <div className="page-wrap">
        <Switch>
          <Route exact  path={['/readme', '/']} component={ReadmePage}/>
          {/* Оба /roster и /roster/:number начинаются с /roster */}
          <Route path='/regex' component={RegexPage}/>
          <Route path='/jinjava' component={JinjavaPage}/>
        </Switch>
      </div>
    </div>
  );
};

export default App;
