import FaqSection from "@/components/FaqSection";
import Link from "next/link";

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
              <h2 className="text-xl font-semibold text-[#2d4a47] font-marcellus">Free Guidance Call</h2>
              <p className="mt-3 text-sm text-[#2d4a47] font-marcellus">
                The complimentary interaction session is a gentle one-on-one conversation over phone designed to connect, understand your needs, and guide you toward the right
                healing approach. During this session, we listen with care, explore what you are experiencing, and help clarify the support that may serve you best. The
                conversation is held in complete confidentiality, and all emotions that arise are welcomed and respected.
              </p>
              <ul className="list-disc ms-4 mt-4 mb-4 space-y-2 text-sm text-[#2d4a47] font-marcellus">
                <li>A 10–15 minute one-on-one telephonic conversation</li>
                <li>A safe space to ask questions and share concerns</li>
                <li>An introduction to the healing process, with no obligation</li>
                <li>Guidance to identify what you may wish to release, heal, or invite into your life</li>
              </ul>
              <p>This session is offered to help you gain clarity and feel supported before beginning any therapy.</p>
            </div>
            <Link
              href={"/contact"}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#e75f47] px-6 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:bg-[#d97560] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e75f47] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3EDE5] font-marcellus tracking-wide uppercase"
            >
              Book a free session
            </Link>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[#2d4a47]/15 bg-[#d5dacd] p-6 shadow-sm">
            <div>
              <h2 className="text-xl font-semibold text-[#2d4a47] font-marcellus">1:1 Healing Session</h2>
              <p className="mt-3 text-sm text-[#2d4a47] font-marcellus">
                Each session is guided intuitively and chosen based on your needs and readiness. These therapies support emotional release, deep healing, energetic balance, and
                spiritual alignment. Which will positively impact your wellbeing.
              </p>
              <ul className="list-disc ms-4 mt-4 mb-4 space-y-2 text-sm text-[#2d4a47] font-marcellus">
                <li>60–75 minute one-on-one online session</li>
                <li>Intuitive energetic and somatic healing</li>
                <li>Support for emotional release and energetic alignment</li>
                <li>Simple grounding practices to help integrate the healing</li>
              </ul>
              <p>Sessions are offered after the complimentary interaction session to ensure alignment and readiness.</p>
            </div>
            <Link
              href={"/contact"}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#e75f47] px-6 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:bg-[#d97560] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e75f47] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3EDE5] font-marcellus tracking-wide uppercase"
            >
              Book a session
            </Link>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[#2d4a47]/15 bg-[#F3EDE5] p-6 shadow-sm">
            <div>
              <h2 className="text-xl font-semibold text-[#2d4a47] font-marcellus">Multi-Session Healing Journeys</h2>
              <p className="mt-3 text-sm text-[#2d4a47] font-marcellus">
                Our multi-session healing journeys offer sustained, personalised support for deeper emotional, energetic, and spiritual transformation. These guided programs are
                ideal during periods of transition, burnout, grief, or when you are seeking meaningful, soul-aligned change. <br />
                Working across multiple sessions allows healing to unfold gradually, creating lasting integration and stability rather than quick fixes.
              </p>
              <ul className="list-disc ms-4 mt-4 mb-4 space-y-2 text-sm text-[#2d4a47] font-marcellus">
                <li>Curated 4 to 8 session packages based on your needs</li>
                <li>Ongoing support between sessions for continuity and reassurance</li>
                <li>A gentle, flexible structure that allows space for growth and evolution</li>
              </ul>
              <p>These journeys are designed to support long-term healing, self-awareness, and alignment at your own pace.</p>
            </div>
            <Link
              href={"/contact"}
              className="mt-6 inline-flex items-center justify-center rounded-full border border-[#2d4a47]/40 bg-transparent px-6 py-2.5 text-sm font-semibold text-[#2d4a47] shadow-sm transition hover:bg-[#f5f1e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e75f47] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3EDE5] font-marcellus tracking-wide uppercase"
            >
              Inquire about offerings
            </Link>
            {/* <button className="mt-6 inline-flex items-center justify-center rounded-full border border-[#2d4a47]/40 bg-transparent px-6 py-2.5 text-sm font-semibold text-[#2d4a47] shadow-sm transition hover:bg-[#f5f1e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e75f47] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3EDE5] font-marcellus tracking-wide uppercase">
              Explore journeys
            </button> */}
          </div>
        </div>

        <section className="faq_sss pt-10">
          <div className="container">
            <div className="title pb-4">
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-marcellus tracking-tight text-[#2d4a47]">Services I provide</h2>
            </div>
            <FaqSection />
          </div>
        </section>

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
