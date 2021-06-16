import Transactions from "../Components/Transactions";

const Index = ({transactions}) => {
    return (
        <section>
            <h1>Bank Account: Total</h1>
            <Transactions transactions={transactions}/>
        </section>
    )
}

export default Index;