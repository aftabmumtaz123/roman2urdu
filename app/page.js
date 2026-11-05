import HomeConverter from "../components/HomeConverter";

const tools = [
  { icon: "T", title: "Roman Urdu to Urdu", description: "Type ‘kya haal hai’ and get کیا حال ہے", href: "/" },
  { icon: "⇄", title: "Urdu to Roman Urdu", description: "Read Urdu in English letters", href: "/urdu-to-roman" },
  { icon: "♧", title: "Names in Urdu", description: "Browse names and meanings", href: "/names" },
  { icon: "▤", title: "Word Meanings", description: "English words with Urdu meanings", href: "/word-meanings" },
  { icon: "✦", title: "Poetry Maker", description: "Create and download Urdu poetry cards", href: "/poetry-maker" },
  { icon: "✎", title: "Blog", description: "Guides for writing and learning Urdu", href: "/blog" }
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="/" aria-label="Roman2Urdu home"><span className="brand-mark">ر</span><span>Roman2Urdu.com</span></a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="/">Roman to Urdu</a><a href="/urdu-to-roman">Urdu to Roman</a><a href="/names">Names</a><a href="/word-meanings">Word Meanings</a><a href="/poetry-maker">Poetry Maker</a><a href="/blog">Blog</a><a href="/contact">Contact</a>
      </nav>
      <a className="header-cta" href="#converter">Convert now <span>↗</span></a>
    </header>
    <section className="hero">
      <div className="hero-glow hero-glow-one"/><div className="hero-glow hero-glow-two"/>
      <div className="hero-inner"><div className="eyebrow"><span className="eyebrow-dot"/> SIMPLE. FAST. FREE.</div>
        <h1>Your words,<br/><span>beautifully Urdu.</span></h1>
        <p className="hero-copy">Type the way you speak. Convert Roman Urdu into Urdu script in a moment — no keyboard setup needed.</p>
        <div className="hero-actions"><a className="button button-primary" href="#converter">Try the converter <span>↓</span></a><a className="button button-quiet" href="/poetry-maker">Make a poetry card <span>↗</span></a></div>
        <div className="hero-proof"><div className="avatar-stack"><span>A</span><span>ع</span><span>ا</span></div><span>Free tools for everyday Urdu conversations</span></div>
      </div><div className="hero-script" aria-hidden="true">اردو</div>
    </section>
    <section className="converter-section section-wrap" id="converter"><HomeConverter/><div className="privacy-note"><span className="privacy-icon">✓</span> Your text stays in your browser. No account or API key required.</div></section>
    <section className="how-section" id="tools"><div className="section-wrap"><div className="center-heading"><span className="section-kicker">EXPLORE THE TOOLKIT</span><h2>Everything you need to <span>write in Urdu.</span></h2><p>Simple tools for translating, learning, and creating.</p></div><div className="tool-grid">{tools.map((tool,i)=><a className="tool-card tool-card-link" href={tool.href} key={tool.title}><div className={'tool-icon tool-icon-'+(i%3)}>{tool.icon}</div><div className="tool-number">0{i+1}</div><h3>{tool.title}</h3><p>{tool.description}</p><span className="tool-card-arrow">Explore tool ↗</span></a>)}</div></div></section>
    <section className="example-section section-wrap"><div className="example-copy"><span className="section-kicker">A QUICK EXAMPLE</span><h2>From “kya haal hai?”<br/><span>to “کیا حال ہے؟”</span></h2><p>Whether it’s a quick message, a caption, or a longer thought, make Urdu script part of your everyday writing.</p><a href="#converter" className="text-link">Give it a try <span>→</span></a></div><div className="example-card"><div className="example-card-top"><span className="tiny-dot"/> LIVE EXAMPLE <span className="example-label">01 / 02</span></div><div className="example-line"><span className="line-label">YOU TYPE</span><p>mujhe urdu pasand hai</p></div><div className="example-arrow">↓</div><div className="example-line output-line"><span className="line-label">URDU SCRIPT</span><p lang="ur" dir="rtl">مجھے اردو پسند ہے</p></div><div className="example-card-footer"><span>✦</span> Clear words. Same meaning.</div></div></section>
    <section className="faq-section" id="faq"><div className="section-wrap faq-layout"><div className="faq-intro"><span className="section-kicker">GOOD TO KNOW</span><h2>Questions?<br/><span>We’ve got you.</span></h2><p>Some quick answers to help you get started.</p></div><div className="faq-list"><details className="faq-item" open><summary>Is Roman2Urdu free to use?<span className="faq-plus">+</span></summary><p>Yes. The included converter runs in your browser and does not require a paid API key.</p></details><details className="faq-item"><summary>Will every Roman Urdu word convert perfectly?<span className="faq-plus">+</span></summary><p>Roman Urdu has many spelling variations. The included dictionary covers common words, but some words may need manual correction.</p></details><details className="faq-item"><summary>Do you store my text?<span className="faq-plus">+</span></summary><p>No. This starter converter runs locally in your browser and does not store conversion history.</p></details></div></div></section>
    <footer className="site-footer"><a className="brand footer-brand" href="/"><span className="brand-mark">ر</span><span>Roman2Urdu.com</span></a><p>A little bridge between the way you type and the language you love.</p><div className="footer-links"><a href="/about">About</a><a href="/contact">Contact</a><a href="/blog">Blog</a><a href="/poetry-maker">Poetry Maker</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Roman2Urdu Starter</span><span>Built for Urdu speakers, everywhere.</span></div></footer>
  </main>;
}
