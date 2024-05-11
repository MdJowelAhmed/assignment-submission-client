import { useLoaderData } from "react-router-dom";
import AllAss from "./AllAss";


const Assignment = () => {
    const loadedAssignment=useLoaderData()
    console.log(loadedAssignment)
    return (
        <div>
           <div>
            {
                loadedAssignment.map(assignment=> <AllAss assignment={assignment} key={assignment._id}></AllAss>)
            }
           </div>
        </div>
    );
};

export default Assignment;