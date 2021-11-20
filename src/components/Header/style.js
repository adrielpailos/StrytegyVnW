import styled from 'styled-components'

export  const Container = styled.div`
    color:  rgb(34, 37, 75.1);
`
export const NavHeader = styled.div`
    width: 100%;
    height: 5rem;
    background-color: #fff;
    opacity: 0.9;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ImageLogo = styled.img`
    width: 10rem;
    margin:5rem;
`;

export const BtnsInfo = styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;
    margin: 0.5rem;
    font-size:1rem;
    width: 5rem;
    height:3rem;
    font: 300 1rem / 1rem Soleto, sans-serif;  
    &:nth-child(3) {
        background: rgb(255, 235, 151);
        width: 8rem;
        height:3rem;
    }
    &:nth-child(4) {
        border: solid 1px #000;
        border-radius: 50%;
        font-size: 10px;
        width: 28px;
        height: 28px;
        margin-right:5rem;
    }
`;
export const HeaderHub = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:55rem;
`;
export const Hubtop = styled.div`
    width:95%;
    height:70%;
    display:flex;
    margin-left:4rem;
    figure{
        display:flex;
        align-items:center;
        justify-content:center;
    }
    img{
        width:95%;
    }
    div{
        margin-left:3rem;
        display:flex;
        justify-content:center;
        flex-direction:column;
        width:45%;
       
    }
    h1{
       margin-bottom:2rem;
        font: 700 4.25rem / 4.25rem Soleto, sans-serif;  
        width:130%;
    }
    p{
        font: 300 1.5rem / 1.5rem Soleto, sans-serif;  
     
        width:70%;
      
    }
    button{
        font: 300 1.25rem / 1.25rem Soleto, sans-serif;  
        margin-top:1rem;
        width:30%;
        background: gold;
        width: 14rem;
        border-radius:5px;
        height:4rem;
        border:none;
    }
`;
export const HubBottom = styled.div`
    width:100%;
    height:30%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h2{
        font: 600 3.5rem / 3.5rem Soleto, sans-serif; 
        height:5rem;
    }
    p{
        height:5rem;
        font: 300 1.5rem / 1.5rem Soleto, sans-serif; 
        width:56%;
        text-align:center;
    }
`;