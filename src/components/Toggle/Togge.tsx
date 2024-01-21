import React from 'react';
import { ToggleContainer, ToggleInput, ToggleSlider } from './Toggle.style';

interface ToggleProps { 
  allProducts: boolean;
  setAllProducts: React.Dispatch<React.SetStateAction<boolean>>;
};
const Toggle = ({ setAllProducts, allProducts }: ToggleProps) => {

  const handleToggleChange = () => {
    setAllProducts(!allProducts);
  };

  return (
    <ToggleContainer>
      <ToggleInput data-testid="toggle-button" type="checkbox" checked={allProducts} onChange={handleToggleChange} />
      <ToggleSlider />
    </ToggleContainer>
  );
};

export default Toggle;