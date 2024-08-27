import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../../components/hooks/useAuth";
import { Helmet } from "react-helmet-async";


const PendingAssignments = () => {
    const pendingAss = useLoaderData()
    console.log(pendingAss)
    const [item, setItem] = useState([]);
    const { user } = useAuth()

    useEffect(() => {
        if (user?.email) {
            fetch(`${import.meta.env.VITE_API_URL}/pending`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setItem(data)


                });
        }
    }, [user]);


    return (
        <div>
            <Helmet>
                <title>Assignment | Pending </title>
            </Helmet>
            <div>
                {
                    item.map(p => <div key={p._id}>

                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>

                                        <th>Title</th>
                                        <th>Marks</th>
                                        <th>Examinee Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>

                                        <td>
                                            <div className="">
                                                <h2>{p.title?.substring(0, 30)}... </h2>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{p.marks} </p>
                                        </td>
                                        <div className="flex items-center">
                                            <h1 className="mt-3">{p.submit.name} </h1>
                                        </div>
                                        <th>
                                            <Link to={`/giveMarks/${p._id}`}> <button className="btn btn-success btn-sm">Give Marks</button> </Link>
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