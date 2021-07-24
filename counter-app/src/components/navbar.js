const Navbar = ({ totalCounters }) => {
    return (
<nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#d">
                    Navbar
                    <span className="badge badge-pill badge-secondary">{totalCounters}</span>
  </a>
</nav>
        
     );
}
 
export default Navbar;