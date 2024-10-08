'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

//Components
import SocialWrapper from '@/shared/components/SocialWrapper'

//Mocked Data
import { gallery } from '@/shared/Data/Data'

//Animation
import { smoothIn } from '@/shared/animate'

const Gallery = () => {
	return (
		<SocialWrapper className='flex flex-col pt-40 justify-center overflow-hidden'>
			<div>
				<motion.div
					variants={smoothIn('down', 0.2)}
					initial='hidden'
					animate='show'
					exit='hidden'
					className='uppercase font-semibold text-sm text-WhiteGray text-center'
				>
					- All Collection
				</motion.div>

				<motion.div
					variants={smoothIn('left', 0.5)}
					initial='hidden'
					animate='show'
					exit='hidden'
					className='container grid lg:grid-cols-2 gap-8 py-8'
				>
					{gallery.map(item => (
						<div
							key={item.id}
							className='relative overflow-hidden rounded-xl group'
						>
							<div>
								<Image
									src={item.image}
									alt={item.name}
									width={480}
									height={280}
									className='w-full transition-transform duration-300 transform hover:scale-125 hover:rotate-2'
								/>
							</div>

							<div className='absolute bottom-5 uppercase bg-Black/60 text-[1rem] tracking-widest text-WhiteGray text-left overflow-hidden ml-0 w-max'>
								<div className='px-3 my-2'>{item.name}</div>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</SocialWrapper>
	)
}

export default Gallery
