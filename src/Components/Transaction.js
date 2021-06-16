import { Link } from "react-router-dom";

const Transaction = ({ transaction, index }) => {
  return (
    <li>
      <Link to={`/transactions/${index}`}>{transaction.date} {transaction.name} {transaction.amount}</Link>
    </li>
  );
};

export default Transaction;