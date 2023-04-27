import classNames from 'classnames'
import React from 'react'

const Typography = (props) => {

    const classes = classNames(
        props.classNames,
        props.variant === 'h1' && 'text-16',
        props.variant === 'h2' && 'text-6',
        props.variant === 'h3' && 'text-5',
        props.variant === 'body-medium' && 'text-[18px]',
        props.variant === 'body-small' && 'text-[14px]',
    )

  return (
    <>
        { props.variant === 'h1' && <h1 className={classes}>{props.children}</h1> }
        { props.variant === 'h2' && <h2 className={classes}>{props.children}</h2> }
        { props.variant === 'h3' && <h3 className={classes}>{props.children}</h3> }
        { props.variant === 'body-medium' && <p className={classes}>{props.children}</p> }
        { props.variant === 'body-small' && <p className={classes}>{props.children}</p> }
    </>
  )
}

export default Typography