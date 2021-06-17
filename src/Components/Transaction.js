import { Link } from "react-router-dom";

const Transaction = ({ transaction }) => {
  const { date, id, name, amount } = transaction;
  return (
    <tbody>
      <tr>
        <td className="trans-date">{date}</td>
        <td className="trans-name">
          <Link to={`/transactions/${id}`}>
            <div className="trans-click-area">{name}</div>
          </Link>
        </td>
        <td className="trans-amount">{amount}</td>
      </tr>
    </tbody>
  );
};

export default Transaction;
