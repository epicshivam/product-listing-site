import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {

  const navigate = useNavigate();

  return (
    <div className='m-2 bg-gray-500 p-4 rounded-2xl shadow-md'>
      <div className='text-black p-4 flex flex-col items-center w-80%'>
        <img className='h-40 object-cover rounded-lg' src={product.image} alt={product.name} />
        <p className='text-2xl capitalize font-medium'>{product.name}</p>
        <p className='text-xl'>₹ {product.price}</p>
        <div className='text-white flex items-center justify-between'>
          <button onClick={()=>navigate(`/add/${product._id}`)} className='p-1 m-2 cursor-pointer bg-cyan-800 rounded-lg'>Update</button>
        <button className='p-1 m-2 cursor-pointer bg-cyan-800 rounded-lg'>Delete</button>
        </div>
        </div>
    </div>
  )
}

export default ProductCard
