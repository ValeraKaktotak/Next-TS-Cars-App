'use client'
import { motion } from 'framer-motion'

//Components
import Wrapper from '@/shared/components/Wrapper'

//Mocked Data
import { services } from '@/shared/Data/Data'

//Animation
import { smoothIn } from '@/shared/animate'

const Services = () => {
	return (
		<Wrapper className='flex flex-col mt-24 justify-center'>
			<div className='h-full overflow-hidden'>
				<div className='text-center my-8 md:px-8'>
					<motion.div
						variants={smoothIn('up', 0.5)}
						initial='hidden'
						animate='show'
						exit='hidden'
					>
						<div className='uppercase font-medium text-sm text-WhiteGray'>
							- Services
						</div>

						<div className='font-semibold text-3xl mt-8'>
							Our Satisfied Clients All Around The Globe
						</div>

						<p className='text-Black text-sm mt-8 leading-7 max-w-3xl mx-auto'>
							I offer a full range of web development services, from website
							design and development to API integration and performance
							optimization. I specialize in creating high-quality, responsive
							web applications that deliver an exceptional user experience.
						</p>
					</motion.div>

					<motion.div
						variants={smoothIn('down', 0.5)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='grid gap-4 text-Black sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8'
					>
						{services.map(service => (
							<div
								key={service.id}
								className='bg-white rounded-lg p-8 border-2 hover:border-red-500 text-center transition-all duration-300'
							>
								<div className='flex justify-center text-Red text-5xl mb-4'>
									{service.icon}
								</div>
								<div className='flex justify-center mb-4 text-2xl font-medium'>
									{service.title}
								</div>
								<div className='flex justify-center text-Black text-sm'>
									{service.description}
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</Wrapper>
	)
}

export default Services
