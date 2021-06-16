import { Link } from "react-router-dom";

const Transaction = ({ transaction }) => {
  return (
    <li>
      <Link to={`/transactions/${transaction.id}`}>{transaction.date} {transaction.name} {transaction.amount}</Link>
    </li>
  );
};

export default Transaction;