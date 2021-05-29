import './index.css';

function Header(){
    return(
        <header>
            <a href="#" className="logo">MyLogo</a>
            <ul className="navigation">
                <li><a href="#">Home</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Latest</a></li>
            </ul>
            <div className="search">
                <input type="text" placeholder="search"/>
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </header>
    )
}

export default Header;