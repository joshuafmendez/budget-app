import Transaction from "./Transaction";

const Transactions = ({ transactions }) => {
  return (
    <section>
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
