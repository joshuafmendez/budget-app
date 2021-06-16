import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import FoF from "./Pages/FoF";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import { apiURL } from "./util/apiURL";
import axios from "axios";
import { useEffect, useState } from "react";

const API = apiURL();

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API}/transactions`);
      setTransactions(res.data)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/transactions">
          <Index />
        </Route>
        <Route exact path="/transactions/new">
          <New />
        </Route>
        <Route exact path="/transactions/:index">
          <Show />
        </Route>
        <Route exact path="/transactions/:index/edit">
          <Edit />
        </Route>
        <Route path="*">
          <FoF />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
