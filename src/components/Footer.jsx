import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '@/icons'
import Link from "next/link";

const Footer = () => {

  const icons = [
    {
      id: 1,
      path: "",
      icon: <YoutubeIcon />
    },
    {
      id: 2,
      path: "",
      icon: <TwitterIcon />
    },
    {
      id: 3,
      path: "",
      icon: <InstagramIcon />
    },
    {
      id: 4,
      path: "",
      icon: <FacebookIcon />
    }
  ]

  return (
    <footer className="md:h-[120px] md:py-0 py-5 flex items-center justify-center border-t-2 border-white">
      <div className="container flex md:flex-row md:gap-1 gap-3 flex-col justify-between md:items-start items-center w-full text-[#ECF8FF] md:text-base text-sm">
        <p>جميع الحقوق محفوظة © ل Koora World</p>

        <div className="flex items-center gap-3">
          {/* Icons */}
          {
            icons.map(({ id, icon, path }) => (
              <Link href={path} key={id}>{icon}</Link>
            ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer