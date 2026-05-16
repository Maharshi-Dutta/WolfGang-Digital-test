export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground overflow-hidden">
      <div className="px-6 md:px-12 pt-16 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Newsletter */}
        <div className="lg:col-span-5">
          <h3 className="text-3xl md:text-4xl font-black uppercase leading-[0.95] mb-8">
            WOLFGANG<br />INSIGHTS, IN<br />YOUR INBOX
          </h3>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
            <FooterInput label="First Name" required />
            <FooterInput label="Last name" required />
            <FooterInput label="Email" required type="email" />
            <div>
              <label className="block text-xs mb-2">Business Type *</label>
              <select
                required
                defaultValue=""
                className="w-full rounded-md border border-primary-foreground/50 bg-transparent px-3 py-2.5 text-sm focus:outline-none focus:border-primary-foreground appearance-none"
              >
                <option value="" disabled className="text-foreground">Please Select</option>
              </select>
            </div>
            <label className="sm:col-span-2 flex items-start gap-2 text-xs">
              <input type="checkbox" className="mt-0.5" />
              <span>I want to subscribe to your newsletter and receive email communication. *</span>
            </label>
            <button
              type="submit"
              className="rounded-full bg-accent text-accent-foreground px-6 py-2.5 text-sm font-semibold uppercase hover:opacity-90 transition-opacity w-fit"
            >
              Sign me up!
            </button>
          </form>
        </div>

        {/* Nav columns */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-6 lg:pl-8 lg:border-l lg:border-primary-foreground/20">
          {[
            {
              links: [
                "Search Engine Optimisation",
                "Paid Search",
                "Paid Social Media & Creative",
                "CRM & Marketing Automation",
                "Data & Analytics",
              ],
            },
            {
              links: ["Case Studies", "Testimonials", "Blog & Insights", "Awards", "Contact"],
            },
            {
              links: ["Our Story", "Our Team", "Employee Ownership", "Wolfgang Reforest", "Careers"],
            },
          ].map((col, i) => (
            <ul key={i} className="self-start space-y-2 text-sm leading-snug border-l border-primary-foreground/30 pl-4">
              {col.links.map((l) => (
                <li
                  key={l}
                  className="text-primary-foreground/85 hover:text-accent cursor-pointer transition-colors"
                >
                  {l}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span
              key={i}
              className="text-[18vw] md:text-[16vw] font-black uppercase leading-none text-primary-foreground/10 pr-12"
            >
              WOLFGANG&nbsp;WOLFGANG&nbsp;WOLFGANG&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 md:px-12 pb-8 pt-2 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-primary-foreground/70">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>© {new Date().getFullYear()} WOLFGANG</span>
          <span className="opacity-50">·</span>
          <a href="#" className="uppercase hover:text-accent transition-colors">Privacy Policy</a>
          <span className="opacity-50">·</span>
          <a href="#" className="uppercase hover:text-accent transition-colors">Website Photos</a>
        </div>
        <div className="flex items-center gap-3">
          {["X", "IG", "F", "YT"].map((s) => (
            <a
              key={s}
              href="#"
              aria-label={s}
              className="w-9 h-9 rounded-full border border-primary-foreground/60 flex items-center justify-center text-[11px] font-bold hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
        <span className="uppercase tracking-wider">Website MadeByShape</span>
      </div>
    </footer>
  );
}

function FooterInput({
  label,
  required,
  type = "text",
}: {
  label: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs mb-2">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        required={required}
        className="w-full rounded-md border border-primary-foreground/50 bg-transparent px-3 py-2.5 text-sm focus:outline-none focus:border-primary-foreground"
      />
    </div>
  );
}