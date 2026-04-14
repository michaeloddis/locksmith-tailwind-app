import React from 'react';

interface ILock {
  children?: React.ReactNode
}

export function Lock({
  children
}: ILock) {
  return (
    <div className='flex flex-row justify-center items-center gap-15 ml-6'>
      {children}
    </div>
  )
}