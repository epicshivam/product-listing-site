import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center h-screen bg-linear-to-r from-violet-800 to-cyan-900 text-white'>
        <p className='font-bold text-4xl'>Current Products 🚀</p>
        <p className='font-bold text-2xl'>No Products found 😢 <Link to="/add" className='italic underline hover:text-cyan-200'>Create Product</Link></p>
    </div>
  )
}

export default Home
