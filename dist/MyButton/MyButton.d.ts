import { FC } from 'react';
import './MyButton.css';
export interface MyButtonProps {
    children: any;
    color: string;
    big?: boolean;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
