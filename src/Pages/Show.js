import TransDetail from "../Components/TransDetail";

const Show = ({deleteTransaction}) => {
  return (
    <section>
      <h1>Transaction Details</h1>
      <TransDetail deleteTransaction={deleteTransaction}/>
    </section>
  );
};

export default Show;
