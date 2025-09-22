import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Update = () => {

    const {id} = useParams();
    const[name,setName] = useState("");
    const[price,setPrice] = useState("");
    const[imageUrl,setImageUrl] = useState("");
    const[loading,setLoading] = useState(false)

    const navigate = useNavigate();

    useEffect(()=>{
        if(!id) return;
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`);
                    setName(res.data.product.name);
                    setPrice(res.data.product.price);
                    setImageUrl(res.data.product.image);
            } catch (error) {
                console.error(error);
                alert("Product not found");
                navigate("/");
            }
        };
        fetchProduct();
    }, [id]);

    const updateProduct = async () => {
        try {
            const res = await axios.put(`${import.meta.env.VITE_API_URL}/updateProduct/${id}`, {name,price,image:imageUrl});

                if(res.data.success) {
                    alert("Prodcut Updated Successfully");
                    setName("");
                    setPrice("");
                    setImageUrl("");
                    navigate("/");
                } else {
                    alert("Failed to update product");
                }

        } catch (error) {
            console.error(error);
            alert("Server Error")
        } finally {
            setLoading(false);
        }
    }

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-violet-800 to-cyan-900 text-white'>
      <div className='bg-cyan-900 p-6 w-96 shadow-md rounded-md'>
        <p className='text-3xl font-bold mb-4 text-center'>Update the Product</p>
        <div className='flex flex-col space-y-3 w-full'>
          <input
            onChange={(e)=>{setName(e.target.value)}}
            value={name}
           className='p-4 text-xl w-full rounded-md' type="text" placeholder='Enter name of product'/>
          <input
            onChange={(e)=>{setPrice(e.target.value)}}
            value={price}
           className='p-4 text-xl w-full rounded-md' type="text" placeholder='Enter price of product'/>
          <input 
            onChange={(e)=>{setImageUrl(e.target.value)}}
            value={imageUrl}
          className='p-4 text-xl w-full rounded-md' type="text" placeholder='Enter image url of product'/>
          <button disabled={loading} onClick={updateProduct} className='mt-5 px-4 py-2 cursor-pointer bg-violet-400 w-full rounded-lg text-sm font-bold hover:bg-violet-500 transition-colors duration-300'>
            Update the Product
          </button>
        </div>
      </div>
    </div>
  )
}

export default Update
