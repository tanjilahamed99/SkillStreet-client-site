import { NavLink, Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto flex gap-10 h-[100vh]">
            <div className="bg-blue-500 w-[25%] p-5">
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
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-bold" : ""
                        }
                    >
                        Deleted Notes
                    </NavLink>
                </ul>
            </div>
            <div className="w-[75%]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;