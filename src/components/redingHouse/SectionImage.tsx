import styled from "styled-components";
import img from "../../images/img_1.png"
import {Container} from "../container/Container.tsx";
import {theme} from "../../styled/theme.tsx";

type PropsTypeSectionImage = {
    image?: string
    text?: string
    title?: string
}
export const SectionImage = ({image, text, title}: PropsTypeSectionImage) => {
    return (
        <Container heightMax={"50vh"} heightMin={"50vh"}>
            <Image img={image || img}><CardImg>
                <UpperCaseTest>{title || "Reeding House"} </UpperCaseTest>
                <LowText>
                    {text || "Lorem ipsum dolor sit amet dolor sit amet dolor sit amet."}
                </LowText>
            </CardImg>
            </Image>
        </Container>

    );
};
const CardImg = styled.div`
    
    top: 45%;
    left: 70%;
    position: absolute;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 910px) {
        left: 50%;
    }


`
const UpperCaseTest = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;

`
const LowText = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`
type PropsImage = {
    img: any
}
const Image = styled.div<PropsImage>`
    position: relative;
    background-image: url(${props => props.img});
    background-position: center;
    object-fit: cover;
    width: 100%;
    max-width: 1410px;
    height: 100%;
    max-height: 600px;
    @media screen and (max-width: 910px) {
        width: 100%;
        max-width: 910px;
        color: ${theme.colors.fontBrwBlack};
    }
`