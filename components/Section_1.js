import styled from "styled-components";
import { colors, images } from '../constants/style';
import { useInView } from 'react-intersection-observer';
import {
    useViewportScroll,
    motion,
    useTransform,
  } from 'framer-motion';


const Section_1 = () => {

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

    
    return (
        <Container>
            <Title>
                <motion.div
                    animate={inView ? 'visible' : 'hidden'}
                    variants={variants}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    ref={ref}
                >
                <SmallText>
                    I am   
                </SmallText>
                </motion.div>
                <motion.div
                    animate={inView ? 'visible' : 'hidden'}
                    variants={variants}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    ref={ref}
                >
                <TitleBig>
                    Tamir 
                    <TitleMove>
                        Goren
                    </TitleMove>
                </TitleBig>
                </motion.div>
            </Title>
            <ImageContainer>
             <ImageTamir src={images.tamirImage} />   
            </ImageContainer>
            
        </Container>
    )
};

export default Section_1;


const Container = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: row;
    height: 600px;
    background-color: white;

    justify-content: center;

    width: 100%;


    @media (max-width: 740px) {
        height: 70vh;
        flex-direction: column;
        overflow: hidden;
    }

    @media (max-width: 320px) {
        height: 60vh;
    }
    
`;

const Title = styled.div`
    align-self: center;
    
    @media (max-width: 440px) {
        position: absolute;
        margin: 0px 0px 0px -70px;
    }
 
`;

const SmallText = styled.div`
    font-weight: lighter;
    padding-bottom: 5px;
`;

const TitleBig = styled.div`
    font-size: 42px;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 40px;

    color: ${colors.primary};
    font-family: 'Playfair Display', serif;

    @media (max-width: 440px) {
        font-size: 32px;
        line-height: 32px;
    }
`;

const TitleMove = styled.div`
    padding-left: 46px;
`;


const ImageTamir = styled.img`
    position: absolute;
    top: 100px;
    /* left: 0px; */

    margin-left: auto;
    margin-right: auto;
    
    width: 500px;
    height: 500px;

    @media (max-width: 740px) {
        margin-left: 40%;

        width: 420px;
        height: 420px;
        top: 160px;
    }

    @media (max-width: 440px) {
        margin-left: auto;
        
        width: 420px;
        height: 420px;
        top: 160px;
    }
    @media (max-width: 320px) {
        width: 368px;
        height: 350px;
        top: 165px;
    }

`;

const ImageContainer = styled.div`
    width: 500px;

    @media (max-width: 440px) {
        display: flex;
        align-self: center;
        width: 220px;
    }
`;