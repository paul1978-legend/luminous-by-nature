import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | Luminous By Nature",
  description:
    "Meet Paul and Sheree, the hosts behind Luminous By Nature's stained glass workshops on the Sunshine Coast and Brisbane.",
};

export default function About() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20 text-center">

      <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

      <h1 className="text-4xl font-serif mb-6">
        Meet Your Workshop Hosts
      </h1>

      <p className="mb-16 max-w-2xl mx-auto leading-relaxed text-lg text-gray-700">
        Paul and Sheree, partners in life and in craft, are the owners
        of Luminous By Nature. We both found a passion for the art of
        stained glass some years ago, starting out with minimal tools
        and small market stalls and growing into a full, busy studio
        run from our garage. We are self-taught, and our workshops
        focus on the copper foiling technique — the Tiffany method —
        prized for the fine, sculptural detail it allows.
      </p>

      <div className="max-w-4xl mx-auto mb-16">

        <Image
          src="/images/workshop1.jpg"
          alt="Paul and Sheree hosting a stained glass workshop"
          width={1200}
          height={700}
          className="glow rounded-2xl w-full object-cover"
        />

      </div>

      <div className="max-w-2xl mx-auto mb-16 text-left">

        <h2 className="text-2xl font-serif mb-4 text-center">
          Why We Teach
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          There's a moment in every workshop when someone who has never
          touched a piece of glass before holds up what they've made and
          realises — I actually made this. That moment is why we do this.
        </p>

        <p className="text-gray-700 leading-relaxed">
          We've invested in our workshops so that we can be mobile,
          bringing the experience anywhere people want one and have the
          space for it — across Queensland and interstate into New South
          Wales, at markets, festivals and art exhibitions along the way.
          We're passionate about the luminosity of the glass we work
          with, both vintage and new, and it's where our business name
          comes from — that, and what we believe is the true, luminous
          state of being.
        </p>

      </div>

      <div className="max-w-xl mx-auto">

        <Link href="/workshops" className="btn-primary">
          View Upcoming Workshops
        </Link>

      </div>

    </main>
  );
}
