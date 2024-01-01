import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
import useAllNote from "../Hooks/useAllNote";


const UpdateNote = () => {

    const { id } = useParams()
    const axiosPublic = useAxios()
    const [note, setNote] = useState()
    const [,refetch] = useAllNote()

    useEffect(() => {
        axiosPublic.get(`/note/${id}`)
            .then(res => {
                setNote(res.data)
            })
    }, [axiosPublic, id])


    const date = new Date()

    const handleUpdateNote = e => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const content = form.content.value
        const newNote = { title, content, date }
        axiosPublic.patch(`/updateNote/${id}`, newNote)
            .then(res => {
                if (res.data.modifiedCount> 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Successful Note Updated",
                        icon: "success"
                    })
                    refetch()
                }
            })

    }




    return (
        <div className="p-5">
            <h2 className="text-3xl font-medium text-center">
                Update Note
            </h2>
            <form onSubmit={handleUpdateNote} className="flex flex-col gap-5 py-10">
                <div>
                    <label className="text-sm font-bold">Title</label>
                    <input defaultValue={note?.title} required name="title" type="text" placeholder="Title" className="input input-bordered border-none w-full mt-2" />
                    <hr className="border-b border-black" />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-bold">Content</label>
                    <textarea defaultValue={note?.content} required name="content" className="textarea textarea-bordered border-none mt-2" placeholder="Content"></textarea>
                    <hr className="border-b border-black" />
                </div>
                <button type="submit" className="btn btn-outline w-full ">Update Note</button>
            </form>
        </div>
    );
};

export default UpdateNote;