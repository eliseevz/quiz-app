import React from "react"
import classes from "./MenuToggle.module.css"

const MenuToggle = props => {

    const cls = [
        classes.MenuToggle,
        "fa",
        props.isOpen ? "fa-times " + classes.open : "fa-bars"
    ]

    return (
        <i
            className={cls.join(" ")}
            onClick={props.onClick}
        />
    )
}

export default MenuToggle