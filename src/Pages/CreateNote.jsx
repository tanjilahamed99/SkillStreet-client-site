import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import { useState } from "react";

const CreateNote = () => {

    const axiosPublic = useAxios()
    const date = new Date()
    const [contentValid, SetContentValid] = useState('')
    const [titleValid, SetTitleValid] = useState('')

    const handleCreateNote = e => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const content = form.content.value
        const trash = false

        if (title.length > 40 || title.length < 10 ) {
            SetTitleValid('title minimum 10 word and  max in 40 words')
            return
        }
        else if(content.length > 500){
            SetContentValid('Content limited in 500 words')
            return
        }

        const newNote = { title, content, date, trash }
        SetContentValid('')
        SetTitleValid('')
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
                        <h2 className="text-red-500">{titleValid}</h2>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Content</label>
                        <textarea required name="content" className="textarea textarea-bordered border-none mt-2" placeholder="Content"></textarea>
                        <hr className="border-b border-black" />
                        <h2 className="text-red-500">{contentValid}</h2>
                    </div>
                    <button type="submit" className="btn btn-outline w-full ">Add Note</button>
                </form>
            </div>
        </div>
    );
};

export default CreateNote;