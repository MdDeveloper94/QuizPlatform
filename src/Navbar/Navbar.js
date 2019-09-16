import React from 'react'
import { BrowserRouter as Router,Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
          <Router>
<nav className="navbar navbar-dark bg-dark">

    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to='/item' className="nav-link" >item</Link>
      </li>
      
    </ul>

</nav>
</Router>
</div>
    )
}
