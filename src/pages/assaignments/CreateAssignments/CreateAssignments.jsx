import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../components/hooks/useAuth";
// import axios from 'axios'
// import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CreateAssignments = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useAuth()
    const [marks, setMarks] = useState('');
    const [validationMessage, setValidationMessage] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()


    const handleMarksChange = (event) => {
        const newMarks = event.target.value;
        setValidationMessage('')
        if (newMarks < 30) {
            setValidationMessage('Marks should not exceed 30 Under.');
            setMarks(30);
        }
        if (newMarks > 60) {
            setValidationMessage('Marks should not allow 30 under and  60 up.');
            setMarks(60);

        } else {
            setValidationMessage('');
            setMarks(newMarks);
        }
    };

    const handleChange = (event) => {
        setSelectedDate(event.target.value);
    };



    const isPastOrToday = (dateString) => {
        const selectedDate = new Date(dateString);
        const today = new Date();

        return selectedDate <= today;
    };

    const getTomorrowDate = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        const year = tomorrow.getFullYear();
        let month = tomorrow.getMonth() + 1;
        let day = tomorrow.getDate();

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        return `${year}-${month}-${day}`;
    };

    const handleAddAssignments = async e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const thumbnail = form.thumbnail.value;
        const level = form.level.value;
        const dateInput = form.dateInput.value;
        const creatorEmail = form.creatorEmail.value;

        if (isPastOrToday(selectedDate)) {
            setError('Please select a future date.');
        } else {
            setError('');

            console.log('Form submitted successfully');
        }

        const addAssignments = {
            title, description, marks: parseInt(marks), thumbnail, level, dateInput, create: {
                creatorEmail,
                photoURL: user?.photoURL,
                name: user?.displayName,
            }
        }
        console.log(addAssignments)

        // send server 

        fetch(`${import.meta.env.VITE_API_URL}/assignment`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addAssignments)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Assignments create success!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                    form.reset()
                    navigate('/assignments')
                }
            })
    }



    return (
        <div className="lg:h-[610px] rounded-3xl" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-flow-background_1048-8740.jpg?t=st=1715449493~exp=1715453093~hmac=b3b9e254bceeec502cecd770559486a9c2e752872dbe1a28de6d149c471dd0f0&w=740)' }}>
            {/*  */}
            <Helmet>
                <title>Assignment | Create </title>
            </Helmet>
            <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-10 md:p-12 ">
                <form onSubmit={handleAddAssignments} className="md:w-2/3">
                    {/* title and description */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
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
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Marks</span>
                            </label>
                            <input type="number"
                                id="marks"
                                min="30"
                                max="60"
                                value={marks}
                                onChange={handleMarksChange} name="marks" placeholder="Marks under 60" className="input input-bordered" required />
                            <span className="text-red-600">{validationMessage}</span>
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Thumbnail_URL</span>
                            </label>
                            <input type="text" name="thumbnail" placeholder="Thumbnail_URL" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* level and date */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text"> assignment difficulty level</span>
                            </label>
                            <select className=" p-3 border border-blue-200 rounded-md" name="level" id="">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>

                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Due_Date</span>
                            </label>
                            {/* onChange={(date) => setStartDate(date)} */}
                            <input type="date"
                                id="dateInput"
                                name="dateInput"
                                value={selectedDate}
                                onChange={handleChange}
                                min={getTomorrowDate()} // Set min attribute to tomorrow's date
                                max="9999-12-31" className="p-3 border-blue-50 rounded-md" required />
                            {error && <span style={{ color: 'red' }}>{error}</span>}
                        </div>
                    </div>
                    {/* marks and thumbnail */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Creator_Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} name="creatorEmail" placeholder="Creator_Email" className="input input-bordered" required disabled />
                        </div>

                    </div>
                    <input className="btn btn-block my-5 font-poppins bg-base-300" type="submit" value="Create Assignments" />
                </form>
                <div className="md:w-1/3">
                    <div>
                        <h2 className="text-center text-2xl md:text-4xl font-poppins font-semibold pt-5">Create a new assignments</h2>
                        <p className="text-center text-sm font-poppins pt-5">Create  a web-based task management system  using  task creation, assignment, status tracking, and real-time updates</p>
                    </div>
                    <img className="text-center m-3 mx-auto rounded-full" src={user?.photoURL} alt="" />
                    <p className="text-center font-poppins text-3xl text-orange-500"> {user?.displayName} </p>
                    <p className="text-center font-poppins text-3xl text-orange-500">  </p>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignments;