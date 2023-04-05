import React from 'react';
import "../../index.css"

interface ButtonProps {
    label: string;
}
export const Button = ({
    label,
    ...props
  }: ButtonProps) => {
    return (
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
            {label}
        </button>
    )
   }