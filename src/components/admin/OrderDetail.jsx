import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder, orderDelete } = context;
    let globalIndex = 0;
    // console.log(getAllOrder)
    return (
        <div>
            <div>
                <div className="py-5">
                
                    <h1 className=" text-xl text-black font-bold">All Order</h1>
                </div>

                
                <div className="w-full overflow-x-auto rounded-lg">
                    <table className="w-full text-center text-white   rounded-md shadow-xl shadow-black">
                       <thead className=" bg-black text-white text-center rounded-lg">
                            <tr>
                                <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    S.No.
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Order Id
                                </th>

                                <th scope="col"
className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Image
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Title
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Category
                                </th>

                                <th scope="col"
                                   className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Price
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Quantity
                                </th>

                                <th scope="col"
                                   className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Total Price
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Status
                                </th>

                                <th scope="col"
                                   className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Name
                                </th>

                                <th scope="col"
                                   className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Address
                                </th>

                                <th scope="col"
                                   className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Pincode
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Phone Number
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Email
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Date
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Action
                                </th>


                            </tr>
                            </thead>
                            <tbody>
                            {getAllOrder.map((order) => {
                                console.log(order)
                                return (
                                    <>
                                        {order.cartItems.map((item, index) => {
                                            const { id, productImageUrl, title, category, price, quantity } = item
                                            
                                            globalIndex += 1;
                                            return (
                                                <tr key={index} className="text-black">
                                                    <td className="h-14 px-6 py-2 text-md text-slate-500 first-letter:uppercase ">
                                                        {globalIndex}
                                                    </td>

                                                    <td className="h-14 px-6 py-2 text-md text-slate-500 first-letter:uppercase ">
                                                        {id}
                                                    </td>

                                                    <td className="h-14 px-6 py-2 text-md text-slate-500 first-letter:uppercase ">
                                                        <img src={productImageUrl} alt="img" />
                                                    </td>

                                                    <td className="h-14 px-6 py-2 text-md text-slate-500 first-letter:uppercase ">
                                                        {title}
                                                    </td>

                                                    <td className="h-14 px-6 py-2 text-md text-slate-500 first-letter:uppercase ">
                                                        {category}
                                                    </td>

                                                    <td className="h-14 px-6 py-2 text-md text-slate-500 first-letter:uppercase ">
                                                        ₹{price}
                                                    </td>

                                                    <td className="h-14 px-6 py-2 text-md text-slate-500 first-letter:uppercase ">
                                                        {quantity}
                                                    </td>

                                                    <td className="h-14 px-6 py-2 text-md text-slate-500 first-letter:uppercase ">
                                                        ₹{price * quantity}
                                                    </td>

                                                    <td className="h-14 px-6 py-2 text-md text-slate-500 first-letter:uppercase ">
                                                        {order.status}
                                                    </td>

                                                    <td className="h-14 px-6 py-2 text-md text-slate-500 first-letter:uppercase ">
                                                        {order.addressInfo.name}
                                                    </td>

                                                    <td className="h-14 px-6 py-2 text-md text-slate-500 first-letter:uppercase ">
                                                        {order.addressInfo.address}
                                                    </td>

                                                    <td className="h-14 px-6 py-2 text-md text-slate-500 first-letter:uppercase ">
                                                        {order.addressInfo.pincode}
                                                    </td>

                                                    <td className="h-14 px-6 py-2 text-md text-slate-500 first-letter:uppercase ">
                                                        {order.addressInfo.mobileNumber}
                                                    </td>

                                                    <td className="h-14 px-6 py-2 text-md text-slate-500 first-letter:uppercase ">
                                                        {order.email}
                                                    </td>

                                                    <td className="h-14 px-6 py-2 text-md text-slate-500 first-letter:uppercase ">
                                                        {order.date}
                                                    </td>

                                                    <td onClick={()=> orderDelete(order.id)} className="h-12 px-6 text-md transition duration-300  stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">
                                                        Delete
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
