import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const TransEditForm = ({ updateTransaction }) => {
  let { id } = useParams();
  let history = useHistory();
  const [transaction, setTransaction] = useState({
    from: "",
    date: "",
    name: "",
    amount: "",
    notes: "",
  });

  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const handleNumber = (e) => {
    setTransaction({ ...transaction, amount: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTransaction(transaction, id);
    history.push(`/transactions/${id}`);
  };

  useEffect(() => {
    const fetchTrans = async () => {
      try {
        const res = await axios.get(`${API}/transactions/${id}`);
        setTransaction(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrans();
  }, [id]);

  return (
    <div className="Edit">
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
          placeholder="yyyy/MM/dd"
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

export default TransEditForm;
