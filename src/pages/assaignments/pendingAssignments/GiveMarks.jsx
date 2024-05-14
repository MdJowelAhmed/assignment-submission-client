import { useLoaderData, useParams } from "react-router-dom";


const GiveMarks = () => {
    const loadedData=useLoaderData()
    console.log(loadedData)
    const { id } = useParams()
    console.log(id)
    const marks = loadedData?.find(data=> {
        console.log(data._id)
       return data._id !==id
    })
    return (
        <div>
            {/* <h2>{details.title} </h2> */}

            give mark
        </div>
    );
};

export default GiveMarks;