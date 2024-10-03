import CountUp from 'react-countup'

//Types
import type { CountUpProps } from '@/types'

export default function MyCountUp({ start, end, duration }: CountUpProps) {
	return <CountUp start={start} end={end} duration={duration} />
}
