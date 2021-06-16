import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const TransDetail = ({ deleteTransaction }) => {
  const [transaction, setTransaction] = useState({});
  const { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    const fetchTrans = async () => {
      try {
        const res = await axios.get(`${API}/transactions/${index}`);
        setTransaction(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrans();
  }, [index]);

  const handleDelete = () => {
    deleteTransaction(index);
    history.push("/transactions");
  };
  return (
    <section>
      <div>
        <Link to={`/transactions`}>
          <button>Back</button>
        </Link>
        <Link to={`/transactions/${index}/edit`}>
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
