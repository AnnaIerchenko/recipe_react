import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

const PreviuoseSearches = () => {
  const searches = [ 'pizza', 'burger', 'cookies', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup']
  
  return (
    <div className='previous-searches section'>
    <h2>Previous Searches</h2>
    <div className='previouse-searches-container'>
      {searches.map((search, index )=> (
        <div key={index}
        style={{animationDelay: index * .2 + 's'}} className='search-item'>
          {search}
        </div>
      ))}
    </div>
    <div className="search-box">
      <input type="text" placeholder="Search..."/>
      <button className="btn">
        <FontAwesomeIcon icon={faSearch}/>
      </button>
    </div>
  </div>
  )
}

export default PreviuoseSearches