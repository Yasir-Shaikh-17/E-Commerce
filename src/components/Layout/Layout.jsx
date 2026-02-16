import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar />
        <main className='grow'>
            <Outlet />
        </main>
      <Footer />
    </div>
  )
}

export default Layout