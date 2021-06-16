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
        const res = await axios.get(`${API}/Transactions/${index}`);
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
      Details
      <div>
        <Link to={`/transactions`}>
          <button>Back</button>
        </Link>
        <Link to={`/transactions/${index}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </section>
  );
};

export default TransDetail;
