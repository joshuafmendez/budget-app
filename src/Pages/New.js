import TransNewForm from "../Components/TransNewForm";

const New = ({addTransaction}) => {
  return (
    <section className="New">
      <h2>Add a new item</h2>
      <TransNewForm addTransaction={addTransaction}/>
    </section>
  );
};

export default New;
