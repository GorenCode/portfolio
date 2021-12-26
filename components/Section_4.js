import styled from "styled-components";
import { colors, images} from '../constants/style';


const Section_4 = () => {
    return (
        <Container>
            <ContainerImage>
               <SomeImageCode1 src={images.codeCover1} /> 
            </ContainerImage>
            <Title>
                And I am always looking to
                <TitleBig>
                    learn new things 
                    <TitleMove>
                        and
                    </TitleMove>
                    create new amazing projects
                </TitleBig>
            </Title>
            <ContainerImage2>
              <SomeImageCode2 src={images.codeCover2} />   
            </ContainerImage2>
        </Container>
    )
}

export default Section_4;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgba(56, 67, 97, 0.05);
    height: 600px;
    justify-content: center;

    overflow: hidden;

    padding: 0px 120px 0px 140px;

    @media (max-width: 440px) {
        flex-direction: column;
        padding: 0px 0px 0px 0px;
        height: 70vh;
    }

`;

const Title = styled.div`
    align-self: center;
    color: black;
    font-size: 16px;
    text-align: center;
    color: ${colors.primary};

    position: absolute;
`;

const TitleBig = styled.div`
    font-size: 42px;
    font-family: 'Playfair Display', serif;
    font-weight: bold;

    @media (max-width: 440px) {
        font-size: 32px;
    }
`;

const TitleMove = styled.div`
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
`;


const ContainerImage = styled.div`
    @media (max-width: 440px) {
        display: contents;
    }
   
`;

const ContainerImage2 = styled.div`
    display: inline-block;
    align-self: flex-end;


    @media (max-width: 440px) {
        display: contents; 
    }
   
`;


const SomeImageCode1 = styled.img`
    height: 400px;
    width: fit-content;

    @media (max-width: 375px) {
        height: fit-content;
        width: auto;
    }
`;

const SomeImageCode2 = styled.img`
    height: 400px;
    width: fit-content;

    @media (max-width: 440px) {
        height: 46%;
        width: auto;
    }
`;