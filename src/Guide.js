import React from 'react';
import { Col, Card, CardTitle, CardText, CardDeck, CardSubtitle, CardBody }  from 'reactstrap';
import './App.css';


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

    return(
        <div className="d-flex flex-wrap container">
        <CardDeck>
            {Guide.map((book) => {
                console.log(book);
                return(
                    <Col sm="4">
                        <Card body inverse style={{ backgroundColor: '#C67458', borderColor: '#333' }}>
                            <CardBody>
                                <CardTitle><strong>{book.title}</strong></CardTitle>
                                <CardSubtitle>{book.type}</CardSubtitle>
                                <CardText>${book.price}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ) 
                }
            )}
            </CardDeck>
        </div>
    )
  };

  export default ShowGuides;