import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const { setSearchTerm } = useGlobalContext();

  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSbmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSbmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input id='name' ref={searchValue} onKeyDown={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
