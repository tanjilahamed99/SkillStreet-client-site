import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="p-5">
            <h2 className="font-bold text-center text-3xl ">Welcome to Note Pad</h2>
            <h2 className="text-center text-sm font-extrabold">--Note Your Career--</h2>
            <div className="my-10">
                <Link to={'/createNote'}>
                    <button className="btn btn-outline text-white bg-green-500"><CiCirclePlus className="text-2xl font-extrabold"></CiCirclePlus>Add new Note</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;