import Header from './components/Header.jsx'
import './App.css'
import {useState} from 'react'
import Search from './components/Search.jsx'
import {getDefinitionByWord} from './lib/getDefinitionByWord.js'

function App() {
	const [searchValue, setSearchValue] = useState('')
	const [searchResult, setSearchResult] = useState(null)

	const handleSearch = async (e) => {
		const result = await getDefinitionByWord(searchValue)
		setSearchResult(result)
		console.log(result)
	}

	return (
		<main>
			<Header />
			<Search searchValue={searchValue} setSearchValue={setSearchValue} onSearch={handleSearch} />
			<h1 onClick={() => console.log(searchResult)}>Welcome to Dictionary Application using React</h1>
		</main>
	)
}

export default App
