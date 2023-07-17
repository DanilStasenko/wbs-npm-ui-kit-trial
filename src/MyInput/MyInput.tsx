import React, {FC} from 'react';
import './MyInput.css'

export interface MyInputProps {
    big?: boolean;
    placeholder: string;
    label: string;
}

const MyInput: FC<MyInputProps> = ({
	big, 
	placeholder, 
	label, 
	...props
}) => {
   const rootClasses = ['my-input']
    if (big) {
			rootClasses.push('big-input')
    }
    return (
        <label>
            {label}
            <input className={rootClasses.join(' ')} placeholder={placeholder} {...props}/>
        </label>
    );
};

export default MyInput;