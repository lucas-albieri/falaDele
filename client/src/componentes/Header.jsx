import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return ( 

    <div className="col-sm-8 col-md-10 col-lg-12">
     <nav className="header">
         

        <ul className="justify-content-center">
            <li>
                <h5>Início</h5>
            </li>
            <li>
                <h5>Quem somos?</h5>
            </li>
            <li>
                <h5>Ajuda</h5>
            </li>
            <li>
            <Link to='/login'> <h5>Sair</h5> </Link>
            </li>
                 
        </ul>
                    
            <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-light me-6 ms-4" type="submit">Search</button>
              
     </nav>

     </div>

     );
}
 
export default Header;