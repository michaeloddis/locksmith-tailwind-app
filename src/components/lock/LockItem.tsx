import React from 'react';

interface ILockItem {
	children?: React.ReactNode
}

export function LockItem({
	children
}: ILockItem) {
	return (
		<div className='flex flex-row justify-center items-center gap-2'>
			{children}
		</div>
	)
}