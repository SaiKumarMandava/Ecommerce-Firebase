import { useContext } from "react";
import myContext from "../../context/myContext";

const UserDetail = () => {
    const context = useContext(myContext);
    const { getAllUser } = context;
    return (
        <div>
            <div>
                <div className="py-5 flex justify-between items-center">
                  
                    <h1 className=" text-xl text-black font-bold">All User</h1>
                </div>

               
                <div className="w-full overflow-x-auto rounded-lg">
                    <table className="w-full text-center text-whiterounded-md shadow-xl shadow-black" >
                       <thead className=" bg-black text-white text-center rounded-lg">
                            <tr>
                                <th scope="col"
                                   className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    S.No.
                                </th>

                                <th scope="col"
                                  className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Name
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Email
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Uid
                                </th>

                                <th scope="col"
                                   className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                   Role
                                </th>

                                <th scope="col"
                                   className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold">
                                    Date
                                </th>

                            </tr>
                            </thead>
                            <tbody>
                            {
                                getAllUser.map((value, index) => {
                                    return (
                                        <tr key={index} className={`text-black ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} shadow-md py-4`}>
                                            <td
                                               className="h-14 py-6 px-6 text-md text-slate-500 ">
                                                {index + 1}
                                            </td>

                                            <td className="h-12 px-6 text-md text-slate-500 first-letter:uppercase ">
                                                {value.name}
                                            </td>

                                            <td className="h-12 px-6 text-md text-slate-500 first-letter:uppercase ">
                                                {value.email}
                                            </td>

                                            <td className="h-12 px-6 text-md text-slate-500 first-letter:uppercase ">
                                                {value.uid}
                                            </td>

                                            <td className="h-12 px-6 text-md text-slate-500 first-letter:uppercase ">
                                                {value.role}
                                            </td>

                                            <td className="h-12 px-6 text-md text-slate-500 first-letter:uppercase ">
                                                {value.date}
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserDetail;
