import styled from "styled-components";

const css = {
    FormContainer: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        min-height: 60px;
        width: 600px;
        height: auto;
        border-radius: 8px;
        margin: 40px auto 40px;
        box-shadow: 0px 0px 3px grey;
        padding: 20px`,
    InputContainer: styled.input`
        display: block;
        position: relative;
        width: 100%;
        height: 40px;
        outline: none;
        border: none;
        background-color: whitesmoke;
        padding-left: 14px;
        border-radius: 4px;
        margin-bottom: 10px`,
    ButtonContainer: styled.button`
        display: block;
        position: relative;
        width: 220px;
        height: 44px;
        line-height: 42px;
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
        background-color: #195`
}

export default css;