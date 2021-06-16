import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const TransDetail = ({ deleteTransaction }) => {
  const [transaction, setTransaction] = useState({});
  let history = useHistory();

  useEffect(() => {
    const fetchTrans = async () => {
      try {
        const res = await axios.get(`${API}/transactions/${transaction.id}`);
        setTransaction(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrans();
  }, [transaction.id]);

  const handleDelete = () => {
    deleteTransaction(transaction.id);
    history.push("/transactions");
  };
  return (
    <section>
      <div>
        <Link to={`/transactions`}>
          <button>Back</button>
        </Link>
        <Link to={`/transactions/${transaction.id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div>
        {transaction.date} {transaction.name} {transaction.amount}{" "}
        {transaction.from} {transaction.notes}
      </div>
    </section>
  );
};

export default TransDetail;
