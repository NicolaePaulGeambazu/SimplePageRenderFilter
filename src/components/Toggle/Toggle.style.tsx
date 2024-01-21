import styled from 'styled-components';

export const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #2196F3;
  }

  &:focus + span {
    box-shadow: 0 0 1px #2196F3;
  }

  &:checked + span:before {
    transform: translateX(13px);
  }
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;