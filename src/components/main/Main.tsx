import styled from "styled-components";
import image from '../../../src/images/IMAGE.png'
import {Container} from "../container/Container.tsx";

export const Main = () => {
    return (
        <Container heightMax={"460px"} >
        <StyledMain>
            <StyledContentBlock>
                <StyledContentItem>
                    <ContentBlock>
                        <LogoStyled>Wishbone+Partners</LogoStyled>
                        <StyledTitle>The home <br /> of beautiful architecture.</StyledTitle>
                        <Text>
                            <p>We are an architecture firm with a
                                focus on beautiful but functional design.
                                At its heart, we believe design is about usability and accessibility — these
                                are the guiding principles
                                for our work. Read more about our previous projects, our process and our team below.</p>
                        </Text>
                        <ReadMoreStyled>Read more</ReadMoreStyled>
                    </ContentBlock>
                </StyledContentItem>
                <Image img={image}/>
            </StyledContentBlock>
        </StyledMain>
        </Container>
    );
};
const ReadMoreStyled = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    

`
const StyledTitle = styled.h1`
    font-weight: 400;
    font-size: 64px;
    line-height: 70px;
    letter-spacing: 0;
    color: rgba(27, 26, 26, 1);
    width: 100%;
    max-width: 418px;
`
const Text = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    max-width: 510px;

`
const LogoStyled = styled.p`
    text-transform: uppercase;
    width: 100%;
    max-width: 200px;
`
const StyledMain = styled.section`
    width: 100%;
    max-width: 1440px;
    //border: 1px solid;
    //height: 100vh;
    background-color: rgba(236, 231, 228, 1);
`
const ContentBlock = styled.section`
    //border: 1px solid;
    width: 100%;
    max-width: 600px;

    ${LogoStyled} {
        padding-left: 40px;
        margin-top: 20px;

    }

    ${StyledTitle} {
        padding-left: 40px;
        margin-bottom: 20px;
        margin-top: 0;
    }

    ${Text} {
        padding-left: 40px;
        padding-right: 50px;
    }

    ${ReadMoreStyled} {
        margin: 20px 130px ;
    }
`
const StyledContentBlock = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    max-height: 70vh;
    @media screen and (max-width: 910px) {
        flex-direction: column;
        align-items: center;
        height: 90vh;
        /*${LogoStyled}{
            margin-top: 20px;
        }*/
    }
    //flex-wrap: wrap;
    //max-height: 100vh;
`
const StyledContentItem = styled.div`
    width: 100%;
    max-width: 720px;
    display: flex;
    justify-content: center;
    align-items: center;

`
type PropsImage = {
    img:any
}
const Image = styled.img<PropsImage>`
    background-image: url(${props => props.img});
    background-position: center;
    object-fit: cover;
    width: 100%;
    max-width: 720px;
    height: 100%;
    max-height: 720px;
    @media screen and (max-width: 910px) {
        width: 100%;
        max-width: 840px;
        margin-top: -20px;
    }
`