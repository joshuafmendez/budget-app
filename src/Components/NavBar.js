import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            {/* <NavLink exact to="/">Home</NavLink> */}
            <NavLink to="/transactions">Budget App</NavLink>
            <NavLink to="/transactions/new">New Transaction</NavLink>
        </nav>
    )
}

export default NavBar;