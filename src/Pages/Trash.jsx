import Swal from "sweetalert2";
import useAllNote from "../Hooks/useAllNote";
import useAxios from "../Hooks/useAxios";

const Trash = () => {

    const [, reFetch, trash] = useAllNote()
    const axiosPublic = useAxios()

    const handleDeleteNote = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/note/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your note has been deleted.",
                                icon: "success"
                            })
                            reFetch()
                        }
                    })
            }
        })

    }

    const handleReverseNote = id => {

        axiosPublic.patch(`/trash/${id}`, { trash: false })
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Successful Note Reverse",
                        icon: "success"
                    })
                    reFetch()
                }
            })
    }


    return (
        <div className="p-5">
            <h2 className="text-3xl font-medium text-center">
                Trash
            </h2>
            <div className="my-10">
                <h2 className="text-center font-medium text-2xl">All the Deleted Note </h2>
                <div className="grid gap-10">
                    {
                        trash?.map(i => <div key={i._id} className="card  bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{i?.title}</h2>
                                <p>{i?.content}</p>
                                <div className="card-actions mt-2 w-full">
                                    <button onClick={() => handleReverseNote(i._id)} className="btn btn-outline text-green-500">Reverse</button>
                                    <button onClick={() => handleDeleteNote(i._id)} className="btn btn-outline text-red-500">Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Trash;