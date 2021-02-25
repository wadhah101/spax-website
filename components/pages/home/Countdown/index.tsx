import React from 'react'
import CountdownElement from './Element'
import duration from 'dayjs/plugin/duration'
import dayjs, { Dayjs } from 'dayjs'
import clsx from 'clsx'

const periods = ['Week', 'Day', 'Hour', 'Minute', 'Second']
const dateDiffFactoryFix = (current: Dayjs, event: Dayjs): number[] => {
	const diff = dayjs.duration(event.diff(current))
	return [
		diff.seconds(),
		diff.minutes(),
		diff.hours(),
		diff.days(),
		diff.weeks(),
	].map((e) => Math.max(0, e))
}

interface ICountdownProps {
	date: Dayjs
}

const Countdown: React.FC<ICountdownProps> = ({ date }) => {
	const [data, setdata] = React.useState(new Array<number>(5).fill(0))
	const dataView = React.useMemo(
		() =>
			[...data].reverse().map((e, ind) => ({
				value: e,
				text: `${periods[ind]}${e > 1 ? 's' : ''}`,
			})),
		[data]
	)

	React.useEffect(() => {
		dayjs.extend(duration)
		const interval = setInterval(() => {
			const newArr = dateDiffFactoryFix(dayjs(), date)
			setdata(newArr)
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [])
	return (
		<div className="grid grid-cols-2 gap-4 md:grid-cols-5 ">
			{dataView.map(({ value, text }, ind) => (
				<div
					className={clsx(ind === 0 && 'col-span-2 md:col-span-1')}
					key={text}
				>
					<CountdownElement value={value} text={text} />
				</div>
			))}
		</div>
	)
}

export default Countdown
