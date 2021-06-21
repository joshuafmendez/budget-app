import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import FoF from "./Pages/FoF";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import ComingSoon from "./Pages/ComingSoon";
import { apiURL } from "./util/apiURL";
import axios from "axios";
import { useEffect, useState } from "react";

const API = apiURL();

// test for routes and front end
// style components library
// possible database

const App = () => {
  const [transactions, setTransactions] = useState([]);

  // Add a new transaction
  const addTransaction = async (newTransaction) => {
    try {
      const res = await axios.post(`${API}/transactions`, newTransaction);
      setTransactions((prevTransaction) => {
        return [...prevTransaction, res.data];
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Deletes a specific transaction
  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`${API}/transactions/${id}`);
      const newTransaction = [...transactions];
      const deleted = newTransaction.findIndex(trans => {
        return trans.id === id;
      })
      newTransaction.splice(deleted, 1);
      setTransactions(newTransaction);
    } catch (err) {
      console.log(err);
    }
  };

  // Update a specific transaction
  const updateTransaction = async (updatedTrans, id) => {
    try {
      const res = await axios.put(`${API}/transactions/${id}`, updatedTrans);
      setTransactions(res.data.transactions);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API}/transactions`);
      setTransactions(res.data);
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
          <Index transactions={transactions} />
        </Route>
        <Route exact path="/transactions/new">
          <New addTransaction={addTransaction} />
        </Route>
        <Route exact path="/transactions/:id">
          <Show deleteTransaction={deleteTransaction} />
        </Route>
        <Route exact path="/transactions/:id/edit">
          <Edit updateTransaction={updateTransaction} />
        </Route>
        <Route exact path="/coming-soon">
          <ComingSoon />
        </Route>
        <Route path="*">
          <FoF />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
