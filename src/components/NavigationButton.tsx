import React from 'react';
import styled from 'styled-components';

interface NavigationButtonProps {
  label: string;
  onClick: () => void;
  variant: 'back' | 'next'; // 'back' for Back/Reset, 'next' for Next
}

const Button = styled.button<{ $variant: 'back' | 'next' }>`
  padding: 10px 20px;
  border: ${(props) =>
    props.$variant === 'back' ? '2px solid #495E57' : 'none'};
  background-color: ${(props) =>
    props.$variant === 'next' ? '#F4CE14' : 'transparent'};
  color: ${(props) =>
    props.$variant === 'next' ? '#495E57' : '#495E57'};
  border-radius: 5px;
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.$variant === 'next' ? '#e0b800' : '#EDEFEE'};
  }
`;

const NavigationButton: React.FC<NavigationButtonProps> = ({
  label,
  onClick,
  variant,
}) => {
  return <Button type='button' onClick={onClick} $variant={variant}>{label}</Button>;
};

export default NavigationButton;