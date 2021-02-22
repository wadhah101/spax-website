import clsx from 'clsx'
import * as React from 'react'
import {
	iiotCard,
	iiotIntro,
	ngcCards,
	ngcIntro1,
	ngcIntro2,
	roiCards,
	roiIntro,
} from './pitchCard.data'
import styles from './pitch.module.scss'
import PitchDescriptionCard from './PitchDescriptionCard/PitchCard'
import SpecialCard from './PitchDescriptionCard/SpecialCard'

const PitchCompetition: React.FunctionComponent = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.baseContainer}>
				{/* intro */}
				<h2 className={styles.title}>
					OUR PITCH <br />
					<span className={styles.important}> COMPETITION </span>
				</h2>

				<p className={styles.intro}>
					The program “IEEE Region 8 Entrepreneurship Initiative“ this year is
					focused on the topic{' '}
					<strong>
						“Advance Technology for Humanity: Sustainable Engineering”
					</strong>{' '}
					in form of a competition for established teams or formed startups that
					present their thematic solutions at a local competition. The
					<span className={styles.acc}>
						&quot;Tunisian Entrepreneurship Summit: Industry Innovation and
						Infrastructure&quot;
					</span>
					encompasses a pitch competition, for the young entrepreneurs and
					promising ideas, highlighting the 9th SDG which is &quot;Industry
					Innovation and Infrastructure&quot; as a thematic. The contest will be
					around these axes:
				</p>
				{/* intro */}

				{/* part 1 */}
				<div className={styles.titleContainer}>
					<h3 className={styles.subTitle}>
						Increasing ROI (Return on investment)
					</h3>
				</div>
				<p className={styles.intro}>{roiIntro}</p>
				<ul className={styles.cardGrid}>
					{roiCards.map((e) => (
						<PitchDescriptionCard key={e.title} title={e.title} text={e.text} />
					))}
				</ul>
				{/* part 1 */}

				{/* part 2 */}
				<div className={styles.titleContainer}>
					<h3 className={styles.subTitle}>
						Industrial Internet of Things (IIoT)
					</h3>
				</div>
				<p className={styles.intro}>{iiotIntro}</p>
				<ul className={styles.cardGrid}>
					{iiotCard.map((e) => (
						<PitchDescriptionCard key={e.title} title={e.title} text={e.text} />
					))}
				</ul>
				{/* part 2 */}

				{/* part 2 */}
				<div className={styles.titleContainer}>
					<h3 className={styles.subTitle}>Next generation cities</h3>
				</div>
				<p className={styles.intro}>{ngcIntro1}</p>
				<p style={{ marginTop: '0.25rem' }} className={styles.intro}>
					{ngcIntro2}
				</p>

				<ul className={clsx(styles.cardGrid, styles.lastElFullWidth)}>
					{ngcCards.map((e) => (
						<PitchDescriptionCard key={e.title} title={e.title} text={e.text} />
					))}
					<SpecialCard />
				</ul>
				{/* part 2 */}
			</div>
		</section>
	)
}

export default PitchCompetition
