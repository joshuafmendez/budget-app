import Transaction from "./Transaction";

const Transactions = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((transaction) => {
        return (
          <Transaction key={transaction.id} transaction={transaction}/>
        );
      })}
    </ul>
  );
};

export default Transactions;
