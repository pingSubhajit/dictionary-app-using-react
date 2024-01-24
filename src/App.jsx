import Header from './components/Header.jsx'
import './App.css'
import {useState} from 'react'
import Search from './components/Search.jsx'
import {getDefinitionByWord} from './lib/getDefinitionByWord.js'

function App() {
	const [searchValue, setSearchValue] = useState('')

	return (
		<main>
			<Header />
			<Search searchValue={searchValue} setSearchValue={setSearchValue} />
			<h1>Welcome to Dictionary Application using React</h1>
		</main>
	)
}

export default App
