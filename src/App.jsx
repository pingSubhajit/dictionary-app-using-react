import Header from './components/Header.jsx'
import './App.css'
import {useState} from 'react'
import Search from './components/Search.jsx'
import {getDefinitionByWord} from './lib/getDefinitionByWord.js'
import WordInfo from './components/WordInfo.jsx'

function App() {
	const [searchValue, setSearchValue] = useState('')
	const [searchResult, setSearchResult] = useState(null)

	const handleSearch = async (e) => {
		const result = await getDefinitionByWord(searchValue)
		setSearchResult(result)
	}

	return (
		<main>
			<Header />
			<Search searchValue={searchValue} setSearchValue={setSearchValue} onSearch={handleSearch} />
			<WordInfo />
		</main>
	)
}

export default App
