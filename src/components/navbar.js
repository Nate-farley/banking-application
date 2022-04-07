import { useLocation } from 'react-router-dom'
function NavBar(){
  const location = useLocation()
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className={`nav-link ${location.pathname == '/createaccount/' ? 'text-primary' : ''}`} href="#/createaccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${location.pathname == '/deposit/' ? 'text-primary' : ''}`} href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${location.pathname == '/withdraw/' ? 'text-primary' : ''}`} href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${location.pathname == '/alldata/' ? 'text-primary' : ''}`} href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}

export default NavBar