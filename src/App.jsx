import { useEffect } from 'react'
import './App.css'
import Router from './Router'
import { useDispatch } from 'react-redux'
import { authenticate } from './redux/actions/usersActions'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authenticate())
    }, [])
    return (
        <Router />
    )
}

export default App
