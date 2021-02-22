import type { NextApiRequest, NextApiResponse } from 'next'

// TODO define form fields with  interface and yup

type Confirmation = {
	status: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ReqBody = {
	load: number
}

export default (
	req: NextApiRequest,
	res: NextApiResponse<Confirmation | Error>
): void => {
	if (req.method !== 'POST') {
		res.status(400).json({ name: 'unothirized method', message: '' })
		return
	}

	res.status(200).json({ status: 'ok' })
}
