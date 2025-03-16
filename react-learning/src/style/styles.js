import styled from 'styled-components'

const css = {
    HeaderContainer: styled.header`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 80px;
        background-color: #223;
        padding: 0px 10px;
    `,
    FooterContainer: styled.footer`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100%;
        height: 80px;
        background-color: #335;
    `,
    HeaderCss: {
        Logo: styled.div`
            font-size: 30px;
            color: #598;
        `,
        Menu: styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            position: relative;
        `
    }
}

export default css;