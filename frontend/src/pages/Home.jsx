import {Link} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {

  const [productsData , setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState();

  useEffect(()=> {
    const fetchProducts = async () => {
      
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/`);
        const data = res.data;
        
        if(data.success && data.products.length > 0 ) {
          setProductsData(data.products);
        } else {
          setMessage(data.message || "something went wrong" );
        }

      } catch (error) {
        setMessage(`Server Error ❌`)
      }

    };

    fetchProducts();
  }, []);

  return (
    <div className='flex flex-col gap-5 justify-center items-center h-screen bg-linear-to-r from-violet-800 to-cyan-900 text-white'>
        <p className='font-bold text-4xl absolute top-40'>Current Products 🚀</p>
        
        
        {productsData.length === 0 ? (<p className='font-bold text-2xl'>No Products found 😢 <Link to="/add" className='italic underline hover:text-cyan-200'>Create Product</Link></p>) : ( 
          
          <div>Hello</div>
          
          )}

    </div>
  )
}

export default Home
