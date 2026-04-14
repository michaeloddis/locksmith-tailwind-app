import React from 'react';

interface ILockItemActions {
	children?: React.ReactNode
}

export function LockItemActions ({
	children
}: ILockItemActions) {
	return (
		<div className='flex flex-col justify-center items-center gap-2'>
			{children}
		</div>
	)
}