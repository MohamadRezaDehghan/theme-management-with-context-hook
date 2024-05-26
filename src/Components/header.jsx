import { useThemeContext } from "../context.jsx"

const Header = () => {

    const theme = useThemeContext()
    const darkMode = theme.darkMode
    const changeTheme = ()=>{
        theme.setDarkMode(!darkMode)
    }
    
    return (
        <header className={`navbar navbar-expand ${darkMode ? 'navbar-dark bg-dark': 'bg-secondary navbar-light' } shadow-sm`}>
            <div className="container">
                <ul className="navbar-nav">
                    <li className="px-3 navbar-item">
                        <a href="#"  className='navbar-link'>صفحه اصلی</a>
                    </li>
                    <li className="px-3 navbar-item">
                        <a href="#"  className='navbar-link'>محصولات ما </a>
                    </li>
                    <li className="px-3 navbar-item">
                        <a href="#" className='navbar-link'>درباره ما</a>
                    </li>
                    <li className="px-3 navbar-item">
                        <a href="#" className='navbar-link'>ارتباط با ما</a>
                    </li>
                </ul>
                <button onClick={changeTheme} type="button" className={ `btn ${darkMode ? 'btn-light' : ' btn-dark'}`}>
                {darkMode ? 'روشن' : "تاریک" }
                </button>
            </div>
        </header>
    )
}

export default Header