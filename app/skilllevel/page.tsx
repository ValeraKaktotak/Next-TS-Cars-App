'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

//Mocked Data
import { skills } from '@/shared/Data/Data'

//Animation
import { smoothIn } from '@/shared/animate'

//Components
import { Skills } from '@/shared/components/Skills'
import SocialWrapper from '@/shared/components/SocialWrapper'

const SkillLevel = () => {
	return (
		<SocialWrapper className='text-center mt-24 flex flex-col justify-center'>
			<div className='w-full h-full'>
				<motion.div
					variants={smoothIn('down', 0.2)}
					initial='hidden'
					animate='show'
					exit='hidden'
					className='text-WhiteGray font-medium uppercase text-sm text-center'
				>
					- Only the best
				</motion.div>

				<motion.div
					variants={smoothIn('down', 0.4)}
					initial='hidden'
					animate='show'
					exit='hidden'
					className='font-semibold text-3xl mt-4 lg:mb-16 mb-8'
				>
					Our Satisfied Clients All Around The Globe
				</motion.div>

				<div className='flex h-full flex-col justify-center text-center'>
					<div
						className='flex flex-col gap-12 lg:flex-row items-center justify-center
					mb-12 lg:pt-0 pt-12'
					>
						<motion.div
							variants={smoothIn('right', 0.5)}
							initial='hidden'
							animate='show'
							exit='hidden'
						>
							<Image src='/skills.jpg' alt='Skills' width={400} height={500} />
						</motion.div>

						<motion.div
							variants={smoothIn('left', 0.5)}
							initial='hidden'
							animate='show'
							exit='hidden'
						>
							<Skills skills={skills} />
						</motion.div>
					</div>
				</div>
			</div>
		</SocialWrapper>
	)
}

export default SkillLevel
