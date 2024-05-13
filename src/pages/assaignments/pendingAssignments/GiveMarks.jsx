import { useLoaderData, useParams } from "react-router-dom";


const GiveMarks = () => {
    const loadedData=useLoaderData()
    console.log(loadedData)
    const { id } = useParams()
    console.log(id)
    const marks = loadedData.find(data=> data._id !==id)
    return (
        <div>
            {/* <h2>{details.title} </h2> */}
        </div>
    );
};

export default GiveMarks;