import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const ProductDetail = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProduct, getAllProductFunction } = context;
    // console.log(getAllProduct)

   
    const navigate = useNavigate();

   
    const deleteProduct = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'products', id))
            toast.success('Product Deleted successfully')
            getAllProductFunction();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    return (
        <div>
            <div className="py-5 flex justify-between items-center">
               
                <h1 className=" text-xl text-black font-bold">All Product</h1>
            
                <Link to={'/addproduct'}>
                    <button className="px-5 py-2 bg-black text-white border  rounded-lg">Add Product</button>
                </Link>
            </div>

           
            <div className="flex justify-center relative top-20">
                {loading && <Loader />}
            </div>

           
            <div className="w-full overflow-x-auto mb-5 rounded-lg">

            <table className="w-full  text-center rounded-xl">
  <thead className=" bg-black text-white text-center rounded-lg">
    <tr>
      <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">S.No.</th>
      <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">Image</th>
      <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">Title</th>
      <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">Price</th>
      <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">Category</th>
      <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">Date</th>
      <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">Action</th>
      <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">Action</th>
    </tr>
  </thead>
  <tbody>
    {getAllProduct.map((item, index) => {
      const { id, title, price, category, date, productImageUrl } = item;
      return (
        <tr key={index} className={`text-black ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} shadow-md py-4`}>
          <td className="h-14 py-6 px-6 text-md text-slate-500 ">
            {index + 1}.
          </td>
          <td className="h-12 px-6 text-md text-slate-500 first-letter:uppercase ">
            <div className="flex justify-center">
              <img className="w-20 rounded-lg" src={productImageUrl} alt="" />
            </div>
          </td>
          <td className="h-12 px-6 text-md text-slate-500 first-letter:uppercase ">
            {title}
          </td>
          <td className="h-12 px-6 text-md text-slate-500 first-letter:uppercase ">
            ₹{price}
          </td>
          <td className="h-12 px-6 text-md text-slate-500 first-letter:uppercase ">
            {category}
          </td>
          <td className="h-12 px-6 text-md text-slate-500 first-letter:uppercase ">
            {date}
          </td>
          <td onClick={() => navigate(`/updateproduct/${id}`)} className="h-12 px-6 text-md text-green-500 cursor-pointer ">
            Edit
          </td>
          <td onClick={() => deleteProduct(id)} className="h-12 px-6 text-md text-red-500 cursor-pointer ">
            Delete
          </td>
        </tr>
      );
    })}
  </tbody>
</table>


            </div>
        </div>
    );
}

export default ProductDetail;
