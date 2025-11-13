import styled from "styled-components";
import mobile from "../../images/menu-icon.png"
import {Container} from "../container/Container.tsx";

export const Header = () => {
    return (
        <Container>
            <StyledHeader>
                <StyledLogotype>Wishbone<span>+Partners</span></StyledLogotype>
                <MenuMobile img={mobile}/>
                <StyledMenu>
                    <StyledItems>Projects</StyledItems>
                    <StyledItems>About</StyledItems>
                    <StyledItems>News</StyledItems>
                    <StyledItems>Team</StyledItems>
                    <StyledItems>Team</StyledItems>
                    <StyledItems>Contact</StyledItems>
                    <StyledItemsBtn as="button">Get template</StyledItemsBtn>
                </StyledMenu>
            </StyledHeader>
        </Container>
    );
};
type PropsImage = {
    img: any
}
const MenuMobile = styled.img<PropsImage>`
    background-image: url(${props => props.img});
    background-position: center;
    object-fit: cover;
    width: 100%;
    max-width: 36px;
    height: 100%;
    max-height: 20px;
    display: none;
    @media screen and (max-width: 910px) {
        display: block;
    }

`
const StyledHeader = styled.header`
    height: 90px;
    //border: 1px solid;
    width: 100%;
    max-width: 1220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;

    background-color: rgba(255, 255, 255, 1);
    //
    //margin-left: 120px;
    //margin-right: 120px;

`
const StyledLogotype = styled.div`
    font-size: 24px;
    font-weight: normal;

    span {
        font-weight: bold;

    }
`
const StyledMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    height: 50px;
    width: 584px;
    //border: 1px solid;
    padding: 0;
    @media screen and (max-width: 910px) {
        display: none;
    }


`
const StyledItems = styled.li`
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0%;
`
const StyledItemsBtn = styled(StyledItems)`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: .4px;
    color: rgba(255, 255, 255, 1);
    padding: 10px 20px;
    background-color: rgba(27, 26, 26, 1);
    border-radius: 14px;
`