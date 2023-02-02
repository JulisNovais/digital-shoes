import styled from "styled-components";

export const ProductsArea = styled.div`
    display: flex;
    gap: 24px;
    width: 100vw;
    flex-wrap: wrap;
    align-items: center;    
    margin: 0 100px;

    div {
        max-width: 321px;        
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        
    } 
    .ImageArea{
        background: white;
        width: 292px;
        height: 321px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }       
`;

export const TitleArea = styled.h2`
      font-size: 20px;
      font-weight: 700;
      line-height: 36px;
      color: #474747;

`;

