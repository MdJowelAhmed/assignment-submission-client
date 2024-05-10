import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateAssignments = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <h2>create assignments</h2>
            <form>
                {/* title and description */}
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                    </div>
                </div>
                {/* marks and thumbnail */}
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Marks</span>
                        </label>
                        <input type="text" name="marks" placeholder="Marks" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Thumbnail_URL</span>
                        </label>
                        <input type="text" name="description" placeholder="Thumbnail_URL" className="input input-bordered" required />
                    </div>
                </div>
                {/* marks and thumbnail */}
                <div>
                    <div className="form-control">
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Thumbnail_URL</span>
                        </label>
                        <DatePicker className=" p-3 border border-blue-200 rounded-md w-full"  selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateAssignments;