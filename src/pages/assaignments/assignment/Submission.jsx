import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../../components/hooks/useAuth";
import Swal from "sweetalert2";


const Submission = () => {
    const loadedDetails = useLoaderData()
    const { user } = useAuth()
    const { id } = useParams()
    const details = loadedDetails.find(item => item._id == id)
    const { _id, title, description, marks, thumbnail, level, date, create } = details;

    const handleAssignmentSubmission = e => {
        e.preventDefault()
        const form = e.target;
        const file = form.file.value;
        const note = form.note.value;
        const status = 'pending';

        const submited = {
            file, note, status, title, marks, submit: {
                submitEmail: user?.email,
                name: user?.displayName,
                photoURL: user?.photoURL

            }
        }
        console.log(submited)

        fetch(`${import.meta.env.VITE_API_URL}/submission`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(submited)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Assignments Submit Success!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                    //   form.reset()
                }
            })
    }
    return (
        <div className="flex gap-5" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg)' }}>
            {/*  */}
            <div className=" text-center flex-1">
                <div><img className="h-60 w-2/3 m-4 mx-auto mt-10" src={thumbnail} alt="" /></div>
                <h2 className="text-xl font-poppins ">{title} </h2>
            </div>

            <div className="flex-1">
                <div>
                    <form onSubmit={handleAssignmentSubmission} className="p-6">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">PDF/Docs</span>
                            </label>
                            <input type="text" name="file" placeholder="Title" className="input input-bordered" required />
                        </div>

                        <div>
                            <label className="block text-xl text-gray-900 dark:text-gray-300 px-5">Note</label>

                            <textarea placeholder="Assignment Note..." name="note" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>

                            <input type="submit" value="Submission" className="btn btn-outline bg-pink-800 text-white w-full my-5" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Submission;