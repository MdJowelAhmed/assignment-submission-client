import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../../components/hooks/useAuth";


const PendingAssignments = () => {
    const pendingAss = useLoaderData()
    console.log(pendingAss)
    const [item, setItem] = useState([]);
    const { user } = useAuth()

    useEffect(() => {
        if (user?.email) {
            fetch(`${import.meta.env.VITE_API_URL}/submission/${status}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setItem(data)


                });
        }
    }, [user]);


    return (
        <div>
            <div>
                {
                    item.map(p => <div key={p._id}>

                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                       
                                        <th>title</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        
                                        <td>
                                            <div className="">
                                             <h2>{p.title} </h2>
                                            </div>
                                        </td>
                                        <td>
                                           <p>{p.marks} </p>
                                        </td>
                                            <h1>{p.submit.name} </h1>
                                        <th>
                                            <Link to={`/giveMarks/${p._id}`}> <button className="btn btn-ghost btn-xs">Give Marks</button> </Link>
                                        </th>
                                    </tr>



                                </tbody>


                            </table>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default PendingAssignments;