import { useState } from 'react'
import CountryList from './CountryList'
import SearchForm from "./SearchForm"
import "./styles.css"

const App = () => {
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className="App">
            <h1>React Dersleri</h1>
            <SearchForm search={search} onSearchChange={handleChange} />
            <CountryList search={search} />
        </div>
    )
}

export default App