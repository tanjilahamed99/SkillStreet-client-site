const CreateNote = () => {

    const handleCreateNote = e => {
     e.preventDefault()
     const form = e.target
     const title = form.title.value
     const content = form.content.value

     const newNote = {title,content}

     console.log(newNote)

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
                        <input name="title" type="text" placeholder="Title" className="input input-bordered border-none w-full mt-2" />
                        <hr className="border-b border-black" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold">Content</label>
                        <textarea name="content" className="textarea textarea-bordered border-none mt-2" placeholder="Content"></textarea>
                        <hr className="border-b border-black" />
                    </div>
                    <button type="submit" className="btn btn-outline w-full ">Add Note</button>
                </form>
            </div>
        </div>
    );
};

export default CreateNote;