import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">UseContext</Link>
                
                  <ul className="navbar-nav">
                      
                      <NavLink
                          className={({ isActive }) => `nav-link ${ isActive ? 'active' : ''}` }
                          to='/'>
                          Home
                      </NavLink>
                      
                      <NavLink
                          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                          to='/about'>
                          About
                      </NavLink>
                      
                      <NavLink
                          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                          to='/login'>
                          Login
                      </NavLink>

                </ul>
                
            </div>
        </nav>
      </>
  )
}
