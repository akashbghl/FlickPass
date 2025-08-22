import { useState } from 'react'
import { assets } from '../assets/assets'
import { Menu, Search, TicketPlus, X,} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react'


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useUser()
    const { openSignIn } = useClerk()
    const navigate = useNavigate()
    return (
        <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 backdrop-blur-xs'>
            <Link to='/'>
                <img src={assets.logo} alt="" width='138px' />
            </Link>
 
            {/* desktop menu */}
            <ul className='hidden md:flex items-center justify-center gap-8 border border-gray-600 py-3 px-8 rounded-full backdrop-blur-lg bg-black/20'>
                <Link onClick={()=>scrollTo(0,0)} to='/' className='cursor-pointer hover:text-gray-300'>Home</Link>
                <Link onClick={()=>scrollTo(0,0)} to='/movies' className='cursor-pointer hover:text-gray-300'>Movies</Link>
                <Link onClick={()=>scrollTo(0,0)} to='/' className='cursor-pointer hover:text-gray-300'>Theatres</Link>
                <Link onClick={()=>scrollTo(0,0)} to='/' className='cursor-pointer hover:text-gray-300'>Releases</Link>
                <Link onClick={()=>scrollTo(0,0)} to='/favourite' className='cursor-pointer hover:text-gray-300'>Favourites</Link>
            </ul>

            <div className='flex items-center gap-4'>
                <Search className='text-lg hidden md:flex' />
                {
                    !user ?
                        (
                            <button className='bg-red-500 hover:bg-red-600 px-8 py-1.5 rounded-full cursor-pointer'
                            onClick={openSignIn}>
                                Login
                            </button>
                        ):
                        (
                            <UserButton>
                                <UserButton.MenuItems >
                                    <UserButton.Action label='My-Bookings' labelIcon = {<TicketPlus width={15}/>} onClick={()=>{navigate('/my-bookings')}} />
                                </UserButton.MenuItems>
                            </UserButton>
                        )
                }

                {/* hamburger */}
                <div className='md:hidden z-50'>
                    {menuOpen ? (
                        <X
                            className="w-7 h-7 cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                        />
                    ) : (
                        <Menu
                            className="w-7 h-7 cursor-pointer"
                            onClick={() => setMenuOpen(true)}
                        />
                    )}
                </div>

            </div>
            {/* mobile menu */}
            <div className={`fixed top-0 left-0 h-screen w-full bg-black/85 backdrop-blur-md py-16 flex flex-col items-center cursor-pointer gap-6 text-white z-40 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
                }`}>

                <ul className='flex flex-col justify-center gap-8 '>
                    <Link onClick={() => { scrollTo(0,0); setMenuOpen(false) }} to='/'      >Home</Link>
                    <Link onClick={() => { scrollTo(0,0); setMenuOpen(false) }} to='/movies'>Movies</Link>
                    <Link onClick={() => { scrollTo(0,0); setMenuOpen(false) }} to='/'      >Theatres</Link>
                    <Link onClick={() => { scrollTo(0,0); setMenuOpen(false) }} to='/'      >Releases</Link>
                    <Link onClick={() => { scrollTo(0,0); setMenuOpen(false) }} to='/favourite'>Favourites</Link>
                </ul>
            </div>

        </div>
    )
}

export default Navbar