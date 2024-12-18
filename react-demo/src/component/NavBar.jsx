import { Link } from "react-router-dom";
import AxiosGetDemo from "../AxiosGetDemo"

export default function NavBar() {
    return (
        <div className="navbar">
            <h2>The React Demos</h2>
            <div className="links">
                <Link to={"/home"} element={<AxiosGetDemo />} />
                {/* <Link to={"/sdc"} element={<AxiosGetDemo />} /> */}
                {/* <Link to={"/edc"} element={<AxiosGetDemo />} /> */}
            </div>
        </div>
    )
}
