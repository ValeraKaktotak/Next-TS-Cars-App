import Image from 'next/image'

const Car = () => {
	return (
		<div>
			<Image
				src={'/home.jpg'}
				alt='Home car'
				width={1980}
				height={1080}
				className='translate-z-0 w-[54rem] h-full'
			/>
		</div>
	)
}

export default Car
