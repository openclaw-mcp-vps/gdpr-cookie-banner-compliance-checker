export default function Home() {
  const faqs = [
    {
      q: "What does the scanner check?",
      a: "It analyzes cookie banners for consent mechanisms, pre-ticked boxes, reject options, and required legal disclosures under GDPR and ePrivacy Directive."
    },
    {
      q: "Do I need technical knowledge to use it?",
      a: "No. Just enter your website URL and receive a detailed compliance report with plain-language explanations and step-by-step fixes."
    },
    {
      q: "How often are scans run?",
      a: "You can trigger manual scans anytime. Scheduled weekly scans are included so you're alerted if your cookie banner changes or falls out of compliance."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Automated GDPR Cookie Banner{" "}
          <span className="text-[#58a6ff]">Compliance Scanner</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Instantly scan any website for GDPR cookie banner violations. Get actionable reports and fixes before regulators come knocking.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Scanning — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required for trial.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "🔍", title: "Deep Scan", desc: "Puppeteer-powered crawling detects hidden consent issues" },
          { icon: "📋", title: "Detailed Reports", desc: "Line-by-line violations with severity ratings" },
          { icon: "🛠️", title: "Actionable Fixes", desc: "Copy-paste code snippets to resolve each issue" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-2">$15<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay compliant</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited website scans",
              "Full GDPR & ePrivacy compliance checks",
              "Weekly automated re-scans",
              "Detailed PDF reports",
              "Fix recommendations & code snippets",
              "Dashboard for multiple sites",
              "Email alerts on compliance changes"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} GDPR Cookie Compliance Checker. Built for EU-facing businesses.
      </footer>
    </main>
  );
}
