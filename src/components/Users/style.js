import styled from "styled-components";

export const Container = styled.div `
    color:#fff;
    background-color: rgb(34, 37, 75.1);
    height:25rem;
    display:flex;
    justify-content:center;
    align-items:center;
    div{
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
        height:80%; 
    }
    h2{
        font: 600 3rem / 3rem Soleto, sans-serif;
    }
`;
export const Paragraph = styled.p`
    text-align:center;
    width:70%;
    font: 300 1.3rem / 1.3rem Soleto, sans-serif;
`;
export const UsersParagraph = styled.p`
    &:nth-child(1){
        font: 600 1.23rem / 1.23rem Soleto, sans-serif;
    }
    &:nth-child(2){
        font: 300 1rem / 1rem Soleto, sans-serif;
    }
`;
export const UserID = styled.span`
    width:50%;
    display: flex;
    justify-content:center;
    aling-items:center;
    figure{
        display:flex;
        width:4rem;
    }
    img{
        border-radius:50%;
        width:100%;
    }
    span{
        margin-left:0.75rem;
        flex-direction:column;
        justify-content:center;
        display:flex;
    }
`;