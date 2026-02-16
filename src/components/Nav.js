import img from '../assets/logos/header-image.svg';
import { HStack, VStack } from '@chakra-ui/react';

const Nav = () => {
    return (
        <nav>
            <HStack as="ul" align="center" justifyContent={'space-between'} spacing={4}
                px={10}>
                <img src={img} alt="Header" />
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </HStack>
        </nav >
    );
}

export default Nav;