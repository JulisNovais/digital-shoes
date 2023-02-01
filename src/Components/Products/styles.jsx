import styled from "styled-components";

export const ProductsArea = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; 

    div {
        max-width: 320px;        
        display: flex;
        justify-content: space-between;
        flex-direction: column; 

    } 

    .ImageArea{
        background: white;
        border-radius: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
   
        
    }

    .TitleArea{
        
    }

`;