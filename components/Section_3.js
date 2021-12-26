import styled from "styled-components";
import { colors, images} from '../constants/style';
import { useInView } from 'react-intersection-observer';
import {
    useViewportScroll,
    motion,
    useTransform,
  } from 'framer-motion';


const Section_3 = () => {



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
            <ContainerImageLeft>
                <motion.div
                    animate={inView ? 'visible' : 'hidden'}
                    variants={variants}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    ref={ref}
                    
                >
                <StyledSass src={images.sassLogoColor} />  
                </motion.div>
            </ContainerImageLeft>
            <ContainerText>
                <Title>
                    I love
                    <TitleBig>
                        coding 
                        <Normal>
                            solving problems and
                        </Normal>
                        <TitleMove>
                            collaborating
                            
                        </TitleMove>
                        <TitleMoveSmall> 
                                with new people.
                        </TitleMoveSmall>
                    </TitleBig>
                </Title>
            </ContainerText>

                <ContainerImageCenter>
                    <motion.div
                        animate={inView ? 'visible' : 'hidden'}
                        variants={variants}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        ref={ref}
                        
                    >
                    <StyledReact src={images.reactLogoColor} />  
                    </motion.div>
                </ContainerImageCenter>
                <ContainerImageRight>
                <motion.div
                    animate={inView ? 'visible' : 'hidden'}
                    variants={variants}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    ref={ref}
                    
                >
                    <StyledImage src={images.styleComponetColor} /> 
                </motion.div>
                </ContainerImageRight>
        </Container>

    )
}

export default Section_3;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 600px;
    width: 100%;
    background-color: white;

    align-items: center;

    @media (max-width: 375px) {
        
    }
`;

const ContainerText = styled.div`
    /* z-index: 1; */
    

    @media (max-width: 440px) {
        display: flex;
        align-self: center;
        padding: 0px 0% 0px 0px;
    }

    @media (max-width: 321px) {
        display: flex;
        align-self: end;
        padding: 0px 5% 0px 0px;
    }
`;

const Title = styled.div`
    align-self: center;
    font-family: 'Open Sans', sans-serif;
    color: ${colors.primary};

    font-weight: lighter;
`;

const TitleBig = styled.div`
    font-family: 'Playfair Display', serif;
    font-size: 42px;
    font-weight: bold;

    @media (max-width: 375px) {
        font-size: 32px;
    }
`;

const TitleMove = styled.div`
    padding-left: 40px;
    font-weight: bold;
`;

const Normal = styled.div`
    font-size: 16px;
    padding-left: 20px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 100;
`;

const TitleMoveSmall = styled.div`
    font-size: 16px;
    padding-left: 60px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 100;
`;


// const ContainerImages = styled.div`
//     align-self: center;

//     width: inherit;

//     position: absolute;
//     display: flex;
    
//     justify-content: space-around;

// `;

const ContainerImageLeft = styled.div`
    display: flex;
    margin-right: auto;

    padding-left: 20%;
`;

const ContainerImageCenter = styled.div`
    margin-top: 40px;
`;

const ContainerImageRight = styled.div`
    display: flex;
    margin-left: auto;

    padding-right: 10%;
`;


const StyledImage = styled.img`
    width: 100px;
    height: 72px;


    @media (max-width: 375px) {
        width: 50px;
        height: 40px;
    }
`;

const StyledReact = styled.img`
    width: 84px;
    height: 76px;

    @media (max-width: 440px) {
        width: 56px;
        height: 47px;
    }

    
`;

const StyledSass = styled.img`
    width: 100px;
    height: 74px;

    @media (max-width: 440px) {
        width: 57px;
        height: 51px;

        margin-bottom: 20px;
    }
`;
