import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import useAllNote from "../Hooks/useAllNote";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";

const Home = () => {
    const [note, refetch] = useAllNote()
    const axiosPublic = useAxios()

    const handleDeleteNote = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You able to revert this from trash!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, trash it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/trash/${id}`, { trash: true })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Trash!",
                                text: "Your Note has been deleted.",
                                icon: "success"
                            })
                            refetch()
                        }
                    })
            }
        })

    }


    return (
        <div className="p-5">
            <h2 className="font-bold text-center text-3xl ">Welcome to Note Pad</h2>
            <h2 className="text-center text-sm font-extrabold">--Note Your Career--</h2>
            <div className="my-10">
                <Link to={'/createNote'}>
                    <button className="btn btn-outline text-white bg-green-500"><CiCirclePlus className="text-2xl font-extrabold"></CiCirclePlus>Add new Note</button>
                </Link>
                <div className="grid gap-10 ">
                    {
                        note?.map(i => <div className="card bg-base-100 shadow-xl" key={i._id}>
                            <div className="card-body">
                                <div className="flex justify-between items-center">
                                    <h2 className="card-title">{i?.title}</h2>
                                    <h2 className="text-sm font-bold">{i?.date.slice(0, 10)}</h2>
                                </div>
                                <hr className="border border-black" />
                                <p className="text-sm">{i?.content}</p>
                                <div className="card-actions mt-5">
                                    <Link to={`/updateNote/${i._id}`}>
                                        <button className="btn btn-outline text-green-600">Update</button>
                                    </Link>
                                    <button onClick={() => handleDeleteNote(i._id)} className="btn btn-outline text-red-500">delete</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;