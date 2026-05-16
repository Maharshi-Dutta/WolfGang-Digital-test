import teamHero from "@/assets/team-celebration.jpg";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 md:px-12 py-16 md:py-24 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden">
        <div
          className="relative min-h-[400px] p-10 md:p-14 flex flex-col justify-start text-white"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.55), rgba(0,0,0,0.25)), url(" + teamHero + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.95]">
            Ready to own<br />your category?
          </h2>
          <p className="mt-6 max-w-md text-sm md:text-base text-white/85">
            Search is changing. You need a strategy that wins on Google today and establishes your authority for AI tomorrow. Fill out the form, and let's build the future-proof roadmap your business deserves.
          </p>
        </div>
        <form className="bg-primary text-primary-foreground p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="First name" required />
          <Field label="Last name" required />
          <Field label="Email" required type="email" />
          <Field label="Phone number" required type="tel" />
          <Field label="Company name" required />
          <Field label="Business Type" required asSelect placeholder="Please Select" />
          <div className="md:col-span-2">
            <Field label="Country" required asSelect placeholder="Please Select" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-2">Message *</label>
            <textarea
              required
              rows={4}
              className="w-full rounded-lg border border-primary-foreground/40 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-primary-foreground"
            />
          </div>
          <Field label="How did you hear about us?" required />
          <label className="flex items-start gap-2 text-xs mt-7">
            <input type="checkbox" className="mt-0.5" />
            <span>I want also to subscribe to your newsletter and receive email communication.</span>
          </label>
          <button
            type="submit"
            className="md:col-span-2 mt-4 rounded-full bg-accent text-accent-foreground py-4 font-semibold hover:opacity-90 transition-opacity"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  type = "text",
  asSelect,
  placeholder,
}: {
  label: string;
  required?: boolean;
  type?: string;
  asSelect?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm mb-2">
        {label} {required && "*"}
      </label>
      {asSelect ? (
        <select
          required={required}
          defaultValue=""
          className="w-full rounded-full border border-primary-foreground/40 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-primary-foreground appearance-none"
        >
          <option value="" disabled className="text-foreground">
            {placeholder}
          </option>
        </select>
      ) : (
        <input
          type={type}
          required={required}
          className="w-full rounded-full border border-primary-foreground/40 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-primary-foreground"
        />
      )}
    </div>
  );
}