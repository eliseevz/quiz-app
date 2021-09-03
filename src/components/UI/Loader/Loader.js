import React from "react"
import classes from "./Loader.module.css"

const Loader = props => {
    console.log(classes)
    return (
        <div className={classes["lds-ellipsis"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader