import styled from 'styled-components'

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
    div{
        margin-left:3rem;
        display:flex;
        justify-content:center;
        flex-direction:column;
        width:45%;
       
    }
    h1{
        margin:1rem;
        font-size:4.25rem;
        width:130%;
    }
    p{
        margin:1rem;
        font-size:1.5rem;
        width:70%;
      
    }
    button{
        margin:1rem;
        width:30%;
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
        font-size:3.5rem;
        height:5rem;
    }
    p{
        height:5rem;
        font-size:1.5rem;
        width:56%;
        text-align:center;
    }
`;