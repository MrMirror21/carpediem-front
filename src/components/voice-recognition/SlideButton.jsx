import styled from 'styled-components';
import { motion } from 'framer-motion';

const SliderButton = ({isSelected, onClick, option1, option2}) => {
  return (
    <>
      <Wrapper>
        <SlideContainer className="switch" data-ison={isSelected} onClick={onClick}>
          <motion.div className="handle" layout transition={spring}>{isSelected ? option1: option2}</motion.div>
        </SlideContainer>
      </Wrapper>
    </>
    )
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};
export default SliderButton

const Wrapper = styled.div`
  .switch {
    width: 151.338px;
    height: 33.186px;
    background: var(--blue, #00A3FF);
    display: flex;
    justify-content: flex-start;
    border-radius: 50px;
    margin: 18px 0px 47px 0px;
    cursor: pointer;
  }
  .switch[data-ison="false"] {
    justify-content: flex-end;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  width: 151.338px;
  height: 33.186px;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--blue, #00A3FF);
  margin: 18px 0px 47px 0px;
  .selected {
    background: var(--icon-color, #FFF);
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    color: black;
  }
  .handle {
    width: 72.091px;
    height: 28.569px;
    flex-shrink: 0;
    margin: 2px 2px;
    border-radius: 30px;
    text-align: center;
    line-height: 28.569px;
    background: white;
    font-size: 13px;
  }
`;