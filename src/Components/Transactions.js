import Transaction from "./Transaction";

const Transactions = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((transaction,index) => {
        return (
          <Transaction key={transaction.id} transaction={transaction} index={index}/>
        );
      })}
    </ul>
  );
};

export default Transactions;
