import React from 'react';

interface ICode {
  children?: React.ReactNode
}

export function Code ({
    children
}: ICode) {
  return (
    <div className='flex flex-row justify-center flex-wrap items-center pt-12 gap-9 cursor-default'>
      {children}
    </div>
  )
}