import classNames from 'classnames'
import React from 'react'

const Button = (props) => {

    const classes = classNames(
        props.className,
        'flex items-center justify-center',
    )

    if (props.href) {
        return <a href={props.href} className={classes} rel={props.rel} target={props.target}>
            {props.children}
        </a>
    }

    return (
        <button type="button" onClick={props.onClick} disabled={props.disabled} className={classes}>
            <span>{props.children}</span>
        </button>
    )
}

export default Button