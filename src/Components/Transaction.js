import { Link } from "react-router-dom";

const Transaction = ({ transaction, index }) => {
  return (
    <tbody>
      <tr>
        <td className="trans-date">{transaction.date}</td>
        <td className="trans-name">
          <Link to={`/transactions/${index}`}>
            <div className="trans-click-area">{transaction.name}</div>
          </Link>
        </td>
        <td className="trans-amount">{transaction.amount}</td>
      </tr>
    </tbody>
  );
};

export default Transaction;
