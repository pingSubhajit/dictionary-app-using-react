import dictionaryLogo from '/dictionary.svg'
import './Header.css'

const Header = () => {
    return (
        <header data-testid='header' className='header'>
            <img src={dictionaryLogo} alt='Dictionary Logo' className='header__logo' />
        </header>
    )
}

export default Header
