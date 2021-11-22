import styled from 'styled-components'

export  const Container = styled.div`
    color:  rgb(34, 37, 75.1);
`
export const GifDiv = styled.section`
    height:25rem;
    display:flex;
    background-color: rgb(34, 37, 75.1);
    align-items:center;
    justify-content:space-around;
    div{
        margin-right:8rem;
        width:23rem;
        height:15rem;
        color:white;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
    }
    h2{
        width:15rem;
        font: 600 2.25rem / 2.25rem Soleto, sans-serif;
    }
    p{
        font: 300 1.25rem / 1.25rem Soleto, sans-serif;
    }
    figure{
        margin-left:8rem;
        width:28rem;         
        display:flex;
        justify-content:;
    }
    img{
        width:100%;
        border-radius:10px;
    }
`;
export const DivIntuitive = styled.section`
    height:30rem;
    display:flex;
    align-items:center;
    figure{
        display:flex;
        justify-content:center;
        align-items:center;
        width:40%;
    }
    img{
        margin-left:5rem;
        width:70%;
    }
    div{
        height:15rem;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        width:60%;
    }
    h2{
        font-size:3rem;
        font: 700 3rem / 3rem Soleto, sans-serif;  
        width:30rem;
        margin-right:8rem;
    }
    p{
        font-size:1.5rem;
        font: 300 1.5rem / 1.5rem Soleto, sans-serif;  
        width:30rem;
        margin-right:8rem;
    }
`;
export const TeamOg = styled.section`
    height:27rem;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: rgb(34, 37, 75.1);
    color:#fff;
    div{
        display:flex;
        align-items:center;
        flex-direction:column;
        margin-bottom:5rem;
    }
    h2{
        font: 600 3.5rem / 3.5rem Soleto, sans-serif;  
        text-align:center;
        width:45rem;
        font-size:3.5rem;
    }
    p{
        margin:1rem;
        font: 300 1.5rem / 1.5rem Soleto, sans-serif;  
        text-align:center;
        width:46rem;
    }
`;