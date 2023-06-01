import React from 'react';
import Header from '../components/LoginHeader';
import userimage from '../assets/userimage.png';
import {AiOutlineStar} from 'react-icons/ai';
import Card from '../components/userLogin/card';
import { useState } from 'react';

const UserLogin = () => {

  const [buttonState, setS] = useState(0);
  function make1() {
    alert("Booked!!");
    setS(1)
  }

  const electricians = [
    {
      name: 'Rohan',
      away: '17',
      reviews: '2',
      rating: '3'
    },
    {
      name: 'Lokesh',
      away: '4',
      reviews: '1',
      rating: '4'
    }
  ];
  const plumbers = [
    {
      name: 'Vinay',
      away: '7',
      reviews: '3',
      rating: '3.5'
    },
    {
      name: 'Pranav',
      away: '11',
      reviews: '1',
      rating: '3.1'
    },
    {
      name: 'Viresh',
      away: '15',
      reviews: '1',
      rating: '4'
    }
  ];
  const painters = [
    {
      name: 'Sandeep',
      away: '12',
      reviews: '1',
      rating: '1'
    },
    {
      name: 'Manoj',
      away: '9',
      reviews: '2',
      rating: '4'
    },
    {
      name: 'Vikash',
      away: '6',
      reviews: '2',
      rating: '3'
    }
  ];
  
  return (
    <div>
      <Header/>
      <h1 className='text-[#00afaf] text-center mt-4'>Book Services</h1>
      <div className='w-48 h-[2px] bg-[#00afaf] mt-2 mx-auto mb-6'></div>
      <div className='w-full h-[2px] bg-gray-300'></div>
      <h1 className='ml-32 mt-4'>Electricians:</h1>
      <div className='flex justify-between w-[80%] mx-auto mt-4'>
          <div className='w-[280px] h-[380px] rounded-[40px] shadow-xl border-[7px] border-white hover:border-[#00afaf]'>
              <img src={userimage} className='mx-auto w-[200px] mt-2' alt="" />
              <h3 className='text-2xl text-center mt-2'>Raj</h3>
              <h3 className='text-2xl text-center mt-2'>5 mins away</h3>
              {buttonState == 0 && <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ease-in-out duration-300 hover:shadow-lg ml-[34%]" onClick={make1}>Book</button>}
              {buttonState == 1 && <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ease-in-out duration-300 hover:shadow-lg ml-[30%]">Booked</button>}
              <div className='flex justify-between w-[90%] mx-auto'>
                <div className='flex'>
                  <h3>5</h3>
                  <AiOutlineStar className='text-xl ml-[3px] mt-[8px]'/>
                </div>
                <p className='text-lg'>3 Reviews</p>

              </div>
          </div>
          {electricians.map((person) =>(
        <Card          
          reviews = {person.reviews}
          name = {person.name}
          away= {person.away}
          rating = {person.rating}
        />
      ))}
      </div>
      <div className='w-full h-[2px] bg-gray-300 mt-16'></div>
      <h1 className='ml-32 my-4'>Plumbers:</h1>
      <div className='flex justify-between w-[80%] mx-auto mt-4'>
      {plumbers.map((person) =>(
        <Card          
          reviews = {person.reviews}
          name = {person.name}
          away= {person.away}
          rating = {person.rating}
        />
      ))}
      </div>
      <div className='w-full h-[2px] bg-gray-300 mt-16'></div>
      <h1 className='ml-32 my-4'>painters:</h1>
      <div className='flex justify-between w-[80%] mx-auto mt-4 mb-16'>
      {painters.map((person) =>(
        <Card          
          reviews = {person.reviews}
          name = {person.name}
          away= {person.away}
          rating = {person.rating}
        />
      ))}
      </div>
      
    </div>
  )
}

export default UserLogin
