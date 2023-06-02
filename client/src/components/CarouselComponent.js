import { useState, useEffect } from 'react';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from 'react-router-bootstrap';
import "./CarouselComponent.css"
import back from "../assets/gray.jpg"

function CarouselComponent() {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    fetch('https://swiftfix-backend.onrender.com/api/getreview')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        console.log("here", data.reviews);
        setReviewsList(data.reviews);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  // console.log(reviewsList)

  // let reviewsList = [
  //   { _id: '64777c2d7c12c2bfbacd9b63', email: 'qweq@gmail.com', review: 'sdadqwqe12314', __v: 0 },
  //   { _id: '64777c8a7c12c2bfbacd9b65', email: 'qweq21313@gmail.com', review: 'sdadqwqe12314', __v: 0 },
  //   { _id: '64778bc1bb4c3e7a33c11989', email: 'avneetsingh843@gmail.com', review: 'Best review ever made', __v: 0 },
  //   { _id: '647870a517051c76d70ba525', email: 'a@a.com', review: 'vghjnm,', __v: 0 },
  //   { _id: '647886aba0c1e2dedc9679ec', email: 'kaif@gmail.com', review: '12345665234561234512345', __v: 0 }
  // ];

  function display(reviewsList) {
    return (
      <Carousel>
        {reviewsList.map((review) => (
          <Carousel.Item>
            <img
              style={{ height: '25rem', opacity: '0.5' }}
              crossOrigin='anonymous'
              className="d-block w-100"
              src={back}
              alt="Second slide"
            />
            <Carousel.Caption>

              <div key={review._id}>
                <h1 className='' style="font-size:3rem font-weight:500">{review.review}</h1>
                <h2 className='' style="font-size:2.5rem font-weight:500">{review.email}</h2>
              </div>

            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }

  useEffect(() => {
    console.log(reviewsList);
  }, [reviewsList]);

  const cursorP = {
    cursor: "pointer"
  };

  return (
    reviewsList.length > 0 ? display(reviewsList) : 'Loading...'
  );
}

export default CarouselComponent;
