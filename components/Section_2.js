import styled from "styled-components";
import { colors, images} from '../constants/style';
import { useInView } from 'react-intersection-observer';

import {
    useViewportScroll,
    motion,
    useTransform,
  } from 'framer-motion';



const Section_2 = () => {

    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false
    });


    const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
        opacity: 0,
        scale: 0.65,
        y: 50
    }
    };

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 1800], [100, 500]);
    const y2 = useTransform(scrollY, [0, 500], [20, -250]);
    const y3 = useTransform(scrollY, [0, 900], [0, -300]);
    const y4 = useTransform(scrollY, [0, 700], [0, -400]);
    const y5 = useTransform(scrollY, [0, 900], [0, 100]);
    const y6 = useTransform(scrollY, [220, 700], [0, 90]);
    const y7 = useTransform(scrollY, [200, 1200], [0, 800]);



    return (
        <Container>
            <ContainerImagesTop>
                <motion.div style={{ y: y2, x: 0 }}>
                    <StyleTsText>TS</StyleTsText>
                </motion.div>
                <motion.div style={{ y: y3, x: 0 }}>
                  <StyledImage src={images.nextLogoColor} />
                </motion.div>
                <motion.div style={{ y: y4, x: 0 }}>
                  <ES6>ES6</ES6>  
                </motion.div>
            </ContainerImagesTop>
            <TextContainer>
                <Title>
                    <motion.div
                        animate={inView ? 'visible' : 'hidden'}
                        variants={variants}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        ref={ref}
                    >
                    <TitleBigTop>
                      I am a  
                    </TitleBigTop>
                    <TitleBig>
                        programmer 
                    </TitleBig>
                    </motion.div>
                    <motion.div
                        animate={inView ? 'visible' : 'hidden'}
                        variants={variants}
                        transition={{ duration: 1.1, ease: 'easeOut' }}
                        ref={ref}
                    >
                    <TitleMove>
                        currently specialized in Vanilla JavaScript, 
                    </TitleMove>
                    <TitleMove>
                        Sass, Styled Components, Next.js, React and Redux.
                    </TitleMove>
                    </motion.div>
                </Title> 
            </TextContainer>

            <ContainerImagesBottom>
                <motion.div style={{ y: y1, x: 0 }}>
                  <StyledRedux src={images.reduxColor} />  
                </motion.div>
                <motion.div style={{ y: y7, x: 0 }}>
                  <StyleJs>JS</StyleJs>  
                </motion.div>
                <motion.div style={{ y: y5, x: 0 }}>
                  <StyledCss src={images.cssColor} />  
                </motion.div>
                <motion.div style={{ y: y6, x: 0 }}>
                  <StyledHtml src={images.htmlColor} />  
                </motion.div>

            </ContainerImagesBottom>
        </Container>
    )
}

export default Section_2;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(56, 67, 97, 0.05);
    height: 600px;
    justify-content: center;

    @media (max-width: 375px) {
        padding: 0px 20px 0px 20px;
    }
`;

const TextContainer = styled.div`
    display: flex;
    align-self: flex-end;
    padding: 0% 25% 0% 0%;

    @media (max-width: 440px) {
        padding: 0px 40px 0px 70px;
    }
`;

const Title = styled.div`
    align-self: center;
`;

const TitleBigTop = styled.div`
    font-size: 42px;

    font-family: 'Playfair Display', serif;
    font-weight: bold;

    color: ${colors.primary};

    @media (max-width: 440px) {
        font-size: 32px;
        padding: 0% 0% 2% 0%;
    }
`;

const TitleBig = styled.div`
    font-size: 42px;

    font-family: 'Playfair Display', serif;
    font-weight: bold;

    color: ${colors.primary};

    margin-top: -10px;
    padding-left: 30px;
    padding-bottom: 10px;

    @media (max-width: 440px) {
        font-size: 32px;
        padding: 0% 0% 2% 9%;
    }
`;

const TitleMove = styled.div`
    margin-left: -20px;
    line-height: 25px;

    font-size: 16px;
    font-weight: lighter;
    font-family: 'Open Sans', sans-serif;

    @media (max-width: 440px) {
        font-size: 12px;
        margin: 0px;
    }
`;


const ContainerImagesBottom = styled.div`
    display: flex;
    align-self: center;
    width: 100%;
    justify-content: space-evenly;
`;

const ContainerImagesTop = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`;


const StyledImage = styled.img`
    width: 100px;
    height: 65px;


    @media (max-width: 440px) {
        width: 74px;
        height: 48px;

    }

`;

const StyledRedux = styled.img`
    width: 70px;
    height: 76px;

    @media (max-width: 440px) {
        margin: 0px 0px 0px 120px; 
        width: 51px;
        height: 61px;
    }
    
`;


const StyleTsText = styled.div`
    color: white;
    font-size: 34px;
    font-weight: bold;
    background-color: ${colors.primary};
    width: 60px;
    height: 60px;
    display: flex;
    flex-flow: column-reverse;

    @media (max-width: 440px) {
        font-size: 26px;
        width: 50px;
        height: 50px;
    }
`;

const ES6 = styled.div`
    color: ${colors.primary};
    font-size: 30px;
    font-weight: bold;

    @media (max-width: 375px) {
        font-size: 22px;
    }
`;

const StyleJs = styled.div`
    color: white;
    font-size: 40px;
    font-weight: bold;
    background-color: ${colors.primary};
    width: 80px;
    height: 80px;
    display: flex;
    flex-flow: column-reverse;

    z-index: 1;

    @media (max-width: 440px) {
        font-size: 26px;
        width: 50px;
        height: 50px;
    }
`;

const StyledCss = styled.img`
    width: 50px;
    height: 60px;

    @media (max-width: 440px) {
        width: 40px;
        height: 50px;
    }
`;

const StyledHtml = styled.img`
    height: 34px;
    width: 29px;
`;