import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../../components/hooks/useAuth";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateAssignment = () => {
    const assignment = useLoaderData()
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useAuth()
    const navigate=useNavigate()
    // console.log(assignment)
    const{ _id, title, description, marks, thumbnail, level, date}=assignment

    const handleUpdateAssignments = async e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const thumbnail = form.thumbnail.value;
        const level = form.level.value;
        // const updatedEmail = form.creatorEmail.value;

        const updateAssignment = {
            title, description, marks: parseInt(marks), thumbnail, level, date: startDate, 

            // create: {
            //     creatorEmail,
            //     photoURL: user?.photoURL,
            //     name: user?.displayName,
            // }
        }
        console.log(updateAssignment)

        // send server 

        fetch(`${import.meta.env.VITE_API_URL}/assignment/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Assignments update success!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                    form.reset()
                    navigate('/assignments')
                }
            })

    }


    return (
        <div>
            <div className="h-[500px] rounded-3xl" style={{ backgroundImage: 'url(https://img.freepik.com/premium-vector/abstract-blue-light-curve-wave-luxury-design-creative-background-vector_33869-2846.jpg?w=900)' }}>
            <Helmet>
                <title>EduHaven | Update </title>
            </Helmet>
                {/*  */}
                <h2 className="text-center text-4xl font-poppins font-semibold pt-5 text-green-900">Update a new assignments</h2>
                <div className="flex flex-col md:flex-row gap-5 md:gap-10 p-12">
                    <form onSubmit={handleUpdateAssignments} className="w-2/3">
                        {/* title and description */}
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" defaultValue={title} name="title" placeholder="Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" defaultValue={description} name="description" placeholder="Description" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* marks and thumbnail */}
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Marks</span>
                                </label>
                                <input type="text" defaultValue={marks} name="marks" placeholder="Marks" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Thumbnail_URL</span>
                                </label>
                                <input type="text" defaultValue={thumbnail} name="thumbnail" placeholder="Thumbnail_URL" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* level and date */}
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text"> assignment difficulty level</span>
                                </label>
                                <select className="  p-3 border border-blue-200 rounded-md" defaultValue={level} name="level" id="">
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                                {/* <input type="text" name="marks" placeholder="Marks" className="input input-bordered" required /> */}
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Due_Date</span>
                                </label>
                                <DatePicker className=" p-3 border border-blue-200 rounded-md w-full" defaultValue={date} selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        {/* marks and thumbnail */}
                        {/* <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Creator_Email</span>
                                </label>
                                <input type="email" defaultValue={user?.email} name="creatorEmail" placeholder="Creator_Email" className="input input-bordered" required disabled />
                            </div>
                            <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Thumbnail_URL</span>
                            </label>
                            <input type="text" name="description" placeholder="Thumbnail_URL" className="input input-bordered" required />
                        </div>
                        </div> */}
                        <input className="btn btn-block my-5 font-poppins bg-base-300" type="submit" value="Update Assignments" />
                    </form>
                    {/* <div className="w-1/3">
                    <img className="text-center m-3 mx-auto rounded-full" src={user?.photoURL} alt="" />
                    <p className="text-center font-poppins text-3xl text-orange-500"> {user?.displayName} </p>
                </div> */}

                <div className="w-1/3">
                    <h2 className="text-2xl font-poppins font-semibold">Why you can Update this this Assignment??</h2>
                    <p className="text-sm mt-2 font-poppins text-white">Updating assignments can ensure they remain relevant and accurate in light of changing information. It's important to stay current with the latest developments to provide the best possible assistance and guidance. Additionally, updating assignments allows for improvements in clarity, depth, or breadth of coverage, enhancing the overall quality of the content provided.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateAssignment;