export default function Navbar({ active = "" }) {
  const links = [["Roman to Urdu","/"],["Urdu to Roman","/urdu-to-roman"],["Names","/names"],["Word Meanings","/word-meanings"],["Poetry Maker","/poetry-maker"],["Blog","/blog"],["Contact","/contact"]];
  return <header className="site-header"><a className="brand" href="/"><span className="brand-mark">ر</span><span>Roman2Urdu.com</span></a><nav className="nav-links" aria-label="Main navigation">{links.map(([label,href])=><a key={href} className={active===href?"nav-active":""} href={href}>{label}</a>)}</nav></header>;
}
