import * as React from 'react'
import { Blog } from '../../data/blogs.data'

interface IArticleProps {
	blog: Blog
}

const LelethomArticle: React.FC<IArticleProps> = () => {
	return (
		<div className="grid gap-2 text-black md:gap-4 md:text-opacity-80 ">
			<p className="">
				<span className="text-lg font-medium text-black text-opacity-90">
					Engineering is one of the most honorable jobs in the world. The
					advancement that we, as the human race, made through engineering is
					immense.
				</span>
				&nbsp;However, due to this fact, when we talk about engineers, we only
				think about machinery, among other industrial fields, limiting the
				individual potential of engineers, defining them simply as people who
				facilitate our lives in the technical prospect.
			</p>

			<p>
				Nowadays, the economic progress is no longer our only goal. It finally
				reached our attention that investing in our community is equally
				important, if not more. Given that the human resource is the most
				valuable asset a country can have, the success or failure of a society
				is based on that of its people. With that being said, engineers are now
				deviating more and more from the technical world and reaching out to a
				more social one. Thus, the number of social entrepreneurs is increasing
				significantly.
			</p>

			<p>
				Ahlem Jdidi is a perfect Tunisian representative of the aforementioned
				group. She is a recent INSAT (National Institute of Applied Sciences and
				Technology) graduate, having studied Electromechanical Instrumentation
				and Maintenance technologies. She is now a consultant on behalf of CIMPA
				Gmbh at Airbus.
			</p>

			<p>
				Ever since she was young, Ahlem was passionate about maths and physics,
				and so she chose to pursue engineering. Her university life wasn’t only
				restricted to her studies though. Ahlem had worked on broadening her
				social network, partaking in many events and even being part of the
				event-organization processes. However, one of the experiences that
				affected her the most was being part of the Thomas Jefferson exchange
				program.
			</p>

			<p>
				In one of her speeches, Ahlem declared “It was a once-in-a-lifetime kind
				of experience. I had never travelled before, so it was a great
				opportunity to leave my comfort zone, speak English in public, and
				discover a different culture. I wanted to study something different
				(than engineering), so I chose to study management.”
			</p>

			<p>
				During her stay in the US, she along with two of her friends, Shiheb and
				Ahmed, came up with the idea of “L’ellet’hom”, a project idea that
				enabled them to win the AEIF (Allumni Engagement Innovation Fund)
				competition. And so, Ahlem Jedidi became a co-founder and CEO, bringing
				her project’s idea to life.
			</p>
			<p className="italic">
				“I am very passionate about this project, it gave me the opportunity to
				discover myself in a different context, away from the university which
				has taught me a fair share of experiences. Co-founding this project
				allowed me to expand my network, take on a role in the professional
				world […]. It allowed me enhance my capabilities and further discover
				myself.”
			</p>

			<p>
				L’ellet’hom is a woman entrepreneurship institute whose purpose is to
				help women in Tunisia create their own sustainable businesses. This
				initiative is built on the belief in Tunisian women’s potential. By
				choosing women with nearly no income source, the institute ensures their
				initiation in the world of business, and then a select few are taken
				under the wing of this organization, where they would receive help and
				guidance in building and stabilizing their businesses, inspired mostly
				by their crafts.
			</p>

			<p>
				The distinctiveness of this project, as for its efficiency, perhaps
				resides in the methodology adopted. Lellet’hom offers workshops in
				Tunisian Dialect, presenting all essential business knowledge in a
				simplified comprehensible manner.
			</p>

			<p>When asked for advice, Ahlem’s response was:</p>

			<p className="italic">
				“Don’t limit yourself to engineering and studies- because that’s not all
				there is to life. There are many other situations in which you need to
				be as a human and not only as an engineer [...] Make good use of the
				energy within you. We all have power within us, … so try the best you
				could to invest your energy in what may benefit you in the future. [...]
				We start as engineers, but we don’t know what paths could open up along
				the way- it’s unpredictable. Make use of every opportunity you’re
				presented with. Try, learn from others, and be you. Have ambitions, and
				be proactive.”
			</p>

			<p>
				It’s a humanitarian experience, seeing the conditions in which these
				women live and the daily challenges they have to go through. It must be
				truly inspiring, to meet talented, motivated women that truly want to
				and can accomplish so much, and to help them bring their visions to
				life.
			</p>

			<p>
				Such an inspiring story can only reveal the limitless number of paths
				that can be chosen at any point in our journey through life, no matter
				what our career may be. Being technically or scientifically oriented
				must not keep us from contributing to our community.
			</p>
		</div>
	)
}

export default LelethomArticle
