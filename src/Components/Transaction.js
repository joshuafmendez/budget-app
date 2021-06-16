import { Link } from "react-router-dom";

const Transaction = ({ transaction, index }) => {
  return (
    <li>
      <Link to={`/transactions/${index}`}>{transaction.name}</Link>
    </li>
  );
};

export default Transaction;