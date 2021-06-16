import Transaction from "./Transaction";

const Transactions = ({ transactions }) => {
  return (
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
  );
};

export default Transactions;
