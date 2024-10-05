type WrapperProps = {
	children: React.ReactNode
	className?: string
}

type NavLink = {
	path: string
	label: string
}

type CountUpProps = {
	start: number
	end: number
	duration: number
}

type CountUpItemsProps = {
	id: number
	number: number
	text: string
}

type ProjectProps = {
	id: number
	img: string
	name: string
	des: string
	details: string[]
}

export { CountUpItemsProps, CountUpProps, NavLink, ProjectProps, WrapperProps }
