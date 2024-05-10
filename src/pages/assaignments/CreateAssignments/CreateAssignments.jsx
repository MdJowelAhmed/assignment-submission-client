

const CreateAssignments = () => {
    return (
        <div>
            <h2>create assignments</h2>
            <div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                </div>
            </div>
        </div>
    );
};

export default CreateAssignments;