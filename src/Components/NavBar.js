import { NavLink } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/transactions">
        <div className="view-account">Budget App</div>
      </NavLink>
      <NavLink to="/transactions/new">
        <div className="new-transaction-link">New Transaction</div>
      </NavLink>
    </nav>
  );
};

export default NavBar;
