import React from 'react'
import classNames from 'classnames'

const TextInput = (props) => {

    const containerClasses = classNames(props.hasIcon && 'flex justify-between items-center w-full',
        props.error && 'border-error dark:border-error',
        'bg-default-50 py-5 px-6 rounded-2xl border border-transparent focus-within:border-accent dark:bg-default-800 caret-accent')

    const inputClasses = classNames(props.className,
        props.hasIcon && 'mr-4','bg-inherit w-full text-xl font-bold placeholder:opacity-75 focus:outline-none dark:text-default-10')


    return (
        <>
            <div className={containerClasses}>
                <input
                    type="text"
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    className={inputClasses}
                    error={props.$error ? props.$error : undefined}
                />
                { props.hasIcon &&
                    <span>{props.children}</span>
                }
                {

                }
            </div>
            { props.error &&
                <span className="text-error mt-2">{props.errorMessage}</span>
            }
        </>
    )
}

export default TextInput