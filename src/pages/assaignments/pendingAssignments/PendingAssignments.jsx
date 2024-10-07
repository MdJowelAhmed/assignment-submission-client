import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../../components/hooks/useAuth";
import { Helmet } from "react-helmet-async";

const PendingAssignments = () => {
    const pendingAss = useLoaderData();
    const [item, setItem] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        if (user?.email) {
            fetch(`${import.meta.env.VITE_API_URL}/pending`)
                .then((res) => res.json())
                .then((data) => {
                    setItem(data);
                });
        }
    }, [user]);

    return (
        <div className="mt-20">
            <Helmet>
                <title>EduHaven | Pending</title>
            </Helmet>
            <div >
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
                            {item.map((p) => (
                                <tr key={p._id}>
                                    <td>
                                        <div>
                                            <h2>{p.title?.substring(0, 30)}... </h2>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{p.marks}</p>
                                    </td>
                                    <td>
                                        <div className="flex items-center">
                                            <h1 className="mt-3">{p.submit.name}</h1>
                                        </div>
                                    </td>
                                    <td>
                                        <Link to={`/giveMarks/${p._id}`}>
                                            <button className="btn btn-success btn-sm">Give Marks</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PendingAssignments;
