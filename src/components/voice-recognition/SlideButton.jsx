import styled from 'styled-components';

const SliderButton = ({isSelected, onClick, option1, option2}) => {
return (
<>
<SlideContainer>
        <SlideButton className={isSelected ? "selected" : ""} onClick={onClick}>{option1}</SlideButton>
        <SlideButton className={isSelected ? "" : "selected"} onClick={onClick}>{option2}</SlideButton>
</SlideContainer>
</>
)
}
export default SliderButton

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
`;

const SlideButton = styled.div`
  width: 72.091px;
  height: 28.569px;
  flex-shrink: 0;
  margin: 2px 2px;
  border-radius: 30px;
  text-align: center;
  line-height: 28.569px;
  color: white;
  font-size: 13px;
`;