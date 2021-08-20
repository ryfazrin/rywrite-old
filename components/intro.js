import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        {CMS_NAME}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Tulisan kecil yang disimpan dalam {' '}
          <span className="underline hover:text-success duration-200 transition-colors">
            {CMS_NAME}
          </span>
        {' '} menjadi Sebuah Cerita.
      </h4>
    </section>
  )
}
