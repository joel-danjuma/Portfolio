import {TfiGithub} from "react-icons/tfi";
import {TfiTwitterAlt} from 'react-icons/tfi';
import {TfiLinkedin} from 'react-icons/tfi';
import {AiOutlineMail} from 'react-icons/ai';

const Navbar = () => {
    return (
        <nav className="flex justify-center">
            <a href='https://twitter.com/joeldanjuma_'className='lg:px-10 md:px-5 px-5 py-2 text-2xl hover:animate-pulse' ><TfiTwitterAlt/></a>
            <a href='https://www.linkedin.com/in/joel-danjuma/'className='lg:px-10 md:px-5 px-5 py-2 text-2xl hover:animate-pulse' ><TfiLinkedin/></a>
            <a href='https://github.com/joel-danjuma'className='lg:px-10 md:px-5 px-5 py-2 text-2xl hover:animate-pulse' ><TfiGithub/></a>
            <a href='mailto:leojjad@gmail.com'className='lg:px-10 md:px-5 px-5 py-2 text-2xl hover:animate-pulse'><AiOutlineMail/></a>
        </nav>
    )
};

export { Navbar};