import React from 'react';


const Guide = [{
    "type": "city",
    "title": "Paris on $10 a Day",
    "price": 18.99
  }, {
    "type": "city",
    "title": "Venice: Canals and Stuff",
    "price": 14.50
  }, {
    "type": "city",
    "title": "Visiting Hoboken: Why?",
    "price": 1.25
  }, {
    "type": "country",
    "title": "Touring Brazil's Empty Olympic Stadiums",
    "price": 13.50
  }, {
    "type": "country",
    "title": "'Murica: Only Commies Travel Abroad",
    "price": 20.00
  }, {
    "type": "country",
    "title": "Australia: Every Animal Here Can Kill You",
    "price": 18.00
  }, {
    "type": "region",
    "title": "Backpacking Europe on Two Showers a Week",
    "price": 12.48
  }, {
    "type": "region",
    "title": "Rainforests of Cental America",
    "price": 15.00
  }, {
    "type": "region",
    "title": "The Evil Genius Guide to Taking over the Tri City Area",
    "price": 13.49
  }];



  function ShowGuides() {
      let guide = Guide.map((book) => 
      <div>
        <h2 key={book.title}>{book.title}</h2>
        <h3 key={book.type}>{book.type}</h3>
        <h3 key={book.price}>{book.price}</h3>
      </div>
    );
    return(
        <div>
            <h1>New England Fall Guide</h1>
            <div>{guide}</div>
        </div>
    )
  };

  export default ShowGuides;