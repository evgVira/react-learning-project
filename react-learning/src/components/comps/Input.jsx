import React from "react";
import css from "..//../style/form"

const {InputContainer} = css;

const Input = (props) => {

    const {placeholder, action, inputValue} = props;

    return (
        <React.Fragment>
            <InputContainer type={"text"} placeholder={placeholder}
                            value={inputValue}
                            onChange={(event) => {
                                const userValue = event.target.value
                                action(userValue)
                            }}>
            </InputContainer>
        </React.Fragment>
    )
}

export default Input;