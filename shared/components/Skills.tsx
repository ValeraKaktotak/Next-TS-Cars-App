'use client'
import { FC, useEffect, useRef, useState } from 'react'

//Types
import { SkillsProps } from '@/types'

interface ISkillsProps {
	skills: SkillsProps[]
}

export const Skills: FC<ISkillsProps> = ({ skills }) => {
	const ref = useRef<HTMLDivElement>(null)
	const [visible, setVisible] = useState<boolean>(false)
	const [progress, setProgress] = useState<number[]>(skills.map(() => 0))
	const [animatedProgress, setAnimatedProgress] = useState<number[]>(
		skills.map(() => 0)
	)

	useEffect(() => {
		function onScroll() {
			if (ref.current) {
				const { top, bottom } = ref.current.getBoundingClientRect()
				const isVisible = top < window.innerHeight && bottom >= 0
				if (isVisible && !visible) {
					setVisible(true)
					setProgress(skills.map(skill => skill.level))
				}
			}
		}
		window.addEventListener('scroll', onScroll)
		onScroll()

		return () => window.removeEventListener('scroll', onScroll)
	}, [skills, visible])

	useEffect(() => {
		const intervalId = setInterval(() => {
			setAnimatedProgress(prevProgress => {
				const newProgress = prevProgress.map((value, index) => {
					const diff = progress[index] - value
					const step = Math.ceil(diff / 10)
					return value + step
				})

				const allComplete = newProgress.every(
					(value, index) => value >= progress[index]
				)
				if (allComplete) {
					clearInterval(intervalId)
				}

				return newProgress
			})
		}, 100)
		return () => {
			clearInterval(intervalId)
		}
	}, [progress])

	return (
		<div>
			<div ref={ref} className='grid md:grid-cols-1 gap-4 p-10'>
				{skills.map((skill, i) => (
					<div key={i} className='mb-4 min-w-36'>
						<div className='flex justify-between items-center mb-2 gap-2'>
							<span>{skill.name} </span>
							<span className='font-bold text-sm'>{animatedProgress[i]} %</span>
						</div>

						<div className='relative w-full h-1 bg-Black rounded-full overflow-hidden'>
							<div
								className='absolute top-0 left-0 h-1 bg-WhiteGray rounded-full'
								style={{
									width: `${visible ? animatedProgress[i] : 0}%`,
									transition: 'width 1s',
								}}
							></div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
