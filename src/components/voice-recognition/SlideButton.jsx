import styled from 'styled-components';
import { motion } from 'framer-motion';

const SliderButton = ({isSelected, onClick, option1, option2}) => {
  return (
    <>
      <Wrapper>
        <SlideContainer className="switch" data-ison={isSelected} onClick={onClick}>
          <motion.div className="handle" layout transition={spring} />
          <SlideBgText className='option1' data-ison={isSelected}>{option1}</SlideBgText>
          <SlideBgText className='option2' data-ison={isSelected}>{option2}</SlideBgText>
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
  position: relative;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--blue, #00A3FF);
  margin: 18px 0px 47px 0px;
  align-items: center;
  line-height: 13px;
  .selected {
    background: var(--icon-color, #FFF);
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    color: black;
  }
  .handle {
    width: 72.091px;
    height: 28.569px;
    flex-shrink: 0;
    margin: 0px 2px;
    border-radius: 30px;
    text-align: center;
    line-height: 28.569px;
    background: white;
  }
  .option1 {
    left: 0px;
  }
  .option2 {
    left: 75px;
  }
  .option1[data-ison="false"] {
    color: white;
  }
  .option2[data-ison="true"] {
    color: white;
  }
`;

const SlideBgText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 75px;
  position: absolute;
  font-size: 13px;
`;