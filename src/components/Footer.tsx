import { Logo } from "./Logo";
import Link from "next/link";

export function Footer({ title = "" }) {
  return (
    // ! radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgb(14 165 233 / 0.15), transparent 80%)
<footer
    style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0) 1px, #FFFFFF 1px)`,
        backgroundSize: '4px 4px',
        backdropFilter: 'blur(3px)',
    }} 
    className="fixed bottom-0 left-0 right-0 flex justify-start items-center p-5 text-sm leading-3.5">
      <Link href="https://www.framer.com/motion/" target="_blank" rel="noreferrer">
        <Logo />
      </Link>
      <Link
        href="https://www.framer.com/docs/scroll-animations/"
        target="_blank"
        rel="noreferrer"
      >
        <code>{title}</code>
      </Link>
</footer>
  );
}