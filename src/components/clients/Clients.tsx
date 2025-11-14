import {Container} from "../container/Container.tsx";
import styled from "styled-components";
import {theme} from "../../styled/theme.tsx";
import one from "./../../images/Hill.png"
import dss from "./../../images/Combined-Shape.png"
import dss1 from "./../../images/Combined-Shape_0.png"
import dss2 from "./../../images/Combined-Shape_1.png"

const objectImg = [one, dss, dss1, dss2]
export const Clients = () => {
    return (
        <Container>
            <ClientsBlock>
                <TextBlock>
                    <TitleLitl>prior clients</TitleLitl>
                    <Title>Happy customers.</Title>
                    <Description>
                        Morbi neque ex, condimentum dapibus congue et,
                        vulputate ut ligula. Vestibulum sit amet urna
                        turpis. Mauris euismod elit et nisi ultrices,
                        ut faucibus orci tincidunt.</Description>
                </TextBlock>
                <ImagesBlock>
                    {objectImg.map((el, index) => <Images key={index} img={el}/>)}
                </ImagesBlock>
            </ClientsBlock>
        </Container>
    );
};
const  TitleLitl = styled.h3`
    color: ${theme.colors.secondaryBg};
    text-transform: uppercase;
    
`
const  Title = styled.h2`
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color: ${theme.colors.fontWhite};
    padding-bottom: 14px;
`
const  Description = styled.p`
    width: 100%;
    max-width: 450px;

    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: rgba(236, 231, 228, 1);
`
const ImagesBlock = styled.div`
    display: flex;
    flex-wrap: wrap;

    width: 432px;
    row-gap: 70px;
    column-gap: 172px;
    margin: 20px; 
`
type PropsImage = {
    img?: any
}
const Images = styled.img<PropsImage>`
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    width: 128px;
    height: 78px;
    
    //width: 100%;
    //max-width: 100px;
    //height: 100%;
    //max-height: 100px;
    /* @media screen and (max-width: 910px) {
         width: 100%;
         max-width: 840px;
         margin-top: -20px;
     }*/
`
const TextBlock = styled.div`
    margin: 20px;
`
const ClientsBlock = styled.div`
    
    max-width: 1410px;
    width: 100%;
    background-color: ${theme.colors.fontBrwBlack};
    
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 70px;

`