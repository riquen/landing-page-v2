import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'

import Description from '@/components/Description'
import PageTitle from '@/components/PageTitle'

export default function Contact() {
  return (
    <div className="w-full flex flex-col justify-center py-6 gap-4">
      <PageTitle>CONTACT ME</PageTitle>
      <Description>Thanks for viewing this page! Send me suggestions.</Description>
      <div className="flex justify-center gap-6 mt-8">
        <Link
          href="https://github.com/riquen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex outline-none"
        >
          <FaGithub className="w-10 h-10 md:w-14 md:h-14 stroke-slate-950" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/henrique-arantes-nunes-5b8089186/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex outline-none"
        >
          <FaLinkedinIn className="w-10 h-10 md:w-14 md:h-14 stroke-slate-950" />
        </Link>
        <Link
          href="https://twitter.com/hriquen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex outline-none"
        >
          <FaXTwitter className="w-10 h-10 md:w-14 md:h-14 stroke-slate-950" />
        </Link>
      </div>
    </div>
  )
}
