export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F3EDE5] text-[#2d4a47]">
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#2d4a47]/80 font-askha">About Me</p>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-marcellus tracking-tight text-[#2d4a47]">Bringing clarity, healing, and light to your journey.</h1>
        </div>

        <div className="space-y-10 text-base leading-relaxed text-[#2d4a47] sm:text-lg font-marcellus">
          <p>
            At TVIS, I believe that true transformation begins with a return to clarity. Our work is rooted in compassion, deep listening, and a commitment to helping you reconnect
            with your inner wisdom.
          </p>

          <p>
            Over the years, I&apos;ve guided individuals through seasons of transition, emotional healing, and spiritual growth. Every session, program, and resource I create is
            designed to gently illuminate the path forward so you can move with more confidence, peace, and authenticity.
          </p>

          <p>
            I honor your story, your pace, and your unique needs. This isn&apos;t about fixing you—it&apos;s about walking alongside you as you remember who you really are and what
            you&apos;re here to embody.
          </p>

          <div className="rounded-2xl bg-[#d5dacd] p-6 sm:p-8 border border-[#2d4a47]/10">
            <h2 className="text-xl font-semibold text-[#2d4a47] font-marcellus">Our Approach</h2>
            <ul className="mt-4 space-y-3 text-sm sm:text-base text-[#2d4a47] font-marcellus">
              <li>• Heart-centered guidance anchored in presence and empathy.</li>
              <li>• Trauma-aware, intuitive support that honors your nervous system.</li>
              <li>• Practical tools to integrate insight into everyday life.</li>
              <li>• A deeply safe, non-judgmental space to be fully yourself.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
