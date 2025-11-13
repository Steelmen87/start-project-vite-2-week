import styled from "styled-components";
import photo from "../../images/photo.png"
import {theme} from "../../styled/theme.tsx";
import {Container} from "../container/Container.tsx";

export const OurFilm = () => {
    return (
        <Container>

            <StyledOurFilm>
                <BlockContent>
                    <Title>Our firm</Title>
                    <Article>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                            commodo
                            diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
                            ut
                            sem vitae risus tristique posuere.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                            commodo
                            diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
                            ut
                            sem vitae risus tristique posuere.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                            commodo
                            diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
                            ut
                            sem vitae risus tristique posuere.</p>
                        <CardUser>
                            <Image img={photo}/>
                            <Card>
                                <Name>Stephen Collier</Name>
                                <Profesion>Senior Partner</Profesion>
                            </Card>
                        </CardUser>
                    </Article>

                </BlockContent>
            </StyledOurFilm>
        </Container>
    );
};
const Card = styled.span`
    display: flex;
    flex-direction: column;
    padding: 30px;
`
const Name = styled.span`
    font-weight: 400;
    font-size: 17px;
    line-height: 26px; 

`
const Profesion = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 14px; 
    color: ${theme.colors.fontBrw};
`
type PropsImage = {
    img: any
}
const Image = styled.img<PropsImage>`
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    width: 100%;
    max-width: 86px;
    height: 84px;
    border-radius: 50%;


`
const Article = styled.div`
    max-width: 500px;
    width: 100%;

    p {
        margin-bottom: 10px;
    }
`
const CardUser = styled.div`
    display: flex;
    align-items: center;
    max-width: 500px;
    width: 100%;
    @media screen and (max-width: 910px) {
        padding-top: 20px;
        margin-bottom: -60px;
    }

`
const Title = styled.h4`
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: 0;
    color: rgba(64, 62, 59, 1);
`
const StyledOurFilm = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px 0;

    width: 100%;
    //border: 1px solid;
`
const BlockContent = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 758px;
    width: 100%;
    @media screen and (max-width: 910px) {
        flex-direction: column;
        margin-top: -60px;
        padding-bottom: 20px;
    }
    //border: 1px solid;
`