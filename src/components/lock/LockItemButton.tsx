/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Button } from '../ui/button';

interface ILockItemButton {
	children?: React.ReactNode;
	onClick?: any;
}

export function LockItemButton({
	children,
	onClick
}: ILockItemButton) {
	return (
		<Button className='rounded-full' variant='outline'
			onClick={onClick}>
			{children}
		</Button>
	)
}