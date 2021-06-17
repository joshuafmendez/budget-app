import Transaction from "./Transaction";
import "../App.css";

const Transactions = ({ transactions }) => {
  return (
    <section className="account-table">
      <table>
        {transactions.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </table>
    </section>
  );
};

export default Transactions;
