import React from "react";
import css from "../../../style/styles";

const {HeaderContainer, HeaderCss} = css

const buttonCss = {
    display: 'block',
    padding: '10px 14px 12px',
    borderRadius: '6px',
    backgroundColor: '#888',
    cursor: 'pointer',
    justifyContent: 'space-between'
}

function Head() {
    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderCss.Logo>
                    LEARNING-APPLICATION
                </HeaderCss.Logo>
                <HeaderCss.Menu>
                    <button style={buttonCss}>Главная</button>
                    <button style={buttonCss}>Статистика</button>
                    <button style={buttonCss}>Планирование</button>
                </HeaderCss.Menu>
            </HeaderContainer>
        </React.Fragment>
    );
}

export default Head;