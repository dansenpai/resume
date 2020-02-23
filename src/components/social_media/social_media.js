import React from 'react';
import {FaGithubSquare, FaLinkedinIn, FaWhatsappSquare} from 'react-icons/fa';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 10px;
  svg {
    width: 30px;
    height: 30px;
    fill: #fff;
  }
`

const Link = styled(motion.a).attrs({
  whileHover: {
    scale: 1.2,
    transition: { duration: 1 },
  },
  whileTap: { scale: 0.9 }
})``

const SocialMedia = () => {
    return (
      <SocialMediaWrapper>
        <Link href="https://www.linkedin.com/in/dansenpai/" target="_blank">
          <FaLinkedinIn />
        </Link>

        <Link href="https://github.com/dansenpai" target="_blank">
          <FaGithubSquare/>
        </Link>

        <Link href="https://api.whatsapp.com/send?phone=5586999001465" target="_blank">
          <FaWhatsappSquare/>
        </Link>
      </SocialMediaWrapper>
    )
}

export default SocialMedia;
