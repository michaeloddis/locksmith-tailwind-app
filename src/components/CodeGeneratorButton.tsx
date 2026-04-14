/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef } from 'react';
import { CircleLoader } from './CircleLoader';
import { motion } from "motion/react";
import { Button } from './ui/button';

interface ICodeGeneratorButton {
  children?: React.ReactNode,
  onGenerateCode: () => void; 
}

/** A button component that triggers code generation and shows a spinner while processing. */
export function CodeGeneratorButton ({
  children,
  onGenerateCode
}: ICodeGeneratorButton) {
  const [showSpinner, setShowSpinner] = useState(false);
  const intervalId: any = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalId.current);
  }, []);

  const onClickHandler = () => {
    setShowSpinner(true);
    onGenerateCode();

    // Simulate the display of the spinner since there is not really anything to track for completion.
    intervalId.current = setInterval(() => setShowSpinner(false), 1000);
  }
  
  return (
    <div>
      <Button
        className='w-100 h-15 rounded-md text-xl'
        render={
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.0 }}
            onClick={onClickHandler}>
            {children}
            {showSpinner ? <CircleLoader /> : null}
          </motion.button>
        }
        />
    </div>
  )
}