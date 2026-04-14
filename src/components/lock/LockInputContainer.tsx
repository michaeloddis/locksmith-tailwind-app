import React from 'react';

interface ILockInputContainer {
	children?: React.ReactNode
}

export function LockInputContainer({
	children
}: ILockInputContainer) {
	return (
		<div className='lock-input-container flex flex-col gap-2 justify-start items-start outline-none'>
			{children}
		</div>
	)
}