import { useEffect, useState } from "react";
import Transactions from "../Components/Transactions";

const Index = ({ transactions }) => {
  const [sum, setSum] = useState();
  useEffect(() => {
    const reducer = async () => {
      const amountArray = transactions.map((trans) => {
        return trans.amount;
      });
      const total = (acc, currVal) => acc + currVal;
      const arrayTotal = amountArray.reduce(total, 0);
      setSum(arrayTotal);
    };
    reducer();
  }, [transactions]);

  return (
    <section>
        
      <h1>Bank Account Total: {sum}</h1>
      <Transactions transactions={transactions} />
    </section>
  );
};

export default Index;
