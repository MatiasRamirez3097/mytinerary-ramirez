import './App.css'
import MainLayout from './layouts/main/MainLayout'
import Index from './pages/index/Index'

function App() {

  return (
    <MainLayout className="h-screen">
      <Index></Index>
    </MainLayout>
  )
}

export default App
