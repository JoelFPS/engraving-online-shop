import { Outlet } from "react-router-dom";
function Admin()
{
    return (
            <div className="App">
                <div className="content">
                    <Outlet />
                </div>
            </div>
    )
}

export default Admin;