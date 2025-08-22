import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import { ArrowRight, ClockIcon } from 'lucide-react'
import isoTimeFormat from '../lib/isoTimeFormat';
import BlurCicle from '../components/BlurCircle'
import screenImage from '../assets/screenImage.svg'
import toast from 'react-hot-toast'

const SeatLayout = () => {

  const groupRows = [["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"]]

  const { id, date } = useParams()
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null)

  const navigate = useNavigate()

  const getShow = () => {
    const show = dummyShowsData.find(show => show._id === id)
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData
      })
    }
  }

  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast('Please Select time first')
    }
    if (!selectedSeats.includes(seatId) && selectedSeats.length > 4) {
      return toast('You can only select 5 seats')
    }
    setSelectedSeats(prev => prev.includes(seatId) ? prev.filter(seat => seat !== seatId) : [...prev, seatId])

  }
  const renderSeats = (row, count = 9) => (
    <div key={row} className='flex gap-2 mt-2'>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {
          Array.from({ length: count }, (_, i) => {
            const seatId = `${row}${i + 1}`
            return (
              <button key={seatId} onClick={() => { handleSeatClick(seatId) }}
                className={`h-8 w-8 rounded border border-primary/60 cursor-pointer ${selectedSeats.includes(seatId) && 'bg-primary text-white'}`}>
                {seatId}
              </button>
            )
          })
        }

      </div>

    </div>
  )

  useEffect(() => {
    getShow()
  }, [])

  return (
    <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-30'>
      {/* Available Timings */}
      <div className='w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30'>
        <p className='text-lg font-semibold px-6'>Available Timings</p>
        <div className='mt-5 space-y-1'>
          {show && show.dateTime && show.dateTime[date] ? (
            show.dateTime[date].map((item) => (
              <div key={item.time}
                onClick={() => setSelectedTime(item)}
                className={`flex items-center gap-2 px-6 md:max-w-36 py-2 rounded-r-md cursor-pointer ${selectedTime?.time === item.time ? 'bg-primary text-white' : 'hover:bg-primary/20'}`}>
                <ClockIcon className="w-4 h-4" />
                <p className="text-sm">{isoTimeFormat(item.time)}</p>
              </div>
            ))
          ) : (
            <p className="px-6 text-sm text-gray-400">No timings available</p>
          )}

        </div>
      </div>

      {/* SeatLayout */}
      <div className='relative flex-1 flex flex-col items-center max-md:mt-16'>
        <BlurCicle top='-100px' left='-100px' />
        <BlurCicle bottom='0px' right='0px' />
        <h1 className='text-2xl font-semibold mb-4'>Select Your Seats</h1>
        <img src={screenImage} alt="screen" />
        <p className='text-xs text-gray-400 mb-6'>SCREEN THIS WAY</p>

        <div className='flex flex-col items-center mt-10 text-xs text-gray-300'>
          {/* First Row */}
          <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
            {groupRows[0].map(row => renderSeats(row))}
          </div>

          {/* Other 4 rows in Grid  */}
          <div className='grid grid-cols-2 gap-11'>
            {groupRows.slice(1).map((group, index) => (
              <div key={index}>
                {group.map(row => renderSeats(row))}
              </div>
            ))}
          </div>

          <button 
          onClick={()=>{navigate('/my-bookings'); scrollTo(0,0)}}
          className='mt-15 text-sm rounded-full bg-primary hover:bg-primary-dull px-6 py-2 cursor-pointer flex items-center justify-center gap-2'>
            Proceed to Checkout
            <ArrowRight strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SeatLayout
