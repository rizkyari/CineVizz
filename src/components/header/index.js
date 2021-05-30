import './index.css';

function Header(){
    return(
        <header>
            <a href="#" className="logo">Cinevizz</a>
            <div className="search">
                <input type="text" placeholder="search"/>
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </header>
    )
}

export default Header;