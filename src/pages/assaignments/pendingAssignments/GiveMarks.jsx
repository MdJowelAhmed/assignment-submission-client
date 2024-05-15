import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const GiveMarks = () => {
    const loadedData = useLoaderData()
    // console.log(loadedData)
    const { id } = useParams()
    const [giveMark, SetGiveMark] = useState()
    const navigate=useNavigate()
    // console.log(id)
    // const marks = loadedData?.find(data=> {
    //     console.log(data._id)
    //    return data._id !==id
    // })

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/submitted/${id}`)
            .then(res => {
                SetGiveMark(res.data)
            })
    }, [id])
    console.log(giveMark)

    const handleMarks = e => {
        e.preventDefault()
        const form = e.target;
        const mark = parseFloat(form.mark.value);
        if (mark > parseFloat(giveMark.marks))
            return toast.error('Not allow total marks up')
        const feedback = form.feedback.value;
        const givenMarks = { mark, feedback, status: 'completed' }
        // console.log(givenMarks)

        axios.patch(`${import.meta.env.VITE_API_URL}/submitted/${id}`, givenMarks)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    toast.success('Marks give Successfully!')
                    navigate('/attempt')
                }

            })
    }
    return (
        <div className="flex flex-col md:flex-row gap-10 m-4 mx-auto" >
            <div className="bg-base-20 shadow-xl max-w-lg rounded-lg mx-auto p-10 space-y-2">
                <h2 className=" font-poppins text-xl text-rose-400 "> Title :{giveMark?.title} </h2>

                <iframe src={giveMark?.file} title="Pdf/Docs File"></iframe>

                {/* <p className=" font-poppins">Pdf/Docs File: <a href=''><span className="font-poppins text-xl text-blue-600">{giveMark?.file}</span></a> </p> */}

                <div >
                    <p className=" font-poppins">Note: <span className="font-poppins text-xl text-green-600"> {giveMark?.note}</span> </p>
                   
                </div>
                <div className="flex justify-between px-">
                    <p className=" font-poppins">Examinee Name : <span className="font-poppins text-xl text-orange-600">{giveMark?.submit?.name}</span> </p>
                    <p className=" font-poppins">Marks: <span className="font-poppins text-xl text-indigo-500">{giveMark?.marks} </span></p>
                </div>

            </div>
            <div className="bg-base-20 shadow-xl max-w-md rounded-lg mx-auto p-7">
                <form onSubmit={handleMarks} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  font-poppins ">Give Marks</span>
                        </label>
                        <input type="text" name="mark" placeholder="Give Marks" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-poppins">Feedback</span>
                        </label>
                        <textarea name="feedback" className="textarea textarea-primary" placeholder="Feedback"></textarea>
                        {/* <input type="text" name="feedback" placeholder="Feedback" className="input input-bordered" required /> */}
                    </div>

                    <input type="submit" value="Submit" className="btn btn-block bg-green-500 my-3" />
                </form>
            </div>
        </div>
    );
};

export default GiveMarks;