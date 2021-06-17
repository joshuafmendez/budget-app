import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import "../App.css";

const API = apiURL();

const TransDetail = ({ deleteTransaction }) => {
  const [transaction, setTransaction] = useState({});
  const { id } = useParams();
  let history = useHistory();

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

  const handleDelete = () => {
    deleteTransaction(id);
    history.push("/transactions");
  };
  const { name,date,from,notes, amount } = transaction;
  return (
    <section className="detail-view">
      <div className="buttons">
        <Link to={`/transactions`}>
          <button>Back</button>
        </Link>
        <Link to={`/transactions/${id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div className="Card">
        <h3>{date}</h3>
        <div className="detail-section">
          <p>
            {name} {amount}
          </p>
          <p>From: {from}</p>
        </div>
        <div className="notes-section">
          Notes:<br></br>
          {notes}
        </div>
      </div>
    </section>
  );
};

export default TransDetail;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { apiURL } from "../util/apiURL";
// import "../App.css";

// const API = apiURL();

// const TransDetail = ({ deleteTransaction }) => {
//   const [transaction, setTransaction] = useState({});
//   const { index } = useParams();
//   let history = useHistory();

//   useEffect(() => {
//     const fetchTrans = async () => {
//       try {
//         const res = await axios.get(`${API}/transactions/${index}`);
//         setTransaction(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchTrans();
//   }, [index]);

//   const handleDelete = () => {
//     deleteTransaction(index);
//     history.push("/transactions");
//   };
//   return (
//     <section className="detail-view">
//       <div className="buttons">
//         <Link to={`/transactions`}>
//           <button>Back</button>
//         </Link>
//         <Link to={`/transactions/${index}/edit`}>
//           <button>Edit</button>
//         </Link>
//         <button onClick={handleDelete}>Delete</button>
//       </div>
//       <div className="Card">
//         <h3>{transaction.date}</h3>
//         <div className="detail-section">
//           <p>
//             {transaction.name} {transaction.amount}
//           </p>
//           <p>From: {transaction.from}</p>
//         </div>
//         <div className="notes-section">
//           Notes:<br></br>
//           {transaction.notes}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TransDetail;
