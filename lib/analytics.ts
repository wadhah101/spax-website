import googleAnalytics from '@analytics/google-analytics'
import { Analytics } from 'analytics'

const id = 'UA-182654929-1'

export const defaultAnalytics = Analytics({
	app: 'awesome-app',
	plugins: [
		googleAnalytics({
			trackingId:
				process.env.NODE_ENV === 'development' ? 'UA-000000000-4' : id,
		}),
	],
})
