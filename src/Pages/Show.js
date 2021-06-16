import TransDetail from "../Components/TransDetail";
import "../App.css";


const Show = ({deleteTransaction}) => {
  return (
    <section>
      <h1>Transaction Details</h1>
      <TransDetail deleteTransaction={deleteTransaction}/>
    </section>
  );
};

export default Show;
