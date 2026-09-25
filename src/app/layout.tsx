import "./globals.css";import {MobileNav} from "@/components/mobile-nav";
export const metadata={title:"Bar Manager",description:"Cocktail R&D workbench",viewport:"width=device-width, initial-scale=1, viewport-fit=cover"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><div className="app-shell">{children}</div><MobileNav/></body></html>}