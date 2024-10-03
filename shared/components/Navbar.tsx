'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi'
import { IoLogoGooglePlaystore, IoLogoSkype, IoMailOpen } from 'react-icons/io5'

//Mocked Data
import { navLinks } from '@/shared/Data/Data'

const Navbar = () => {
	const pathname: string = usePathname()
	const [showMenu, setShowMenu] = useState<boolean>(false)

	const menuVariants = {
		hidden: {
			scale: 0,
			transition: {
				type: 'tween',
				duration: 0.5,
			},
		},
		visible: {
			scale: 40,
			transition: {
				type: 'tween',
				duration: 0.5,
			},
		},
	}
	const navLinkVariants = {
		hidden: {
			display: 'none',
			y: -65,
			opacity: 0,
		},
		visible: {
			opacity: 1,
			display: 'flex',
			y: 0,
			transition: {
				delay: 0.4,
			},
		},
	}

	const isActive = (path: string, pathname: string) =>
		pathname === path ? 'text-Red' : 'text-Black'

	return (
		<header className='fixed w-full top-0 left-0 z-20'>
			<nav
				className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 absolute top-0 left-0 right-0 ${
					showMenu ? 'hidden' : ''
				}`}
			>
				<div className='flex justify-between items-center h-16'>
					<Link href='/' className='text-3xl text-Black'>
						App name <span className='text-Red'>.</span>
					</Link>

					{/* Desktop navbar */}
					<div className='hidden md:flex items-center justify-center space-x-6'>
						{navLinks.map((navLink, i) => (
							<Link
								href={navLink.path}
								key={i}
								className={`text-sm uppercase font-medium transition-all ${isActive(
									navLink.path,
									pathname
								)}`}
							>
								{navLink.label}
							</Link>
						))}
					</div>

					{/* Burger button */}
					<div
						className='flex md:hidden items-center'
						onClick={() => setShowMenu(prev => !prev)}
					>
						<HiOutlineMenuAlt4 className='text-Black cursor-pointer w-6 h-6' />
					</div>
				</div>
			</nav>

			{/* Mobile navbar background */}
			<motion.div
				variants={menuVariants}
				initial='hidden'
				animate={showMenu ? 'visible' : 'hidden'}
				className='bg-WhiteGray fixed top-0 right-0 w-16 h-16 rounded-full'
			></motion.div>

			{/* Mobile navbar */}
			<motion.nav
				variants={navLinkVariants}
				initial='hidden'
				animate={showMenu ? 'visible' : 'hidden'}
				className='h-screen md:hidden flex flex-col justify-center'
			>
				{navLinks.map((navLink, i) => (
					<Link
						key={i}
						href={navLink.path}
						className={`px-3 py-2 flex text-2xl justify-center uppercase font-medium transition-all ${isActive(
							navLink.path,
							pathname
						)}`}
						onClick={() => setShowMenu(prev => !prev)}
					>
						{navLink.label}
					</Link>
				))}

				{/* Social */}
				<div className='mt-6 flex justify-center items-center flex-row gap-4'>
					<Link
						href={'https://www.googleplay.com'}
						target={'_blank'}
						className='socialIcons'
					>
						<IoLogoGooglePlaystore />
					</Link>
					<Link
						href={'https://www.googleplay.com'}
						target={'_blank'}
						className='socialIcons'
					>
						<IoLogoSkype />
					</Link>
					<Link
						href={'https://www.googleplay.com'}
						target={'_blank'}
						className='socialIcons'
					>
						<IoMailOpen />
					</Link>
				</div>

				{/* Close icon */}
				<HiX
					className='absolute text-Black top-6 right-5 w-6 h-6 cursor-pointer'
					onClick={() => setShowMenu(prev => !prev)}
				/>
			</motion.nav>
		</header>
	)
}

export default Navbar
