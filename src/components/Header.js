import classNames from 'classnames'
import React, { useState } from 'react'
import Select from 'react-select'


const Header = () => {

    const [fontFamily, setFontFamily] = useState(null);
    const [toggleDarkMode, setToggleDarkMode] = useState(document.documentElement.classList.contains('dark'))

    const fontFamilyOptions = [
            { value: 'sans-serif', label: `<span style="font-family: sans-serif">Sans Serif</span>` },
            { value: 'Lora', label: `<span style="font-family: Lora">Serif</span>` },
            { value: 'Inconsolata', label: `<span style="font-family: 'Inconsolata'">Mono</span>` },
        ]

    const handleFontFamilyChange = (selectedOption) => {
        setFontFamily(selectedOption.value);
        document.documentElement.style.setProperty('font-family', selectedOption.value)
    }

    const bodyDOM = document.getElementsByTagName('body')

    document.documentElement.classList.contains('dark')
        ? bodyDOM[0].style.setProperty('background', '#050505')
        : bodyDOM[0].style.setProperty('background', '#FFFFFF')

    const toggleTheme = () => {
        setToggleDarkMode(!toggleDarkMode)

        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark')
                localStorage.setItem('color-theme', 'dark')
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('color-theme', 'light')
            }

        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('color-theme', 'light')
            } else {
                document.documentElement.classList.add('dark')
                localStorage.setItem('color-theme', 'dark')
            }
        }
    }

    return (
        <header className="w-full flex justify-between mb-[52px]">
            <img src="./icons/book.svg" alt="book" height="36" width="32" />
            <div className="flex space-x-[26px] text-default-300 dark:text-default-10">
                <Select
                    styles={{
                        control: ({baseStyles, isFocused}) => ({
                            ...baseStyles,
                            width: 'max-content',
                            border: isFocused ? 'none' : 'none',
                            display: "flex",
                            "&:hover": {
                                backgroundColor: "transparent",
                                color: "#A445ED",
                            },
                            fontFamily: "inherit",
                            fontWeight: "bold",
                            fontSize: "18px",
                            cursor: "pointer",
                        }),
                        menu: (baseStyles) => ({
                            ...baseStyles,
                            width: "184px",
                            marginLeft: "-76px",
                            padding: "16px 24px",
                            boxShadow: toggleDarkMode ? "0px 5px 30px #A445ED" : "0px 5px 30px rgba(0, 0, 0, 0.1)",
                            borderRadius: '8px',
                            fontFamily: "inherit",
                            fontWeight: "bold",
                            fontSize: "inherit",
                            background: toggleDarkMode ? "#1F1F1F" : "#FFFFFF",
                        }),
                        option: ({baseStyles, isSelected}) => ({
                          ...baseStyles,
                          backgroundColor: isSelected && "transparent",
                          padding: '10px 0',
                          cursor: 'pointer',
                          fontFamily: "inherit",
                          fontWeight: "bold",
                          fontSize: "inherit",
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "#A445ED",
                          },
                        }),
                        singleValue: (baseStyles) => ({
                            ...baseStyles,
                            fontFamily: "inherit",
                            color: "inherit",
                        }),
                        indicatorSeparator: () => ({
                            display: 'none'
                        }),
                        dropdownIndicator: base => ({
                            ...base,
                            color: "#A445ED",
                            "&:hover": {
                                color: "#A445ED",
                            },
                        }),
                    }}
                    formatOptionLabel={function(data) {
                        return (
                            <span className={classNames(`font-${data.label}`)} dangerouslySetInnerHTML={{ __html: data.label }} />
                        )
                    }}
                    defaultValue={fontFamilyOptions[0]}
                    options={fontFamilyOptions}
                    onChange={handleFontFamilyChange}
                    value={fontFamilyOptions.find((option) => option.value === fontFamily)}
                />
                <span className="w-px h-8 bg-default-100"></span>
                <div className="flex space-x-5">
                    <button onClick={toggleTheme} id="theme-toggle" type="button" className="text-default-300 dark:text-accent hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg p-2.5">
                        { toggleDarkMode ?
                            <div  className="flex space-x-5">
                                <img src="./icons/dark_mode_purple.svg" alt="toggle dark mode" height="20" width="40" />
                                <img src="./icons/half-moon-purple.svg" alt="half moon" height="20" width="20" />
                            </div>
                            :
                            <div  className="flex space-x-5">
                                <img src="./icons/dark_mode_grey.svg" alt="toggle dark mode" height="20" width="40" />
                                <img src="./icons/half-moon.svg" alt="half moon" height="20" width="20" />
                            </div>
                        }
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header