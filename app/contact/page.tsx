export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F3EDE5] text-[#2d4a47]">
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#2d4a47]/80 font-marcellus">Contact</p>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-marcellus tracking-tight text-[#2d4a47]">Let&apos;s connect.</h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#2d4a47] font-marcellus">
            Whether you have a question about sessions, offerings, or simply feel called to reach out, you are welcome here. Share what&apos;s on your heart and we&apos;ll be in
            touch.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_minmax(0,1fr)]">
          <form className="space-y-5 rounded-2xl border border-[#2d4a47]/15 bg-[#F3EDE5] p-6 shadow-sm sm:p-8 backdrop-blur-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#2d4a47] font-marcellus">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-2 w-full rounded-full border border-[#2d4a47]/25 bg-[#f5f1e8] px-4 py-2.5 text-sm text-[#2d4a47] outline-none transition focus:border-[#e75f47] focus:bg-white focus:ring-2 focus:ring-[#e75f47]/40 font-marcellus"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2d4a47] font-marcellus">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-2 w-full rounded-full border border-[#2d4a47]/25 bg-[#f5f1e8] px-4 py-2.5 text-sm text-[#2d4a47] outline-none transition focus:border-[#e75f47] focus:bg-white focus:ring-2 focus:ring-[#e75f47]/40 font-marcellus"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[#2d4a47] font-marcellus">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="mt-2 w-full rounded-full border border-[#2d4a47]/25 bg-[#f5f1e8] px-4 py-2.5 text-sm text-[#2d4a47] outline-none transition focus:border-[#e75f47] focus:bg-white focus:ring-2 focus:ring-[#e75f47]/40 font-marcellus"
                placeholder="How can I support you?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#2d4a47] font-marcellus">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-2 w-full resize-none rounded-2xl border border-[#2d4a47]/25 bg-[#f5f1e8] px-4 py-3 text-sm text-[#2d4a47] outline-none transition focus:border-[#e75f47] focus:bg-white focus:ring-2 focus:ring-[#e75f47]/40 font-marcellus"
                placeholder="Share anything you'd like me to know."
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#e75f47] px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-[#d97560] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e75f47] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3EDE5] sm:w-auto font-marcellus tracking-wide uppercase cursor-pointer"
            >
              Send message
            </button>
          </form>

          <aside className="space-y-6 rounded-2xl bg-[#d5dacd] p-6 sm:p-8 border border-[#2d4a47]/10">
            <h2 className="text-xl font-semibold text-[#2d4a47] font-marcellus">Other ways to reach out</h2>

            <div className="space-y-4 text-sm sm:text-base text-[#2d4a47] font-marcellus">
              <p>If you prefer, you can also reach out directly via email or follow along on social channels for reflections, offerings, and updates.</p>

              <div className="space-y-2">
                <p className="font-semibold font-marcellus tracking-wide uppercase text-xs text-[#2d4a47]/80">Email</p>
                <p>you@example.com</p>
              </div>

              <div className="space-y-2">
                <p className="font-semibold font-marcellus tracking-wide uppercase text-xs text-[#2d4a47]/80">Social</p>
                <p>@yourhandle (Instagram)</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
