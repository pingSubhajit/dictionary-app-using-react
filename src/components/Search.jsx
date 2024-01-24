import searchIcon from '/searchIcon.svg'
import './Search.css'

const Search = ({searchValue, setSearchValue, onSearch}) => {
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div data-testid="search" className='search'>
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
                placeholder='Search for a word'
                className='search__input'
            />
            <button type="submit" className='search__button' onClick={onSearch}>
                <img src={searchIcon} alt='Search icon' className='search__button__icon' />
            </button>
        </div>
    )
}

export default Search
