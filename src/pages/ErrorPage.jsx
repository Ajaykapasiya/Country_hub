import {NavLink ,useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const Error =  useRouteError();
    console.log(Error);
    
    return (
        <div>
            <h1>
                Oops!  An error occured.
            </h1>
            {Error && <p>{Error.data}</p>}
            <NavLink to="/">
                <button>Go Home</button>
            </NavLink>
        </div>
    )

}