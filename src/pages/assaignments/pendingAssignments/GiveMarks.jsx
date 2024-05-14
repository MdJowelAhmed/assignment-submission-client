import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const GiveMarks = () => {
    const loadedData = useLoaderData()
    console.log(loadedData)
    const { id } = useParams()
    const [giveMark, SetGiveMark] = useState()
    console.log(id)
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
    return (
        <div>
            <div className="bg-base-300">
                <h2>{giveMark?.title} </h2>
                <p>{giveMark?.marks} </p>
                <p>{giveMark?.submit?.submitEmail} </p>

            </div>
        </div>
    );
};

export default GiveMarks;