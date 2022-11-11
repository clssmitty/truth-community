import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  excerpt,
  slug,
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">

          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt} 911 Irwin St. was originally addressed as 1011 Irwin St. before the block shifted. The house was originally built by the Frankenbergs, a family that immigrated to America from Germany in the mid 1800's. It was the first house on the block and was originally surrounded by a large area of farmland.</p>

        </div>
      </div>
    </section>
  )
}

export default HeroPost
