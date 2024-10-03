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

export { CountUpItemsProps, CountUpProps, NavLink, WrapperProps }
