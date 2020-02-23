import styled from 'styled-components';
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const Title = styled(motion.div)`
  font-size: 40px;
  font-weight: bold;

  @media (max-width: 860px) {
    font-size: 25px;
  }
`
export const Subtitle = styled(motion.div)`
  font-size: 25px;
  font-weight: bold;
`

export const List = styled(motion.ul).attrs({
  variants: container,
  initial: "hidden",
  animate: "visible"
})``

export const ListItem = styled(motion.li).attrs({
  variants: item,
})`
  font-size: 25px;
  margin: 10px 0;
`
export const Paragraph = styled(motion.div)`
  margin: 20px 0;
  font-size: 20px;
`
export const Link = styled(motion.a)`
  color: #651fff;
`

export const Card = styled(motion.div).attrs({
  variants: item,
})`
  width: 100%;
  min-width: 380px;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 10px;
  margin-top: 20px;

  @media (max-width: 860px) {
    min-width: 0;
    width: 100%;
  }
`

export const CardBody = styled(motion.div)`
  flex: 1;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  img {
    width: 200px;
    object-fit: contain;

    @media (max-width: 860px) {
      width: 100px;
    }
  }
`

export const CardFooter = styled(motion.div)`
  padding: 20px;
`

export const Cards = styled(motion.div).attrs({
  variants: container,
  initial: "hidden",
  animate: "visible"
})`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
`