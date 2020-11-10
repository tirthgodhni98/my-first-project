import React from "react"
import Hello from "../Hello/Hello";

function Welcome(props){
    console.log(props);
    return (
        <>
        <Hello city={props.user.city} />
        <h1>Hello {props.user.name}</h1>
        </>
    )
}

export default Welcome