import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import {Route,Switch} from 'react-router-dom';
import AddContracts from './Container/Contracts/Add/Contracts';
import ViewContracts from './Container/Contracts/Display/Contracts';
import AddObligations from './Container/Obligations/Add/Obligations';
import ViewObligations from './Container/Obligations/Display/Obligations';
import Default from './Container/Default/Default';

function App() {
  return (
    <div className="App">
    <Layout>
    <Switch>
      <Route path="/AddContracts" component={AddContracts}/>
      <Route path="/ViewContracts" component={ViewContracts}/>
      <Route path="/AddObligations" component={AddObligations}/>
      <Route path="/ViewObligations" component={ViewObligations}/>
      <Route path="/" component={Default}/>
     </Switch>
    </Layout>
    </div>
  );
}

export default App;
