import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto">
            <div className="bg-blue-500 ">
                   
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;