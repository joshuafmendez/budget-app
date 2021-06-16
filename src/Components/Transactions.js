import Transaction from "./Transaction";

import "../App.css";

const Transactions = ({ transactions }) => {
  return (
    <section className="account-table">
      <table>
        {transactions.map((transaction, index) => {
          return (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              index={index}
            />
          );
        })}
      </table>
    </section>
  );
};

export default Transactions;
