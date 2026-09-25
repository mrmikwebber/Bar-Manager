import Link from "next/link";
const items=[["/","Bar","▥"],["/catalog","Add","＋"],["/drinks","Drinks","◇"],["/workbench","Create","✦"]];
export function MobileNav(){return <nav className="mobile-nav">{items.map(([href,label,icon])=><Link href={href} key={href}><span>{icon}</span><small>{label}</small></Link>)}</nav>}