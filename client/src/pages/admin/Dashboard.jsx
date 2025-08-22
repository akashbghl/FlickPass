import React, { useEffect, useState } from 'react'
import { ChartLineIcon, CircleDollarSignIcon, PlayCircleIcon, StarIcon, UsersIcon } from 'lucide-react'
import { dummyDashboardData } from '../../assets/assets'
import BlurCircle from '../../components/BlurCircle'
import Loader from '../../components/Loader'
import { dateFormat } from '../../lib/dateFormat'
import { useNavigate } from 'react-router-dom'
import Title from '../../components/admin/Title'

const Dashboard = () => {

  const navigate = useNavigate()
  const currency = import.meta.env.VITE_CURRENCY
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  })

  const [loading, setLoading] = useState(true)
  const dashboardCards = [
    { title: 'Total Bookings', value: dashboardData.totalBookings || "0", icon: ChartLineIcon },
    { title: 'Total Revenue', value: currency + dashboardData.totalRevenue || "0", icon: CircleDollarSignIcon },
    { title: 'Active Shows', value: dashboardData.activeShows.length || "0", icon: PlayCircleIcon },
    { title: 'Total Users', value: dashboardData.totalUser || "0", icon: UsersIcon },
  ]

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData)
    setLoading(false)
  }
  useEffect(() => {
    fetchDashboardData()
  }, [])

  return !loading ? (
    <div className='p-4'>
      <Title text1='Admin' text2='Dashboard'/>
      <BlurCircle left='250px' top='30px' />
      <BlurCircle left='150px' top='430px' />
      <BlurCircle left='750px' top='430px' />

      {/* Dashboard Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
        {dashboardCards.map((item, index) => (
          <div key={index} className='flex items-center justify-between w-full rounded-lg border border-primary/70 bg-primary/20 px-4 py-5'>
            <div className='flex flex-col gap-1'>
              <h1 className='text-sm md:text-base font-medium'>{item.title}</h1>
              <p className='text-lg font-semibold truncate'>{item.value}</p>
            </div>
            <item.icon className='w-6 h-6 md:w-8 md:h-8 text-primary' />
          </div>
        ))}
      </div>

      {/* Active Movies */}
      <h1 className='mt-12 text-lg font-medium'>Active Movies</h1>
      <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {dashboardData.activeShows.map((show, index) => (
          <div key={index}
            onClick={() => { navigate(`/movies/${show.movie.id}`) }}
            className='flex flex-col rounded-lg bg-primary/20 transform hover:scale-105 transition-all cursor-pointer'>
            <img src={show.movie.backdrop_path} alt="movie" className='rounded-t-lg h-48 object-cover w-full' />
            <div className='border border-t-0 px-4 py-3 rounded-b-lg border-primary/30'>
              <p className='text-gray-100 font-medium truncate'>{show.movie.title}</p>
              <div className='flex justify-between w-full text-sm md:text-base'>
                <p>{currency}{show.showPrice}</p>
                <p className='flex gap-1 items-center'>
                  <StarIcon className='w-4 h-4 text-primary' />
                  {show.movie.vote_average}
                </p>
              </div>
              <p className='mt-2 text-xs md:text-sm text-gray-400'>{dateFormat(show.showDateTime)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Loader />
  )
}

export default Dashboard
