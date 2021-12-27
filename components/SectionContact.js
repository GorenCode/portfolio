import styled from "styled-components";
import { colors, images } from '../constants/style';
import Link from 'next/link';
import { motion } from 'framer-motion';



const SectionContact = () => {

    const button = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.5
            }
        }
    }

    const button2 = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.7
            }
        }
    }



    return (
        <Container>
            <Text>
                <TextAbout>
                    <TextBig>After </TextBig>
                    2 years of being a computer sciences student in the College of Management Academic,
                    I’ve stumbled upon an opportunity
                    to take part in an actual development process with a real company. 
                    Realizing how much I enjoy developing actual products and software over 
                    the academic thoretical mathemathics I decided to leave my 
                    school and start working for agencies and companies developing their websites as a freelancer.

                    Now, I started my own company that specializes in developing web app 
                    designing and marketing called VOODOO Studios, my partner and I had gained 
                    lots of experience and fun in the process but now it's time for me to 
                    integrate back into a new family. after quiet a few projects, I feel as 
                    if it is time for me to 
                    get back to that experience who got me so excited in the first place 
                    and look for a company to work for as a full-time employee. I&apos;m 
                    looking for a place where I can be a part of a team with which I 
                    will be able to create amazing software, tools, sites and products 
                    far beyond the ones a developer can create on his own. and of 
                    course - a place and environment where I can (really) learn and 
                    grow as a developer.
                </TextAbout>
                <TextHighlight>If you are an employer or an HR scouter looking to hire 
                        a web developer - please feel more than welcome to say hi, I 
                        would like to talk, to meet or whatever is required in order 
                        to maybe find my new home and new family (:
                </TextHighlight>
            </Text>
            <ContactButtons>
                <motion.div
                        variants={button}
                        animate="visible"
                        initial="hidden"
                    >
                    <Link target="_blank" href="https://www.linkedin.com/in/tamir-goren-bab509197/" rel="noopener noreferrer" passHref>
                        <Linkedin src={images.linkedinImage} />
                    </Link>
                </motion.div>
                <motion.div
                        variants={button2}
                        animate="visible"
                        initial="hidden"
                    >
                    <Link href="mailto:tamir.code@gmail.com" target="_blank" rel="noopener noreferrer" passHref>
                        <EmailButton>CONTACT ME</EmailButton>   
                    </Link>
                </motion.div>
                
            </ContactButtons>
        </Container>
    )
}

export default SectionContact;


const Container = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: column;
    padding-top: 120px;
    padding: 0% 20% 0% 25%;
    height: 800px;
    background-color: white;

    justify-content: center;

    width: 100%;

    font-family: 'Playfair Display', serif;

    @media (max-width: 1024px) {
        padding: 25% 20% 0% 25%;
    }

    @media (max-width: 740px) {
        height: 780px;
        padding: 0% 5% 0% 25%;
    }

    @media (max-width: 440px) {
        height: fit-content;
        padding: 30% 5% 10% 25%;
    }
`;

const Text = styled.div`
    color: ${colors.primary};
    font-family: 'Open Sans', sans-serif;

    line-height: 23.5px;

    @media (max-width: 740px) {
        font-size: 12px;
        line-height: 19.5px;
    }
`;

const TextAbout = styled.div``;

const TextBig = styled.span`
    font-size: 42px;
    font-weight: bold;

    font-family: 'Playfair Display', serif;

    @media (max-width: 740px) {
        font-size: 32px;
    }
`;

const TextHighlight = styled.div`
    padding-top: 20px;
    font-weight: bold;
`;

const ContactButtons = styled.div`
    align-self: self-end;
    display: flex;
    align-items: center;
    width: 230px;
    justify-content: space-around;
    padding-top: 61px;

    @media (max-width: 740px) {
        align-self: self-start;

        justify-content: space-between;
        width: 182px;
    }
`;

const Linkedin = styled.img`
    width: 47px;
    height: 47px;
    cursor: pointer;

    border-radius: 10px;

    transition: 0.3s;

    :hover {
        opacity: 0.8;
    }

    :active {
        opacity: 1;
        -webkit-box-shadow: inset 0px 0px 11px #384361;
            -moz-box-shadow: inset 0px 0px 11px #384361;
                box-shadow: inset 0px 0px 11px #384361;
        outline: none;
        
    }

    @media (max-width: 740px) {
        width: 37px;
        height: 37px;
    }
`;

const EmailButton = styled.button`
    background-color: ${colors.button};
    border: none;
    padding: 16px 30px 18px 30px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    border-radius: 10px;
    cursor: pointer;

    transition: 0.3s;

    :hover {
        opacity: 0.8;
    }

    :active {
        opacity: 1;
        background-color: ${colors.button};
        -webkit-box-shadow: inset 0px 0px 5px #384361;
            -moz-box-shadow: inset 0px 0px 5px #384361;
                box-shadow: inset 0px 0px 5px #384361;
        outline: none;
    }

    @media (max-width: 740px) {
        padding: 12px 20px 13px 20px;
        font-size: 12px;  
    }

`;