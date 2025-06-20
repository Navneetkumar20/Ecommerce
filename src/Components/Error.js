import { useRouteError } from "react-router";

const Error =()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>oops! something Wrong
            <h1>{err.status}:{err.statusText}</h1>
        </div>
    )
}
export default Error;