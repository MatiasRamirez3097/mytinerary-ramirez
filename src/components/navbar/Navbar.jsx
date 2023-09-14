import { useSelector } from 'react-redux'
import { Anchor } from '../'
import { useState } from 'react'

const Navbar = ({ links }) => {
    const [nav, setNav] = useState(false)
    const { user } = useSelector(store => store.usersReducer)
    const showNav = () => setNav(!nav)

    return (
        <nav className="bg-black">
            <div className="max-w-screen-xl flex flex-wrap flex-row items-center justify-between mx-auto p-3 text-white">
                <p className="text-3xl font-bold underline text-white">My Tinerary</p>
                <button onClick={showNav} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={!nav ? "hidden w-full md:block md:w-auto" : "w-full md:block md:w-auto"}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {Object.keys(user).length > 0 &&
                            <>
                                <li>
                                    <img className='w-5 m-0 rounded-full' src={user.photo} alt='user_photo'></img>
                                </li>
                                <li>
                                    <p>{user.name}</p>
                                </li>
                            </>
                        }
                        {
                            links.map((item, i) => {
                                return (Object.keys(user).length > 0 && item.text == 'Sign Up') ||
                                    (Object.keys(user).length > 0 && item.text == 'Sign In') ||
                                    (Object.keys(user).length == 0 && item.text == 'Logout') ? null
                                    : (<Anchor
                                        action={item.action ? item.action : null}
                                        url={item.url ? item.url : null}
                                        text={item.text}
                                        key={i}
                                    />)
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar