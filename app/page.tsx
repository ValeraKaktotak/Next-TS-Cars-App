'use client'
import { motion } from 'framer-motion'

//Components
import Car from '@/shared/components/Car'
import Wrapper from '@/shared/components/Wrapper'

//Animation
import { smoothIn } from '@/shared/animate'

const Home = () => {
	return (
		<Wrapper className='text-center flex flex-col justify-center'>
			{/* Red blur circle */}
			<div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w=[68.75rem]'></div>

			{/* Purple blur circle */}
			<div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w=[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>

			<div className='h-full w-full'>
				<div className='overflow-hidden'>
					{/* Heading */}
					<motion.h1
						variants={smoothIn('down', 0.2)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='h1'
					>
						Book. Perfect. <span className='text-Red'>Ride.</span>
					</motion.h1>

					{/* SubTitle */}
					<motion.p
						variants={smoothIn('down', 0.5)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='text-Black mx-auto max-w-xl flex justify-center'
					>
						Car Dealer is the most enticing, creative, modern and multipurpose
						auto dealer Premium WordPress Theme. Suitable for any car dealer
						websites, business or corporate websites. Express your style on the
						road with diverse Vehicle Color Variants, offering personalized
						choices for every journey. Enhance visuals with interactive points,
						providing details and engaging storytelling within your images
						effortlessly.
					</motion.p>

					{/* Button */}
					<motion.div
						variants={smoothIn('down', 0.8)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='mt-8 flex gap-x-4 justify-center z-10'
					>
						<button className='flex-none rounded-full bg-Red px-6 py-2.5 text-sm font-sm font-normal hover:bg-Black transition-all duration-300 text-White'>
							View Details
						</button>
						<button className='flex-none rounded-full bg-Red px-6 py-2.5 text-sm font-sm font-normal hover:bg-Black transition-all duration-300 text-White'>
							Rent Now
						</button>
					</motion.div>

					{/* Home car photo */}
					<motion.div
						variants={smoothIn('left', 1)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='w-full h-full flex justify-center mt-20 relative -z-20'
					>
						<Car />
					</motion.div>
				</div>
			</div>
		</Wrapper>
	)
}

export default Home
