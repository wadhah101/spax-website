import * as React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IArticleProps {}

const Title: React.FC = ({ children }) => (
	<h2 className="mb-1 text-2xl font-bold "> {children} </h2>
)

const MiniTitle: React.FC = ({ children }) => (
	<h2 className="mb-1 text-xl font-semibold "> {children} </h2>
)

const Br = () => <div className="mb-2" />

const TalksArticles: React.FC<IArticleProps> = () => {
	return (
		<div className="grid gap-4 text-black md:text-lg md:text-opacity-90 ">
			<p>
				Human. That is the first word that comes to mind when you look back at
				the talks and debate that took place in{' '}
				<strong>
					IEEE Region 8’s first SPAx event, a collaboration between ENIT &
					INSAT’s IEEE Student Branches,
				</strong>
				on the 8th of March 2021. The exchange of information that flowed
				between politicians, engineers, CEOs, directors and managers,
				representatives of organizations in the public and private sector, and
				our engineering students was an open discussion to say the least. The
				dialogue was fruitful beyond compare, as even our speakers took part in
				asking each other questions during Q&A. From attendees to hosts to
				invitees, people interacted with each other, debated, and freely
				expressed themselves as colleagues and equals, regardless of their age,
				background or experience. Enriching conversations, unfiltered yet laced
				with respect, energetic, courageous and straight to the point is how our
				talks and debate sections could be described as.
			</p>
			<Br />
			<ol className="grid gap-4 ">
				<li>
					<Title>I. Our Talks</Title>
					<p>
						The speakers that led our talks session were
						<strong>Mr. Ahmed Nouisser</strong> , Co-founder and CEO of
						iCompass, an innovative technology startup specialized in Deep
						Learning and Artificial intelligence,{' '}
						<strong> Mr. Mohamed Nizar Yaïche</strong> , the former Minister of
						Finance in Tunisia, and a Strategy and Consultant Leader, and{' '}
						<strong>Mr. Mohammed Amine Sdiri</strong>, a former Minister’s
						Advisor in the Ministry of Development, Investment and International
						Cooperation, and Project Director at FHI360, that works on improving
						employment opportunities and financial independence in marginalized
						areas.
						<Br /> Our talk session began in a unique manner. Our speakers
						started with a Q&A section, right after introducing themselves. The
						audience was pleased with the choice, as people took turns to ask
						every question that came to their mind, our speakers trying to keep
						up with the microphones’ course. As for this article, we have
						decided to provide a recap for our readers, reminding them of the
						insights our speakers full-heartedly provided. The subjects
						encountered were: democracy in politics, economy and finance,
						startups and innovation, starting a business, and flexibility in
						engineers’ career paths.
					</p>
					<ol className="grid gap-4 mt-4 md:mt-8 md:gap-8">
						<li>
							<MiniTitle> 1. An overview on democracy </MiniTitle>
							<div>
								<p className="italic">
									&quot;Democracy is an investment. &quot;
								</p>
								<p>
									As all investment processes, democracy has no magic formula
									and requires time to be well-established. Obstacles and issues
									that may appear in a democratic system are resolved in the
									same manner that a doctor heals their patients: finding a cure
									for the root cause of the apparent symptoms, rather than
									solely curing the side-effects on the surface. A key-factor to
									the success of democracies is teamwork. Often, it also implies
									individual sacrifice for the sake of the collective health and
									wealth. Teamwork, along with the right investment and
									management of all available resources, is the right path
									towards instilling a healthy democratic political system.
									<p className="my-1 italic ">
										« Sciences are democracies’ bricks, and values their cement.
										»
									</p>
									In order for a democracy to thrive, the values of the
									population must meet at a common vision: for each individual
									to assume their responsibilities and take on their roles in
									society as authentic and honest as possible, and as
									competently and innovative. In fact, education, or knowledge,
									is a major factor of success, whether it is exposed through a
									country’s resource management, or through its national and
									international relations. As the global pandemic slowly comes
									to an end, science and values gain more of their importance,
									and define, strengthen or weaken, the relationships between
									countries, between political parties and the people, and even
									between businesses and individuals.
								</p>
							</div>
						</li>
						<li>
							<MiniTitle>2. The Economy and Finance of countries</MiniTitle>
							<div>
								<p className="italic">
									«Four main concepts reflect a country’s economy and
									finance...»
								</p>
							</div>

							<p>
								In order to understand the financial and economic state of
								countries, one must be able to understand four basic notions:
								GDP, Sovereign Credit Ratings, Debt, and Spread. To further
								expand on these key elements, as they are technical terms, we
								have conducted a short research presented below.
								<Br /> The first element,
								<strong> GDP or “Gross Domestic product”</strong> , encompasses
								all private and public consumption, government outlays or
								expenses, investments, additions to private inventories, paid-in
								construction costs, and the foreign balance of trade. Exports
								are added to the value and imports are subtracted. [1]
								<Br />
								Of all the components that make up a country&apos;s GDP, the
								foreign balance of trade is especially important. The GDP of a
								country tends to increase when the total value of goods and
								services that domestic producers sell to foreign countries
								exceeds the total value of foreign goods and services that
								domestic consumers buy. In short, it is the monetary value of
								all finished goods and services made within a country during a
								specific period. Though it has limitations, GDP is a key tool to
								guide policymakers, investors, and businesses in strategic
								decision making. [1]
								<Br /> The second element,
								<strong>Sovereign Credit Ratings</strong>, represents
								independent assessments of the creditworthiness of a country or
								sovereign entity carried out by a credit rating agency through
								an evaluation of its economic and political environment.
								Obtaining a good rating facilitates access to funding in
								international bond markets. [2]
								<Br />
								Sovereign credit ratings can also give investors insights into
								the level of risk associated with investing in the debt of a
								particular country, including any political risk. For example,
								Moody’s considers a Baa3 or higher rating to be of investment
								grade, and a rating of Ba1 and below is speculative. Standard &
								Poor&apos;s gives a BBB- or higher rating to countries it
								considers investment grade, and grades of BB+ or lower are
								deemed to be speculative. [2] In short, these ratings classify
								countries into standardized levels, providing a ranking of
								current financial and economic characteristics of countries
								around the globe.
								<Br /> The third element, which is <strong>Debt</strong> ,
								exposes the awaiting future expenses that would be deducted
								after a period of time. Debt can either be represented as
								‘internal debt’ or ‘external debt’, which respectively refer to
								debt owed to lenders who are within the country and debt that is
								owed to lenders in foreign areas. Debt can also be classified as
								‘short-term’, typically lasting for less than a year, or
								‘long-term’, lasting for more than ten years. [3]
								<Br /> An unfavorable change in exchange rates and an overly
								optimistic valuation of the payback from the projects financed
								by the debt can make it difficult for countries to repay. The
								only recourse for the lender, who cannot seize the
								government&apos;s assets, is to renegotiate the terms of the
								loan. Governments assess the risks involved in taking sovereign
								debts since countries that default on sovereign debts will have
								difficulty obtaining loans in the future. [3]
								<Br />
								The last element, <strong>Spread</strong> , has several meanings
								in finance. However, they all refer to the difference between
								two prices, rates or yields. One of the most common types is the
								bid-ask spread, which refers to the gap between the bid (from
								buyers) and the ask (from sellers) prices of a security or
								asset. Spread can also refer to the difference in a trading
								position – the gap between a short position (that is, selling)
								in one futures contract or currency and a long position (that
								is, buying) in another. [4] GDP, Sovereign Credit Ratings, Debt,
								and Spread are the four elements that envelop a country’s
								financial and economic state.
							</p>
						</li>

						<li>
							<MiniTitle>3. Starting businesses and maintaining them</MiniTitle>

							<p className="italic">
								« Always keep an eye on the market. Don’t bury your head in your
								business and forget all else. »
							</p>
							<p>
								Markets are ever-changing. Opportunities emerge and go dormant
								as do the obstacles and the challenges. Being aware of the
								subtle changes in the market helps you find better paths and
								evaluate your intended or current strategies; it could guide you
								in decision-making and provide you with the feedback you seek.
							</p>
							<p className="my-2 italic ">
								« Business implies teamwork, and teamwork is built on trust. »
							</p>
							<p>
								Team players need to trust each other to be able to rely on one
								another and delegate roles or tasks. The relationship between
								co-founders though relies on something far greater: blind trust
								in a new environment. Whether you are courageous enough or not
								to place that pillar, you will face situations where this trust
								will be tested, and it is then that the nature of the
								relationship floats to the surface. Moreover, teamwork surpasses
								the borders of the business itself. For example, cooperating
								with competitors to unite on a common goal creates a strong
								force and multiplies the competencies, hence speeding up the
								process.
							</p>
						</li>

						<li>
							<MiniTitle>4. Innovation in a world of startups</MiniTitle>
							<p className="italic">
								« The idea is what matters most. The more innovative it is, the
								better. »
							</p>
							<p>
								Launching a startup may not have an ideal timing, but as all
								challenges, it does require the right mindset to ensure a good
								start. As San Tzu mentions in The Art of War “If you know the
								enemy and know yourself, you need not fear the result of a
								hundred battles. If you know yourself but not the enemy, for
								every victory gained you will also suffer defeat. If you know
								neither the enemy nor yourself, you will succumb in every
								battle.” So at least, you have to know yourself before
								everything. Indeed, in our context, it is best to kick off your
								startup once you know that you have the confidence it takes and
								the persistence needed to face the obstacles, as unexpected as
								they may come, head on.
								<Br /> Innovation is limitless. And so, aim at providing
								high-added value, adopt innovative financial models and
								carefully choose your investors if you will. When gathering
								resources, keep your vision in mind, and find what suits it
								best. Trying new concepts may take you a longer way then
								sticking to the traditional way of things, to ensure monetary
								resources for example.
							</p>
							<p className="my-2 italic ">
								« Raise the bar for yourself. Raise the bar for yourself before
								raising it for your team. »
							</p>
							<p>
								In face of difficulties, do not limit yourself and do not stop.
								Think outside the box, search for a solution or invent one, and
								whatever happens you’d at least have given it your absolute
								best. Success in a world of startups does seem like a matter of
								luck, but luck itself is a skill, a competency. Learning from
								your errors and mistakes, and understanding why those events
								happened, maximizes your chances of success. And never forget to
								always keep on learning. As your knowledge accumulates, your
								skillset does too.
							</p>
						</li>

						<li>
							<MiniTitle>5. Flexibility in engineers’ career paths </MiniTitle>
							<p className="my-2 italic ">
								« We will always need engineers that are good in their
								profession, just as we need good technicians. »
							</p>
							<p>
								It has become somewhat of a trend these days for engineers to
								seek professions and career paths out of the ordinary and the
								expected, taking on job positions that don’t require a specific
								engineering diploma. However, it is essential to remember that
								the classical path set for an engineer is still of great value,
								and is necessary for the well-functioning of society. An
								engineering student can tap into modernization in pursuing any
								career path; the profession of an engineer, in its essence,
								would never be outdated. Civil engineering, architecture,
								electrical engineering, and all other fields would always have
								lasting impact in the world of production, economics, and
								technology. Find a path that is aligned with your interests, and
								follow it to your best potential.
							</p>
						</li>
					</ol>

					<div className="mt-8" />
					<Title>II. The Debate </Title>
					<p>
						The debate was initiated by our moderator
						<strong>Mr. Kais MEJRI</strong>, General Director of Innovation &
						Technology Development in the Tunisian Ministry of Development and
						Energy, and global speaker on future technologies. Our Debaters were{' '}
						<strong>Mr. Chiheb Bouden</strong> former Minister of Higher
						Education and Scientific Research in Tunisia and Professor at ENIT
						university,
						<strong>Ms. Nesrine Zoghlami</strong> , Director of the Preparatory
						Institute of Engineering Studies El Manar (IPEIM),
						<strong>Mr. Oussema Chihi</strong> , Professor at ISET Nabuel,
						Member of the Order of Tunisian Engineers and researcher at ENIT,
						and <strong>Mr. Aymen Ben Ali</strong> , Chief Engineer, Member of
						the Order of Tunisian Engineers and Deputy Director at the Tunisian
						Ministry of Economy, Finance and Investment support.
					</p>
					<ol className="grid gap-4 mt-4 md:mt-8 md:gap-8">
						<li>
							<MiniTitle>1. What makes an engineer? </MiniTitle>
							<p>
								The debate started with a seemingly simple yet complex question:
								What truly makes an engineer? What is the essence of an
								engineering diploma, or rather, its education curriculum along
								with its institutes’ environment? The answer to that question
								resides in one word: “Versatility”.
								<Br />
								Being an engineer is to have enough knowledge covering a broad
								spectrum of disciplines. Just as the main subjects, relating to
								the engineer’s expertise, is important, so are the soft skills
								acquired, and the familiarity with social and human sciences.
								<Br /> Let’s take negotiation skills for example, an essential
								ability an engineer must perfect. Negotiation has its forms of
								art- the eloquence of speech and the subtlety of convincing
								argumentative propositions all require experience to be
								well-presented.
								<Br /> It’s for that very reason that an engineer’s knowledge is
								expected to englobe far further than say math or chemistry, and
								cover a good portion of “life skills” and “social competencies”
								– often referred to as soft skills as opposed the hard skills
								(the other half that makes up an engineer’s profile). In fact,
								soft skills may be the main criteria required of an engineer at
								certain positions like project management.
							</p>
						</li>
						<li>
							<MiniTitle>
								2. Must-have skills an engineer should learn
							</MiniTitle>
							<p>
								Engineers must have the capability of auto-learning or
								self-learning to find solutions, and they learn to do so under
								tight time and resource restrictions. Learning to deal with
								stressful situations is indirectly taught in first few years of
								engineering studies. The struggles engineering students face
								prepare them for the challenges of the real world. It is also
								through confidence, and believing in your potential, that
								success starts to bloom.
								<Br /> Certifications have been a guarantee of knowledge and
								expertise for many years now. With online certificates emerging,
								educational and industrial online platforms have been expanding
								their volume of taught material and their quality. Today,
								getting certified in your domains of interest not only prove
								that you have learnt the content covered, but also exposes your
								ability to learn on your own – a significant trait unlike
								another.
							</p>
						</li>
						<li>
							<MiniTitle>3. Brain-drain : root causes and outcomes</MiniTitle>
							<p className="not-italic  regular">
								In developing countries nowadays, it seems as though young
								engineers are in face of two possible options: travelling to a
								developed country, or stagnating in the first stable job they
								meet. Yet, engineers are meant to be the creators of activity,
								of job positions, businesses and projects within their own
								country. Every country needs its youth, it needs their
								productivity, and it needs its engineers. Persistency in work is
								a key element to success. Whether an engineer continues towards
								the path of his/her educational field, or decides to embark on a
								journey in administrations, politics, NGOs, or perhaps even
								starting a business, participating in the country’s machinery is
								a must.
								<Br /> Brain drain isn’t all about income and money. The
								difference in earnings is often not revolutionary, just as
								changing your car to a newer model or moving to a bigger house
								or apartment doesn’t necessarily make your life easier or add to
								your happiness and well-being. When it comes to brain drain, the
								main factor in the decision-making process is the ecosystem of
								countries. Youth are attracted to countries through their
								environments, not the potential money they could earn. In a
								world of media it is often easier to get the bad news rather
								than the good, and so ‘abroad’ becomes synonym of ‘better’. But
								how can one avoid that trail of thought? A shift in mentality is
								needed: seek the good news, take on responsibility and do your
								work as a constructive element in society.
								<Br /> What does the brain drain serve then, for engineers?
								Apart from gaining new experiences, travelling abroad generates
								many new ideas and builds up a surge of energy seeking to cause
								change. Engineers that return back to their countries from more
								developed ones are driven with innovation, and there’s a good
								chance they’d consider creating their own enterprise by
								extracting their knowledge and skills.
								<Br /> If you seek experience abroad, make good use of the
								change of environment to leave your comfort zone and take on new
								challenges, and try to remain connected to your network by being
								part of alumni programs for example. Reconnect with other
								engineers and share your experience with engineering students,
								because as IEEE’s INSAT Student branch ex-Chairman, Mohamed
								Amine Bouneb, says “We rise by lifting each other” and that is
								truly the case.
							</p>
						</li>
					</ol>
				</li>
				<li className="text-sm">
					<p> References </p>
					<ul>
						<li>[1] Investopedia: Gross Domestic Product (GDP)</li>
						<li>[2] Investopedia: Sovereign credit rating</li>
						<li>[3] Investopedia: Sovereign debt </li>
						<li>[4] Investopedia: Spread definition</li>
					</ul>
				</li>
			</ol>
		</div>
	)
}

export default TalksArticles
