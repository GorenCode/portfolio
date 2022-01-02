import styled from "styled-components";
import { colors, images} from '../constants/style';
import { useInView } from 'react-intersection-observer';
import {
    useViewportScroll,
    motion,
    useTransform,
  } from 'framer-motion';


const Section_4 = () => {

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
            <ContainerImage>
               <SomeImageCode1 src={images.codeCover1} /> 
            </ContainerImage>
            <Title>
                <motion.div
                    animate={inView ? 'visible' : 'hidden'}
                    variants={variants}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    ref={ref}
                    
                >
                And I am always looking to
                </motion.div>
                <TitleBig>
                    <motion.div
                        animate={inView ? 'visible' : 'hidden'}
                        variants={variants}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        ref={ref}
                        
                    >
                    learn new things 
                    </motion.div>
                    <TitleMove>
                        <motion.div
                        animate={inView ? 'visible' : 'hidden'}
                        variants={variants}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        ref={ref}
                        
                        >
                        and
                        </motion.div>
                    </TitleMove>
                    <motion.div
                    animate={inView ? 'visible' : 'hidden'}
                    variants={variants}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    ref={ref}
                    
                    >   
                    create new amazing projects
                    </motion.div>
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

    /* padding: 0px 120px 0px 140px; */

    @media (max-width: 1025px) {
        /* padding: 0px 20% 0px 20%; */
    }

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

    @media (max-width: 440px) {
        font-size: 12px;
    }
`;

const TitleBig = styled.div`
    font-size: 42px;
    font-family: 'Playfair Display', serif;
    font-weight: bold;
    z-index: 1;

    @media (max-width: 440px) {
        font-size: 32px;
    }
`;

const TitleMove = styled.div`
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;

    @media (max-width: 440px) {
        font-size: 12px;
    }
`;


const ContainerImage = styled.div`

    @media (max-width: 440px) {
        display: contents;
    }
   
`;

const ContainerImage2 = styled.div`
    display: inline-block;
    align-self: flex-end;

    overflow: hidden;



    @media (max-width: 440px) {
        display: contents; 
    }
   
`;


const SomeImageCode1 = styled.img`
    height: 400px;
    width: fit-content;

    @media (max-width: 440px) {
        height: 290px;
        width: auto;
    }

    @media (max-width: 375px) {
        height: 260px;
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