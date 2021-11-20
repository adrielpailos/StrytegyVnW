import styled from "styled-components";

export const Title = styled.h2 `
    height:10rem;
    display:flex;
    align-items:center;
 
    color: rgb(34, 37, 75);
    font: 500 3.4375rem Paralucent, sans-serif;
`;

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 80%;
    margin: 0px auto;
    padding: 0px 0px 7rem;
    max-width: 1440px;

`;

export const ImageBox = styled.div `
    width:70%;
`;

export const Image = styled.img `
    width: 100%;
    margin: 3rem 0p;
`;

export const List = styled.nav `
    height:30rem;
    display:flex;
    align-items:center;
    ul{
        height:70%;
        display:flex;
        justify-content:space-around;
        flex-direction:column;
        align-items:center;
    }
`;

export const Item = styled.li `
    font: 300 1.375rem / 1.875rem Soleto, sans-serif;
    color: rgb(34, 37, 75);
    text-align: center;
    &:nth-child(1){
        width:80%;
    }
    &:nth-child(3){
        width:80%;
    }
}
`;