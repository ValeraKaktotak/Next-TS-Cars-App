'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

//Components
import MyCountUp from '@/shared/components/CountUp'
import SocialWrapper from '@/shared/components/SocialWrapper'

//Mocked data
import { countUpItems } from '@/shared/Data/Data'

//Animation
import { smoothIn } from '@/shared/animate'

const About = () => {
	const { ref, inView } = useInView({ threshold: 0.5 })

	return (
		<>
			<SocialWrapper>
				<div className='flex flex-col gap-12 items-center justify-center mb-12 min-h-screen lg:flex-row lg:mb-0 pt-28 lg:pt-0'>
					<motion.div
						variants={smoothIn('right', 0.5)}
						initial='hidden'
						animate='show'
						exit='hidden'
					>
						<Image
							src={'/about.jpg'}
							alt='About image'
							width={500}
							height={400}
						/>
					</motion.div>

					<motion.div
						variants={smoothIn('left', 0.5)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl'
					>
						<div className='uppercase font-medium text-sm text-WhiteGray'>
							- Finest Transport
						</div>

						<div className='font-semibold text-3xl mt-8'>
							We Value Our Clients And Want Them To Have A Nice Experience
						</div>

						<p className='text-Black text-sm mt-8 leading-7'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
							eius inventore tenetur corrupti! Architecto error ipsum repellat
							nihil, recusandae ut quisquam maxime soluta, tenetur ea expedita.
							Corporis vel animi velit. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Soluta eius inventore tenetur corrupti!
							Architecto error ipsum repellat nihil, recusandae ut quisquam
							maxime soluta, tenetur ea expedita. Corporis vel animi velit.
						</p>

						<button className='flex-none rounded-full bg-Red px-6 py-2.5 text-sm font-normal hover:bg-black transition-all duration-300 text-White mt-4'>
							Read More
						</button>

						{/* Count up */}
						<div
							ref={ref}
							className='flex justify-center mt-12 gap-12 flex-wrap'
						>
							{countUpItems.map(item => (
								<div key={item.id} className='text-center'>
									<div className='text-Red text-3xl'>
										{inView && (
											<MyCountUp start={0} end={item.number} duration={3} />
										)}
										+
									</div>
									<div className='text-Black mt-2 text-sm'>{item.text}</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</SocialWrapper>
		</>
	)
}

export default About
