import { useEffect, useState } from 'react';
import { animate } from "motion/react";

interface ICodeItem {
  value: number;
  divider?: boolean;
}

export function CodeItem({
    value = 0
}: ICodeItem) {
  const [lockValue, setLockValue] = useState(value);

  /** Animates the lock value from 0 to the specified value */
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1,
      onUpdate(value: number) {
        setLockValue(Number(value.toFixed()));
      }
    });

    return () => controls.stop();
  }, [value]);

  return (
    <div className='flex flex-col justify-center items-center gap-2 rounded-md font-bold text-7xl w-23 h-27.5 leading-26.25 px-5 py-0 border bg-background/30 shadow-md'>
      {lockValue}
    </div>
  );
}