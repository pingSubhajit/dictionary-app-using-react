import Header from './components/Header.jsx'
import './App.css'
import {useState} from 'react'
import Search from './components/Search.jsx'
import {getDefinitionByWord} from './lib/getDefinitionByWord.js'
import WordInfo from './components/WordInfo.jsx'

function App() {
	const [searchValue, setSearchValue] = useState('')
	const [searchResult, setSearchResult] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const handleSearch = async (e) => {
		setIsLoading(true)
		const result = await getDefinitionByWord(searchValue)
		setSearchResult(result)
		setIsLoading(false)
	}

	return (
		<main>
			<Header />
			<Search searchValue={searchValue} setSearchValue={setSearchValue} onSearch={handleSearch} />
			<WordInfo definition={searchResult} loading={isLoading} />
		</main>
	)
}

export default App
