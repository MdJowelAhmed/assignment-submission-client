import { useEffect, useState } from "react";
import useAuth from "../../components/hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
// import { set } from "firebase/database";


const MyAttempt = () => {
    // const mySubmit=useLoaderData()
    // console.log(mySubmit)
    const [item, setItem] = useState([]);
    // console.log(item)
    const {user}=useAuth()
   

    useEffect(() => {
        if(user?.email){
            // fetch(`${import.meta.env.VITE_API_URL}/submit/${user?.email}`)
            // .then((res) => res.json())
            // .then((data) => {
            //     console.log(data)
            //     setItem(data)
            // });
            axios.get(`${import.meta.env.VITE_API_URL}/submit/${user?.email}`,{withCredentials:true})
            .then(res=>{
                setItem(res.data)
            })
        }
    }, [user]);
    console.log(item)
    return (
        <div>
           {
            item.map(p=> <div key={p._id}>
                
                <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            
                            <td>
                                <div className="flex items-center gap-3">
                                    <h2>{p.title} </h2>
                                   
                                  
                                </div>
                            </td>
                            <td>
                               <p>{p.status} </p>
                            </td>
                            <td>{p.marks} </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                       
                       
                           
                        
                    </tbody>

                </table>
            </div>
                
                 </div>)
           }
        </div>
    );
};

export default MyAttempt;