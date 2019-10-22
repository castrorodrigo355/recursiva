import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Members from "./components/registered_members/Members";
import RacingAverage from "./components/racing_average/Racing_Average";
import UniversityMarriedAge from "./components/university_married_age/University_Married_Age";
import OcurrencesRiverName from "./components/ocurrences_river_name/Ocurrences_River_Name";
import OcurrencesDataTeam from "./components/ocurrences_data_team/Ocurrences_Data_Team";

// import sociosData from "./csvjson.json"
import './App.css';

function App() {

  return (
    
    <div className="App">
      <Router>
        <div>        
          <Navigation/>
          <Switch>
            <Route exact path="/"><Home /></Route>
            {/* <Route path="/members"><Members socios={socios}/></Route> */}
            <Route path="/members"><Members/></Route>
            <Route path="/racing_average"><RacingAverage/></Route>
            <Route path="/university_married_age"><UniversityMarriedAge/></Route>
            <Route path="/ocurrences_river_name"><OcurrencesRiverName/></Route>
            <Route path="/ocurrences_data_team"><OcurrencesDataTeam/></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;