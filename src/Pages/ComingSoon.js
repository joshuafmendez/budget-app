import { useHistory } from "react-router-dom";

const ComingSoon = () => {
    let history = useHistory();
    return (
      <div>
        <h1>Coming Soon</h1>
        <p>We are making some adjustments to this page!</p>
        <p>Check back later!</p>
        <button onClick={history.goBack}>Back</button>
      </div>
    );
  };
  
  export default ComingSoon;