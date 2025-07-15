import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const Error =  useRouteError();
    console.log(Error);
    
    return <h1>Error page</h1>
}