import { useLoaderData } from "react-router-dom";
import AllAss from "./AllAss";


const Assignment = () => {
    const loadedAssignment=useLoaderData()
    console.log(loadedAssignment)
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-7">
            {
                loadedAssignment.map(assignment=> <AllAss assignment={assignment} key={assignment._id}></AllAss>)
            }
           </div>
        </div>
    );
};

export default Assignment;