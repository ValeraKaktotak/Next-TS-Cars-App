'use client'
import { motion } from 'framer-motion'

//Components
import SocialWrapper from '@/shared/components/SocialWrapper'

//Mocked Data
import { contacts } from '@/shared/Data/Data'

//Animation
import { smoothIn } from '@/shared/animate'

const Contact = () => {
	return (
		<SocialWrapper className='flex flex-col justify-center items-center lg:flex-row pt-28 lg:pt-0 overflow-hidden'>
			<motion.div
				variants={smoothIn('right', 0.2)}
				initial='hidden'
				animate='show'
				exit='hidden'
				className='md:px-6 py-6 text-center lg:text-left lg:w-1/2'
			>
				<div className='text-WhiteGray font-medium uppercase text-sm mb-4'>
					- Finest Transport
				</div>

				<div className='uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold'>
					Ride To Destinations With Maximum Comfort
				</div>

				<p className='leading-8 mb-8 text-sm max-w-xl mt-10 text-Black'>
					We Care About Your Comfort And Safety. Do You Require A Car? Get In
					Touch With Us
				</p>

				<div>
					{contacts.map(contact => (
						<div key={contact.id} className='mt-6'>
							<div className='text-xl font-medium mb-2'>{contact.title}</div>
							<div className='text-sm'>{contact.text}</div>
						</div>
					))}
				</div>

				<div className='flex flex-wrap gap-2 mt-2'>
					<span className='border-[#bfa37c] border w-full lg:w-max py-4 px-8 tracking-widest text-sm'>
						+ More Details
					</span>
				</div>
			</motion.div>

			<motion.div
				variants={smoothIn('left', 0.2)}
				initial='hidden'
				animate='show'
				exit='hidden'
				className='md:px-6 py-6 lg:w-1/2'
			>
				<div className='uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold mb-10'>
					Leave a Comment
				</div>

				<form>
					<div className='flex items-center border-b border-Black py-2 mb-8'>
						<input
							type='text'
							className='appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none'
							placeholder='Name'
						/>
					</div>
					<div className='flex items-center border-b border-Black py-2 mb-8'>
						<input
							type='text'
							className='appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none'
							placeholder='Phone'
						/>
					</div>
					<div className='flex items-center border-b border-Black py-2 mb-8'>
						<input
							type='email'
							className='appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none'
							placeholder='Email'
						/>
					</div>
					<div className='flex items-center border-b border-Black py-2 mb-8'>
						<input
							type='text'
							className='appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none'
							placeholder='Message'
						/>
					</div>
					<button
						type='submit'
						className='mt-10 px-8 py-4 bg-Red rounded-full text-white uppercase text-sm cursor-pointer hover:bg-Black transition-all duration-300'
					>
						Send Message
					</button>
				</form>
			</motion.div>
		</SocialWrapper>
	)
}

export default Contact
