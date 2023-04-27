import React, { useEffect, useState } from 'react'
import Button from '../styleComponents/Button'
import TextInput from '../styleComponents/TextInput'
import SearchResults from './SearchResults'


const SearchBlock = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [error, setError] = useState(false)

    const [data, setData] = useState()

    useEffect(() => {
        if (searchTerm) {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
            .then(response => response.json())
            .then(data => {
              setData(data)
            }).catch(error => console.error(error))
        }
    }, [searchTerm])

    const handleOnChange = (e) => {
        setError(false)
        setSearchTerm(e.target.value)
    }

    const handleSearch = () => {
        if (searchTerm === '') {
            setError(true)
        }
    }


    return (
        <>
            <div className="mb-[45px]">
                <TextInput
                    name="search"
                    value={searchTerm}
                    onChange={handleOnChange}
                    placeholder="Search for any word..."
                    hasIcon
                    error={error}
                    errorMessage="Whoops, can't be empty..."
                >
                    <Button onClick={handleSearch}>
                        <img src="./icons/search.svg" alt="search" height="16" width="16" />
                    </Button>
                </TextInput>
            </div>
            { searchTerm && <SearchResults data={data} />}
        </>
    )
}

export default SearchBlock