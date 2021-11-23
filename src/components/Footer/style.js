import styled from 'styled-components'

export  const Container = styled.div`
    color:rgb(34,37,75.1);
`
export const Collab = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
    height:30rem;
    background:rgba(245,246,250,1);
    span{
        width:50rem;
        height:20rem;
        display:flex;
        align-items:center;
        justify-content:space-around;
        flex-direction:column;
    }
    h2{
        font: 600 3rem / 3rem Soleto, sans-serif;
    }
    p{
        font: 300 1.5rem / 1.5rem Soleto, sans-serif;
        text-align:center;
        width:48.5rem;
    }
    
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
export const FooterHub = styled.div`
    background:rgba(245,246,250,1);
    display:flex;
    align-items:center;
    justify-content:center;
    height:30rem;
    border:solid red;
    span{
        padding:1rem;
        border-top:solid 1px rgba(30,30,30,0.1);
        width:90%;
        display:flex;
        justify-content:space-between;
    }
`;
export const About = styled.div`
    width:30rem;
    height:15rem;
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    h2{
        font: 600 1.5rem / 1.5rem Soleto, sans-serif;
    }
`;
export const Paragraph = styled.p`
    font: 300 1rem / 1rem Soleto, sans-serif;
    &:nth-child(2){
        width: 100%;
        height:4rem;
    }
    &:nth-child(4){
        font: 300 0.81rem / 0.81rem Soleto, sans-serif;  
        width: 13rem;
        height:2rem;
    }
`;
export const CopyDiv = styled.div`
    display:flex;
    align-items:center;
    figure{
        width:3rem;
    }
    p{
        margin:0.5rem;
        font: 300 1.2rem / 1.2rem Soleto, sans-serif;
    }
    img{
        width:100%;
        border-radius:50%;
    }
`;
export const Media = styled.div`
    display:flex;
    justify-content:space-around;
    width:20rem;
    nav{
        display:flex;
        flex-direction:column;
    }
    h2{
        font: 600 1.4rem / 1.4rem Soleto, sans-serif;
        height:3rem;
    }
    button{
        color:rgba(0,0,0,0.5);
        border:none;
        background:none;
        height:2rem;
        display:flex;
        align-items:center;
        fontl: 300 1.16rem / 1.16rem Soleto, sans-serif;
    }
`;