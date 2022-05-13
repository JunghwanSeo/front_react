import {Link} from "react-router-dom";

const AppNavigator = () => {
    return <>
        <Link to={"/"} >Todo</Link>
        <br />
        <Link to={"/counter"} >Counter</Link>
        <br />
        <Link to={"/diary"} >Diary</Link>
    </>
}

export default AppNavigator;