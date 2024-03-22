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
    <footer className="h-[120px] flex items-center justify-center border-t-2 border-white">
      <div className="container flex justify-between w-full text-[#ECF8FF] text-base">
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