import {Container} from "../container/Container.tsx";
import styled from "styled-components";
import {theme} from "../../styled/theme.tsx";
import imgPen from "../../images/pen.png"
import imgHouse from "../../images/house.png"
import imgBuilding from "../../images/bildin.png"

const process = [{
    img: imgPen,
    title: "Sketching",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae tempor leo iaculis."
},
    {
        img: imgHouse,
        title: "Finalizing",
        text: "Adipiscing elit. Nulla ut tristique libero. Nulla vitae tempor leo iaculis luctus sapien ac arcu tempor, vitae."
    },
    {
        img: imgBuilding,
        title: "Building",
        text: "Nulla ut tristique libero. Lorem ipsum ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae lorem ipsum dolor leo iaculis."
    }
]
export const OurProcess = () => {
    return (
        <Container heightMax={"63vh"} heightMin={"116vh"}>
            <MainBlock>
                <NameSection>Our Process</NameSection>
                <Slogon>How we do what we do.</Slogon>
                <BlockProcess>
                    {process.map((el,index) =>
                        <Process key={index}>
                            <ProcessImg img={el.img}/>
                            <Title>{el.title}</Title>
                            <p>{el.text}</p>
                        </Process>)
                    }
                </BlockProcess>
            </MainBlock>
        </Container>
    );
};
type ProcessImgProps = {
    img:any
}
const ProcessImg = styled.img<ProcessImgProps>`
    background-image: url(${props => props.img});
    background-position: center;
    object-fit: cover;
    width: 100%;
    max-width: 117px;
    height: 100%;
    max-height: 102px;
    margin-bottom: 15px;
`
const Title = styled.span`
    margin-bottom: 10px;
`
const Process = styled.div`
    width: 285px;
    display: flex;
    flex-direction: column;
    @media screen and (min-height: 790px) {
        height: 50%;
    }
`
//<Container heightMax={"50vh"} heightMin={"50vh"}>
const MainBlock = styled.div`
    margin-top: 100px;
    max-width: 1200px;
    width: 100%;
    @media screen and (min-height: 790px) {
        height: 100%;
    }
   
`
const NameSection = styled.div`
    text-transform: uppercase;
    color: ${theme.colors.fontBrw};
    display: flex;
    justify-content: center;
`
const Slogon = styled.div`
    text-transform: uppercase;
    color: ${theme.colors.fontBlack};
    font-weight: 400;
    font-size: 39px;
    line-height: 42px;
    text-align: center;
`
const BlockProcess = styled.div`
    margin-top: 40px;
    max-width: 1168px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    //height: 100%;
    gap: 30px;
    @media screen and (min-height: 790px) {
        height: 100%;
        max-height: 560px;
        gap: 0;
    }
`