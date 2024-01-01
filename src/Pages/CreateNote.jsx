import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";

const CreateNote = () => {

    const axiosPublic = useAxios()

    const date = new Date()

    const handleCreateNote = e => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const content = form.content.value
        const trash = false

        const newNote = { title, content, date ,trash}

        axiosPublic.post('/createNote', newNote)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Successful Note added",
                        icon: "success"
                    });
                    form.reset()
                }
            })

    }


    return (
        <div className="p-5">
            <h2 className="text-3xl font-medium text-center">
                Create Note
            </h2>
            <div className="my-10">
                <form onSubmit={handleCreateNote} className="flex flex-col gap-5">
                    <div>
                        <label className="text-sm font-bold">Title</label>
                        <input required name="title" type="text" placeholder="Title" className="input input-bordered border-none w-full mt-2" />
                        <hr className="border-b border-black" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Content</label>
                        <textarea required name="content" className="textarea textarea-bordered border-none mt-2" placeholder="Content"></textarea>
                        <hr className="border-b border-black" />
                    </div>
                    <button type="submit" className="btn btn-outline w-full ">Add Note</button>
                </form>
            </div>
        </div>
    );
};

export default CreateNote;