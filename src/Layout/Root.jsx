import { NavLink, Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-10 h-full">
            <div className="bg-blue-500 md:w-[25%] w-full p-5 ">
                <h2 className="text-2xl text-center font-bold text-white " >Note</h2>
                <h2 className="text-sm mt-1 text-center font-bold text-white " >Note Anything</h2>
                <ul className="text-center   flex flex-col gap-3 mt-5">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-bold" : ""
                        }
                    >
                        All Notes
                    </NavLink>
                    <NavLink
                        to="/createNote"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-bold" : ""
                        }
                    >
                        Create New Note
                    </NavLink>
                    <NavLink
                        to="/trash"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-bold" : ""
                        }
                    >
                        Deleted Notes
                    </NavLink>
                </ul>
            </div>
            <div className="md:w-[75%] w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;