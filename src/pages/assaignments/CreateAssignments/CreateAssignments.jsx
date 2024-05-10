import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateAssignments = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="h-[600px] rounded-3xl" style={{backgroundImage: 'url(https://img.freepik.com/premium-vector/abstract-blue-wave-background-transparent-wavy-lines-wave-blue-smoke-liquid_206325-2621.jpg?w=1380)'}}>
            {/*  */}
            <h2 className="text-center text-4xl font-poppins font-semibold pt-5">Create a new assignments</h2>
            <div className="flex flex-col md:flex-row gap-5 md:gap-10 p-12">
                <form className="w-2/3">
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
                            <input type="text" name="description" placeholder="Thumbnail_URL" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* level and date */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text"> assignment difficulty level</span>
                            </label>
                            <select className=" p-3 border border-blue-200 rounded-md" name="" id="">
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
                            <input type="email" name="creatorEmail" placeholder="Creator_Email" className="input input-bordered" required />
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
                    <p>dsafjlksavasdbklgvjsavn bfsdgsdldshblasdf </p>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignments;