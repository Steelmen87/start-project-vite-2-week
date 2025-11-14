import styled from "styled-components";
type PropsType = {
    heightMax?:string
    heightMin?:string
    position?:string
}
export const Container = styled.div<PropsType>`
    max-width: 1440px;
    width: 100%;
    padding: 0 15px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
   
    height: ${props=>props.heightMax || "100%"};
    @media screen and (max-width: 910px) {
        height: ${props=>props.heightMin || "100%"};
    }

`
//height: 100${props=>props.height || "vh"};