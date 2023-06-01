import React from 'react'
import WorkerHeader from '../components/workerHeader'

const Workerlogin = () => {
    const [buttonState, setS] = useState(0);
    function make1() {
        alert("Accepted!!");
        setS(1)
    }
  return (
    <div>
      <WorkerHeader/>
      <h1 className='text-[#00afaf] text-center mt-4'>Bookings</h1>
      <div className='w-32 h-[2px] bg-[#00afaf] mt-2 mx-auto mb-6'></div>
      <div className='w-full h-[2px] mb-4 bg-gray-300'></div>
      <div className='mt-8 w-[80%] py-3 bg-[#afafaf] mx-auto px-4'>
        <div className='flex justify-between'>
            <h3>Name: Avneet</h3>
            <h3>Address: 12-B, L-pocket, Janakpuri</h3>
        </div>
        <div>
        {buttonState == 0 && <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ease-in-out duration-300 hover:shadow-lg ml-[34%]" onClick={make1}>Book</button>}
        </div>


      </div>


    </div>
  )
}

export default Workerlogin
