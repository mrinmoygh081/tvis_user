export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F3EDE5] text-[#2d4a47]">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#2d4a47]/80 font-marcellus">Services</p>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-marcellus tracking-tight text-[#2d4a47]">Healing experiences to support your whole self.</h1>
          <p className="mt-4 text-sm sm:text-lg text-[#2d4a47] font-marcellus">
            Each offering is crafted to meet you where you are—emotionally, energetically, and spiritually—so you can soften into a deeper sense of clarity, grounding, and inner
            peace.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-2xl border border-[#2d4a47]/15 bg-[#f5f1e8] p-6 shadow-sm">
            <div>
              <h2 className="text-xl font-semibold text-[#2d4a47] font-marcellus">1:1 Healing Sessions</h2>
              <p className="mt-3 text-sm text-[#2d4a47] font-marcellus">
                Personalized, intuitive sessions designed to gently release emotional weight, regulate the nervous system, and reconnect you with your inner voice.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[#2d4a47] font-marcellus">
                <li>• 60–75 minute online session</li>
                <li>• Energetic & somatic-based support</li>
                <li>• Practical grounding tools to integrate after</li>
              </ul>
            </div>
            <button className="mt-6 inline-flex items-center justify-center rounded-full bg-[#e75f47] px-6 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:bg-[#d97560] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e75f47] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3EDE5] font-marcellus tracking-wide uppercase">
              Book a session
            </button>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[#2d4a47]/15 bg-[#d5dacd] p-6 shadow-sm">
            <div>
              <h2 className="text-xl font-semibold text-[#2d4a47] font-marcellus">Multi-Session Journeys</h2>
              <p className="mt-3 text-sm text-[#2d4a47] font-marcellus">
                A guided, multi-week container for deeper transformation, tailored to seasons of transition, burnout, grief, or soul-aligned change.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[#2d4a47] font-marcellus">
                <li>• 4–8 session packages</li>
                <li>• Ongoing support between sessions</li>
                <li>• Gentle structure with space to evolve</li>
              </ul>
            </div>
            <button className="mt-6 inline-flex items-center justify-center rounded-full border border-[#2d4a47]/40 bg-transparent px-6 py-2.5 text-sm font-semibold text-[#2d4a47] shadow-sm transition hover:bg-[#f5f1e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e75f47] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3EDE5] font-marcellus tracking-wide uppercase">
              Explore journeys
            </button>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[#2d4a47]/15 bg-[#F3EDE5] p-6 shadow-sm">
            <div>
              <h2 className="text-xl font-semibold text-[#2d4a47] font-marcellus">Workshops & Circles</h2>
              <p className="mt-3 text-sm text-[#2d4a47] font-marcellus">
                Community spaces for grounding, reflection, and shared healing through themed gatherings, teachings, and practices.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[#2d4a47] font-marcellus">
                <li>• Online or in-person experiences</li>
                <li>• Centered on presence, embodiment, and connection</li>
                <li>• Ideal for groups, teams, or communities</li>
              </ul>
            </div>
            <button className="mt-6 inline-flex items-center justify-center rounded-full border border-[#2d4a47]/40 bg-transparent px-6 py-2.5 text-sm font-semibold text-[#2d4a47] shadow-sm transition hover:bg-[#f5f1e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e75f47] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3EDE5] font-marcellus tracking-wide uppercase">
              Inquire about offerings
            </button>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-[#d5dacd] p-6 sm:p-8 border border-[#2d4a47]/10">
          <h2 className="text-xl font-semibold text-[#2d4a47] font-marcellus">Not sure where to begin?</h2>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-[#2d4a47] font-marcellus">
            If you&apos;re feeling called to this work but aren&apos;t sure which offering is right for you, you&apos;re not alone. You&apos;re welcome to start with a simple
            conversation where we can explore what you&apos;re moving through, what kind of support you&apos;re seeking, and what might serve you best right now.
          </p>
        </div>
      </section>
    </main>
  );
}
