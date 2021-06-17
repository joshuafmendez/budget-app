import { useState } from "react";
import { useHistory } from "react-router-dom";

import uuid from "react-uuid";

const TransNewForm = (props) => {
  let history = useHistory();
  const [transaction, setTransaction] = useState({
    id: uuid(),
    from: "",
    date: "",
    name: "",
    amount: "",
    notes: ""
  });

  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const handleNumber = (e) => {
    setTransaction({ ...transaction, amount: Number(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTransaction(transaction);
    history.push("/transactions");
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
      <label htmlFor="from">From</label>
        <input
          id="from"
          type="text"
          required
          value={transaction.from}
          placeholder="Transaction From"
          onChange={handleTextChange}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleTextChange}
          placeholder="DD/MM/YYYY"
          required
          pattern="\d{4}-\d{2}-\d{2}"
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          required
          value={transaction.name}
          placeholder="Transaction Name"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          value={transaction.amount}
          onChange={handleNumber}
          placeholder="Amount"
        />
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          name="notes"
          value={transaction.notes}
          placeholder="Any notes you feel are important to remember"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default TransNewForm;
