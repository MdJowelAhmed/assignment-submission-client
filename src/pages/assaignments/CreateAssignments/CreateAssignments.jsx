import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../components/hooks/useAuth";
// import axios from 'axios'
// import toast from "react-hot-toast";
import Swal from "sweetalert2";

const CreateAssignments = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user}=useAuth()
    
    const handleAddAssignments=async e=>{
        e.preventDefault()
        const form=e.target;
        const title=form.title.value;
        const description=form.description.value;
        const marks=form.marks.value;
        const thumbnail=form.thumbnail.value;
        const level=form.level.value;
        const creatorEmail=form.creatorEmail.value;
        
        const addAssignments={
            title,description,marks:parseInt(marks),thumbnail,level, date:startDate,create:{
                creatorEmail,
                photoURL:user?.photoURL,
                name:user?.displayName,
            }
        }
        console.log(addAssignments)

        // send server 
        
        fetch(`${import.meta.env.VITE_API_URL}/assignment`,{
            method: "POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(addAssignments)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data. insertedId){
                Swal.fire({
                    title: "Assignments create success!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
                  form.reset()
            }
        })
      
    }
    return (
        <div className="h-[600px] rounded-3xl" style={{backgroundImage: 'url(https://img.freepik.com/premium-vector/abstract-blue-wave-background-transparent-wavy-lines-wave-blue-smoke-liquid_206325-2621.jpg?w=1380)'}}>
            {/*  */}
            <h2 className="text-center text-4xl font-poppins font-semibold pt-5">Create a new assignments</h2>
            <div className="flex flex-col md:flex-row gap-5 md:gap-10 p-12">
                <form onSubmit={handleAddAssignments} className="w-2/3">
                    {/* title and description */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* marks and thumbnail */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Marks</span>
                            </label>
                            <input type="text" name="marks" placeholder="Marks" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Thumbnail_URL</span>
                            </label>
                            <input type="text" name="thumbnail" placeholder="Thumbnail_URL" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* level and date */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text"> assignment difficulty level</span>
                            </label>
                            <select className=" p-3 border border-blue-200 rounded-md" name="level" id="">
                                <option value="easy">easy</option>
                                <option value="medium">medium</option>
                                <option value="hard">hard</option>
                            </select>
                            {/* <input type="text" name="marks" placeholder="Marks" className="input input-bordered" required /> */}
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Due_Date</span>
                            </label>
                            <DatePicker className=" p-3 border border-blue-200 rounded-md w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                     {/* marks and thumbnail */}
                     <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Creator_Email</span>
                            </label>
                            <input type="email"defaultValue={user?.email} name="creatorEmail" placeholder="Creator_Email" className="input input-bordered" required disabled />
                        </div>
                        {/* <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Thumbnail_URL</span>
                            </label>
                            <input type="text" name="description" placeholder="Thumbnail_URL" className="input input-bordered" required />
                        </div> */}
                    </div>
                    <input className="btn btn-block my-5 font-poppins bg-base-300" type="submit" value="Create Assignments" />
                </form>
                <div className="w-1/3">
                    <img className="text-center m-3 mx-auto rounded-full" src={user?.photoURL} alt="" />
                    <p className="text-center font-poppins text-3xl text-orange-500"> {user?.displayName} </p>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignments;