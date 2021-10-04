import './Header.css'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    return ( 

    <div className="col-sm-8 col-md-10 col-lg-12">
     <nav className="header">
         

        <ul className="justify-content-space-around">
            
            <div className="logo"><div className="riot-logo"></div></div>
            <li>
            <Link to='/home'> <h5>Inicio</h5> </Link>
            </li>
            <li>
               <HashLink to="/home/#campeoes"> <h5>Campeões</h5> </HashLink>
            </li>
            <li>
                <h5>Ajuda</h5>
            </li>
            <li>
            <Link to='/login'> <h5>Sair</h5> </Link>
            </li>
                 
        </ul>
                    
            <input class="form-control mr-2" type="search" placeholder="Browse your champion" aria-label="Search" />
            <button class="btn btn-outline-light me-6 ms-4" type="submit">Search</button>
              
     </nav>

     </div>

     );
}
 
export default Header;