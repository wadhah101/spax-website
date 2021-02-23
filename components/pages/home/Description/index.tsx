import React from 'react'
import Link from 'next/link'
import styles from './description.module.scss'

const Description: React.FunctionComponent = () => {
	return (
		<section className={styles.baseContainer}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>
					about the <br /> <span className={styles.important}>Event</span>
				</h2>
				{/* <Countdown /> */}
				<p className={styles.writing}>
					Getting into the entrepreneurial world is a risky adventure full of
					difficulties, especially for young entrepreneurs lacking technical
					skills, business intelligence and funds. Therefore, highlighting its
					motto&nbsp;
					<strong>&quot;Advancing Technology For Humanity&quot;</strong>, IEEE
					R8 organization launched a very promising initiative known as the IEEE
					R8 Entrepreneurship Initiative, aiming at strengthening the knowledge
					of young entrepreneurs and exposing them to the IEEE wide network. In
					order to reach this goal, IEEE R8 is relying on its very unique and
					strong entrepreneurship ecosystem consisting of a variety of technical
					foundations and organizational units. The IEEE R8 entrepreneurship
					initiative was the best chance for us as youth to make a change and
					that’s why we decided to organize the&nbsp;
					<strong>
						“Tunisia Entrepreneurship Summit: Industry innovation and
						Infrastructure (3I) ”
					</strong>
					&nbsp; It will be a two-day summit which encompasses various panel
					sessions, workshops and mentorship for the future entrepreneurs about
					the technical and soft skills needed to build a business and to make
					their ideas get developed and see the light, and also a pitch
					competition for teams with innovation, startups and small business
					owners.
				</p>
				<p className={styles.writing}>
					The event will be held in the entrepreneurship week along with other
					similar event(s) from this initiative since we believe that we need to
					cover all the Tunisian territory and we want the participants to have
					various themes for the competition. There will be 3 winners from the
					competition who will be selected to participate in the YP summit to
					pitch their ideas.
				</p>
				<Link href="/challenge" passHref>
					<a className={styles.bigJoinButton}>
						Check the challenge page for more details !
					</a>
				</Link>
			</div>
		</section>
	)
}

export default Description
