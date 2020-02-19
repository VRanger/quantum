import React from 'react';
import Button, { ButtonProps } from '../Button';

interface SocialButtonProps extends ButtonProps {
  provider: string;
}

export default class SocialButton extends React.Component<SocialButtonProps> {}
