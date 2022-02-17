import React from 'react'

function SearchForm({ search, onSearchChange }) {
    return (
        <div className="search-form">
            <form>
                <input
                    value={search}
                    onChange={onSearchChange}
                    name="search"
                    placeholder="Ülke ara..."
                />
            </form>
        </div>
    )
}

export default SearchForm