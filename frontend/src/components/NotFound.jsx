
import React from 'react'
import "../style/CardAndFilter.css";






export default function NotFound() {

  return (
    <div className="cards__item1">
    <div className="card">
      <div className="card__image card__image--river" style={{backgroundImage: `url(https://klizos.com/wp-content/uploads/funny-404-error-page-GIF-klizo-solutions.gif)` }}></div>
      <div className="card__content">
        <div className="card__title">Please Research</div>
        <p className="card__text1"> The search engine does not work, please search again with an existing city </p>
      </div>
      </div>
      
    
  </div>
  )
}
