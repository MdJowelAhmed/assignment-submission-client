import { useLoaderData } from "react-router-dom";
import AllAss from "./AllAss";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../components/hooks/useAuth";


const Assignment = () => {
    const loadedAssignment = useLoaderData()
    console.log(loadedAssignment)
    const [item, setItem] = useState('Easy');
    const [filter, setFilter] = useState("")
   
    // const { user } = useAuth()
    // const [difficulty, setDifficulty] = useState('Easy');
    const [assignments, setAssignments] = useState(loadedAssignment);

   

     useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/assignment?filter=${filter}}`)
        .then(res =>res.json())
        .then(data=>{
            console.log(data)
            // setFilter(data)
        })
    
      }, [filter])
      console.log(filter)


    // console.log(loadedAssignment.create.creatorEmail)

    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}/assignment/${loadedAssignment._id}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // console.log(data)
    //             setItem(data)


    //         });
    // }, [item,loadedAssignment._id]);


    const handleDelete = id => {
        console.log(id)
        // if( loadedAssignment.create?.creatorEmail !== user?.email  ){
        // 	alert('delete for not parmied')
        // }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/assignment/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        setItem(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = item.filter(p => {
                                console.log(p?._id)
                                return p?._id !== id
                            })
                            setItem(remaining)
                            
                        }
                    })

            }
        });
    }
    return (
        <div>
            <div className="text-center mb-10">
                <label >Select Difficulty Level:</label>
                <select  onChange= {e => {
                setFilter(e.target.value)}}  value={filter} id="filter"  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-7">
                {
                    assignments.map(assignment => <AllAss assignment={assignment} key={assignment._id} handleDelete={handleDelete}></AllAss>)
                }
            </div>
        </div >
    );
};

export default Assignment;