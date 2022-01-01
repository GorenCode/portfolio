import styled from "styled-components";
import { colors, images} from '../constants/style';
import { motion } from 'framer-motion';
import Link from 'next/link';


const SectionPortfolio = () => {

    const work = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.2
            }
        }
    }

    const work2 = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.4
            }
        }
    }

    const work3 = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.6
            }
        }
    }

    const work4 = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.8
            }
        }
    }

    const work5 = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 1
            }
        }
    }

    return (
        <Container>
            <ActiveContainer>
                <Title>
                    <TitleBig>Some of my projects</TitleBig>
                    <TitleSmall>All developed with extreme precision and with the user in mind</TitleSmall>
                </Title>
                <ContainerBox>
                    <BoxPortfolio>
                        <motion.div
                            variants={work}
                            animate="visible"
                            initial="hidden"
                        >
                            <Link target="_blank" href="https://cybersafes.co/" rel="noopener noreferrer" passHref>
                                <CyberSafe />
                            </Link>
                        </motion.div>
                    </BoxPortfolio>
                    <BoxPortfolio>
                        <motion.div
                                variants={work2}
                                animate="visible"
                                initial="hidden"
                        >
                            <Link target="_blank" href="https://vpnapp.info/" rel="noopener noreferrer" passHref>
                                <Vpn src={images.vpn}/> 
                            </Link>      
                        </motion.div>
                    <BoxPortfolio>
                        <motion.div
                                variants={work4}
                                animate="visible"
                                initial="hidden"
                            >
                            <Link target="_blank" href="https://voodstudio.com/" rel="noopener noreferrer" passHref>
                                <Voodoo src={images.voodoo}/> 
                            </Link>
                        </motion.div>
                    </BoxPortfolio>
                    </BoxPortfolio>
                </ContainerBox>
                <ContainerBox2>
                    <BoxPortfolio>
                        <motion.div
                                variants={work5}
                                animate="visible"
                                initial="hidden"
                        >
                            <Link target="_blank" href="https://volition.live/" rel="noopener noreferrer" passHref>
                                <Volition src={images.volitionMobile}/>   
                            </Link>
                        </motion.div>
                    </BoxPortfolio>
                </ContainerBox2>
            </ActiveContainer>

        </Container>
    )
}

export default SectionPortfolio;


const Container = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: column;
    background-color: green;
    /* height: 600px; */
    background-color: white;

    justify-content: center;    
    align-items: center;
    padding: 180px 0px 100px 0px;

    width: 100%;

    @media (max-width: 1024px) {
        padding: 100px 20px 100px 0px;
        /* align-items: center; */
    }


    @media (max-width: 890px) {
        /* padding: 25% 40px 100px 0px; */
        align-items: flex-end;
    }

    @media (max-width: 768px) {

        align-items: center;
    }

    @media (max-width: 690px) {
        /* padding: 90px 20px 100px 20px; */
        
    }

    @media (max-width: 487px) {
        align-items: end;
        
    }

    @media (max-width: 360px) {
        padding: 100px 0% 100px 0px;

        
    }
    
`;

const ActiveContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: start;

    @media (max-width: 600px) {
       /* align-items: center; */
    }

    @media (max-width: 570px) {

       align-items: flex-start;
        max-width: 276px;
    }
`;

const Title = styled.div`
    padding-bottom: 60px;

    display: flex;
    flex-direction: column;
    align-self: flex-start;

    @media (max-width: 600px) {
        /* padding: 0px 0px 40px 80px; */
    }

`;

const TitleBig = styled.div`
    font-family: 'Playfair Display', serif;
    font-size: 42px;
    font-weight: bold;
    

    color: ${colors.primary};

    @media (max-width: 690px) {
        font-size: 32px;
        line-height: 28px;
        padding-bottom: 20px;
    }
`;

const TitleSmall = styled.div`
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    color: ${colors.primary};

    @media (max-width: 690px) {
        font-size: 12px;
    }
`;

const ContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: space-between;

    max-width: 1080px;


    display: grid;
    grid-template-columns: repeat(2, 0fr);
    grid-template-rows: masonry;

    column-gap: 30px;
    row-gap: 30px;

    @media (max-width: 690px) {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        align-items: flex-end;
    }
    

`;

const ContainerBox2 = styled.div`
    max-width: 1080px;


    display: grid;
    grid-template-columns: repeat(2, 0fr);
    grid-template-rows: masonry;


    padding-top: 30px;

    @media (max-width: 690px) {
        display: flex;
        flex-direction: column;

        align-items: flex-end;
    }
`;

const BoxPortfolio = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: space-between;
`;

const CyberSafe = styled.img`

    background-image: url(${images.CyberSafe});
    background-size: cover;
    
    border-radius: 10px;
    transition: box-shadow 0.3s ease-in-out;
    width: 294px;
    height: 476px;
    display: block;

    cursor: pointer;

    :hover {
        box-shadow: 0 10px 22px 0 rgba(56, 67, 97, 0.3);
    }

    @media (max-width: 1072px) {
        width: 204px;
        height: 453px;
    }

    @media (max-width: 768px) {
        width: 164px;
        height: 323px;   
    }
    


    @media (max-width: 690px) {
        background-image: url(${images.cyberSafeSize});

        width: 260px;
        height: 130px;
    }
`;


const Vpn = styled.img`
    
    border-radius: 10px;
    transition: box-shadow 0.3s ease-in-out;

    width: 466px;
    height: 211px;

    display: block;

    cursor: pointer;

    :hover {
        box-shadow: 0 10px 22px 0 rgba(56, 67, 97, 0.3);
    }

    @media (max-width: 1072px) {
        width: 406px;
        height: auto;
    }

    @media (max-width: 768px) {
        width: 282px;
        height: auto;   
    }


    @media (max-width: 690px) {
        width: 260px;
        height: 130px;
    }
`;

const Volition = styled.img`
    
    border-radius: 10px;
    transition: box-shadow 0.3s ease-in-out;

    width: 788px;
    height: 374px;

    cursor: pointer;

    :hover {
        box-shadow: 0 10px 22px 0 rgba(56, 67, 97, 0.3);
    }

    @media (max-width: 1072px) {
        width: 640px;
        height: auto;
    }

    @media (max-width: 768px) {
        width: 480px;
        height: auto;   
    }


    @media (max-width: 690px) {
        width: 260px;
        height: 130px;
    }
    
`;



const Voodoo = styled.img`
    
    border-radius: 10px;
    transition: box-shadow 0.3s ease-in-out;

    width: 466px;
    height: 211px;

    cursor: pointer;

    :hover {
        box-shadow: 0 10px 22px 0 rgba(56, 67, 97, 0.3);
    }

    @media (max-width: 1072px) {
        width: 406px;
        height: auto;
    }

    @media (max-width: 768px) {
        width: 282px;
        height: auto;  
    }

    @media (max-width: 690px) {
        width: 260px;
        height: 130px;

        margin-top: 30px;
    }
`;