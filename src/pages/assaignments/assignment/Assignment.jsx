import { useLoaderData } from "react-router-dom";
import AllAss from "./AllAss";


const Assignment = () => {
    const loadedAssignment=useLoaderData()
    console.log(loadedAssignment)
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {
                loadedAssignment.map(assignment=> <AllAss assignment={assignment} key={assignment._id}></AllAss>)
            }
           </div>
        </div>
    );
};

export default Assignment;