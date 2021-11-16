import './App.css';
import React, { useState } from 'react';
import AllPets from './components/AllPets';
import PetFormNew from './components/PetFormNew';
import PetFromEdit from './components/PetFromEdit'; 
import PetInfo from './components/PetInfo';

import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

function App() {

  const [formSubmit, setFormSubmit] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>

      <Link to="/" >Home</Link>  
      <br/>

      <Switch> 
          <Route exact path = "/">
            <AllPets formSubmit = {formSubmit} setFromSubmit = {setFormSubmit}> </AllPets>
          </Route>

        <Route exact path = "/pets/new">
          <PetFormNew formSubmit = {formSubmit} setFormSubmit= {setFormSubmit}/>
        </Route>

        <Route exact path = "/pets/edit/:id">
            <PetFromEdit formSubmit = {formSubmit} setFormSubmit= {setFormSubmit}/>
        </Route>

        <Route exact path = "/api/pets/:id">
            <PetInfo/>
        </Route>

    </Switch>

    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
