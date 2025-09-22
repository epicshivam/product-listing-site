import {Link} from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {

  const {id} = useParams();
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
      } finally {
        setLoading(false);
      }

    };

    fetchProducts();
  }, []);


    const handleDelete = async (id) => {
    if(!window.confirm("Are you sure you want to delete this product ? ")) return;

    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteProduct/${id}`);

      if(res.data.success) {
        alert("Product Deleted Successfully");
        setProductsData(prev => prev.filter(p=>p._id!=id));
      } else {
          alert("Failed to delete product");
      }

    } catch (error) {
        console.error(error);
        alert("Server error while deleting product");
    }
  }

  return (
    <div className='flex gap-5 justify-center h-screen bg-linear-to-r from-violet-800 to-cyan-900 text-white'>  
        {productsData.length === 0 ? (<p className='font-bold text-2xl'>No Products found 😢 <Link to="/add" className='italic underline hover:text-cyan-200'>Create Product</Link></p>
        ) : ( 
          <>
          
            <div className='w-screen px-10 py-5 flex flex-col items-center'>
              <div className='flex justify-center items-center gap-2 mb-10'>
                <div className='w-[30%] h-1 bg-gray-500'></div>
                <p className='text-2xl italic font-bold'>Products</p>
                <div className='w-[30%] h-1 bg-gray-500'></div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-2 w-full max-w-5xl '>
                {productsData.map((p)=>(
                  <ProductCard key={p._id} product={p} onDelete={handleDelete}/>
                ))}
              </div>
            </div>
          
          </>
          )}

    </div>
  )
}

export default Home
