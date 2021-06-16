import TransEditForm from "../Components/TransEditForm";

const Edit = ({updateTransaction}) => {
  return (
    <section>
      <h1>Edit Transaction</h1>
      <TransEditForm updateTransaction={updateTransaction}/>
    </section>
  );
};

export default Edit;
