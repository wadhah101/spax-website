import { socialElements } from '../data/social.data'
import { FaMailBulk } from 'react-icons/fa'
import React from 'react'

const Footer: React.FC = () => {
	return (
		<footer style={{ background: '#444', padding: '8vh 0', color: '#222' }}>
			<div className="flex flex-col text-white mcontainer md:flex-row">
				<div>
					<img
						loading="lazy"
						alt="footer image"
						className="w-60"
						src="/logo/logo-spax-2021-white-400.png"
					/>
					<p className="mt-6 text-sm font-semibold">
						© 2021 All Right reserved
					</p>
				</div>
				<div className="flex-grow" />
				{/* questions , follow  */}
				<div className="">
					<div className="mb-6">
						<h2 className="mb-1 text-lg font-semibold uppercase">follow us</h2>
						{/* social media icons */}
						<div className="flex items-center ">
							{socialElements.map((e) => (
								<a
									title={e.name}
									href={e.href}
									target="_blank"
									rel="noopener noreferrer"
									key={e.href}
									className="mr-2 text-2xl"
								>
									<e.icon />
								</a>
							))}
						</div>
					</div>
					{/* social media icons */}
					{/* emails */}
					<h2 className="mb-1 text-lg font-semibold uppercase">contact us</h2>
					<div className="">
						{[
							{ icon: FaMailBulk, text: 'ieee.insat.sb@gmail.com' },
							{ icon: FaMailBulk, text: 'sb.enit@ieee.org' },
						].map((e, ind) => (
							<div className="flex items-center" key={ind}>
								<div>
									<e.icon />
								</div>
								<p className="ml-2"> {e.text} </p>
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
