import * as React from 'react'
import styles from './speakers.module.scss'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { useAnalytics } from 'use-analytics'
import clsx from 'clsx'

const nader = {
	firstName: 'Nader',
	lastName: 'Zouaoui',
	position:
		'CoFounder of a freshly made startup “eDonec, For better Generations”',
	picture: '/speakers/nader.webp',
	social: {
		fb: 'https://www.facebook.com/Nader.Zouaoui1',
		linkedin: 'https://www.linkedin.com/in/nader-zouaoui/',
	},
}

const ahlem = {
	firstName: 'Ahlem',
	lastName: 'Jedidi',
	position: 'Co-Founder of The Women Entrepreneurship Institute',
	picture: '/speakers/ahlem.webp',
	social: {
		fb: 'https://www.facebook.com/ahlem.jedidi',
		linkedin: 'https://www.linkedin.com/in/jedidiahlem/',
	},
}

const afef = {
	firstName: 'Afef Bennani',
	lastName: 'Ben Abdelghani',
	position: 'Associate Professor (Maître de Conférences)',
	picture: '/speakers/afef.webp',
	social: {
		fb: 'https://www.facebook.com/afef.bennani.7',
		linkedin: 'https://www.linkedin.com/in/afef-bennani-ben-abdelghani/',
	},
}

const ahmed = {
	firstName: 'Ahmed',
	lastName: 'Ben Hamouda',
	position:
		'PMP®, CSM™, SPOC®, AgileExpert™, ITIL®, LSSBB, DMP Digital Agile Transformation & Start-Up Acceleration Expert',
	picture: '/speakers/ahmed.webp',
	social: {
		fb: 'https://www.facebook.com/AhmedBenHamouda07',
		linkedin: 'https://www.linkedin.com/in/benhamouda/',
	},
}
const arr = [nader, ahlem, afef, ahmed]

const Speakers: React.FunctionComponent = () => {
	const { track } = useAnalytics()

	return (
		<section className={styles.greyBg}>
			<div className={styles.container}>
				<h2 className={styles.baseTitle}> our juries </h2>
				<div className="grid gap-y-8 md:grid-cols-4 gap-x-4">
					{arr.map((e, ind) => (
						<div className={styles.el} key={ind}>
							{/* images */}
							<div className={styles.elImage}>
								<img
									alt={`${e.firstName} ${e.lastName} picture`}
									src={e.picture}
								/>
								{/* social element */}
								<div
									className={clsx(
										'absolute bottom-0 z-10 grid items-center justify-center w-full grid-flow-col-dense gap-4 py-3 text-2xl text-white transition duration-200 transform bg-black bg-opacity-75 md:translate-y-full',
										styles.appear
									)}
								>
									<a
										title="linkedin link"
										href={e.social.linkedin}
										rel="noreferrer"
										target="_blank"
										onClick={() => track(`${e.firstName} linkedin click`)}
									>
										<FaLinkedin />
									</a>
									<a
										title="facebook link"
										href={e.social.fb}
										rel="noreferrer"
										target="_blank"
										onClick={() => track(`${e.firstName} facebook click`)}
									>
										<FaFacebookF />
									</a>
								</div>
								{/* social elements */}
							</div>
							{/* images */}
							<h3>
								{e.firstName.toUpperCase()} <br /> {e.lastName.toUpperCase()}
							</h3>
							<p> {e.position} </p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Speakers
