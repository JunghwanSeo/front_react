import "../css/App.css"
import {useAuth0} from "@auth0/auth0-react";

function TodoHome() {
    const {loginWithRedirect, logout, user, isAuthenticated} = useAuth0();

    return (
            <div className="App">
                <h1>OAuth0 react</h1>
                <button onClick={() => loginWithRedirect()}>Login</button>
                <button onClick={logout}>Logout</button>
                <h3>user is {isAuthenticated ? "Logged in" : "Not logged in"}</h3>
                <h4>{user}</h4>
            </div>
    );
}

export default TodoHome;