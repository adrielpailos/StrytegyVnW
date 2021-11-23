import styled from 'styled-components'

export const Container = styled.section`
    height:40rem;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;

    button{
        font: 300 1.25rem / 1.25rem Soleto, sans-serif;  
        margin:1rem;
        background: gold;
        width: 12rem;
        border-radius:5px;
        height:3rem;
        border:none;
    }
`;
export const Wrap = styled.div`
    border-top:solid 1px black;
    margin:1rem;
    display:flex;
    width:90vw;
    height:33rem;
    align-items:center;
    justify-content:space-around;
`;
export const Card = styled.div`
    box-shadow: 0.35px 1px 5px 1px rgba(0,0,0,0.1222);
    display:flex;
    border-radius:10px;
    align-items:center;
    flex-direction:column;
    justify-content:space-between;
    height:90%;
    padding:1rem;
    figure{
        border:solid 1px;
        border-radius:10px;
        width:20rem;
        display:flex;
    }
    img{
        border-radius:10px;
        width:100%;
    }
    div{
        margin-top:2rem;
        width:20rem;
        height:9rem;
    }
    p{
        font: 600 1.72rem / 1.72rem Soleto, sans-serif;
    }
`;
export const CardDate = styled.span`
    width:100%;
    display: flex;
    aling-items:center;
    figure{
        border:none;
        display:flex;
        width:2.5rem;
    }
    img{
        border-radius:50%;
        width:100%;
    }
    span{
        height:3.5rem;
        margin-left:0.75rem;
        flex-direction:column;
        justify-content:space-around;
        display:flex;
    }
    h3{
        color:purple;
        font: 600 1.15rem / 1.15rem Soleto, sans-serif;
    }
    p{
        font: 300 1rem / 1rem Soleto, sans-serif;
    }
`;