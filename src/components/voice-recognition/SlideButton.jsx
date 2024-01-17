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
  margin: 63px 0px 47px 0px;
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

const Container = styled.div`
* { box-sizing: border-box; }
html, body {   height: 100%; }
body {
  display: flex;
  justify-content: center;
  align-items: center;

}
margin: 63px 0px 47px 0px;
box-sizing: border-box;
font-family: Pretendard;
font-size: 13px;
.custom-checkbox {
  width: 151.338px;
  height: 33.186px;
  input#status {
    display: none;
    
    // Unchecked State
    + label {
      height: 100%;
      width: 100%;
      > .status-switch {
        cursor: pointer;
        width: 100%;
        height: 100%;
        position: relative;
        background: var(--blue, #00A3FF);
        color: white;
        transition: all 0.5s ease;
        padding: 3px;
        border-radius: 30px;

        &:before,
        &:after {
          border-radius: 30px;
          height: calc(100% - 6px);
          width: calc(50% - 3px);
          display: flex;
          align-items: center;
          position: absolute;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        &:before {
          background-color: white;
          color: black;
          box-shadow: 0 0 4px 4px rgba(#000, 0.2);
          left: 3px;
          z-index: 10;
          content: attr(data-unchecked);
        }
        
        &:after {
          right: 0;
          content: attr(data-checked);
        }
      }
    }

    // Checked stae
    &:checked + label > .status-switch {
      background: var(--blue, #00A3FF);

 
      &:after {
        left: 0;
        content: attr(data-unchecked);
      }
 
      &:before {
        color: black;
        left: 50%;
        content: attr(data-checked);
      }
    }
  }
}
`;