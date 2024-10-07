import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import { IoLogoGooglePlaystore, IoLogoSkype, IoMailOpen } from 'react-icons/io5'

//Types
import type { SocialWrapperProps } from '@/types'

const SocialWrapper: FC<PropsWithChildren<SocialWrapperProps>> = ({
	children,
	className,
}) => {
	return (
		<section className={className}>
			{children}

			{/* Social */}
			<div className='fixed bottom-12 right-6 hidden md:flex items-center flex-col gap-4'>
				<Link
					href={'https://www.googleplay.com'}
					target={'_blank'}
					className='socialIcons'
				>
					<IoLogoGooglePlaystore />
				</Link>
				<Link
					href={'https://www.skype.com/'}
					target={'_blank'}
					className='socialIcons'
				>
					<IoLogoSkype />
				</Link>
				<Link href={'mailto:example@gmail.com'} className='socialIcons'>
					<IoMailOpen />
				</Link>
			</div>
		</section>
	)
}

export default SocialWrapper
