"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
const items=[["/","Bar","▥"],["/catalog","Add","＋"],["/drinks","Drinks","◇"],["/workbench","Create","✦"]];
export function MobileNav(){const pathname=usePathname();return <nav className="mobile-nav">{items.map(([href,label,icon])=>{const active=href==="/" ? pathname==="/"||pathname.startsWith("/bottles/") : pathname.startsWith(href);return <Link href={href} key={href} className={active?"active":""}><span>{icon}</span><small>{label}</small><i aria-hidden="true"/></Link>})}</nav>}