import { WrapperProps } from '@/types'
import { FC, PropsWithChildren } from 'react'

const Wrapper: FC<PropsWithChildren<WrapperProps>> = ({
	children,
	className,
}) => {
	return <section className={className}>{children}</section>
}

export default Wrapper
