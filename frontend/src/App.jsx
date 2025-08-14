import {Outlet} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      
      <main className='min-h-screen w-11/12  max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default App
