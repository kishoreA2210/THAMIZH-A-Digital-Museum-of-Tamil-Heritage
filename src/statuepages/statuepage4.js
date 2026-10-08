import React from 'react';

function StatuePage4() {
  return (
    <>
      <div className="min-h-screen bg-white text-[#3d2b1f] py-12 px-4 sm:px-6 lg:px-8">

        <div className="max-w-5xl mx-auto space-y-12">

          {/* Hero Section with Image */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">

            <div className="relative group">
              <img
                src="/homepage_image/thiruvalluvar_statue.jpg"
                alt="Thiruvalluvar Statue"
                className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] h-auto max-h-[500px] mx-auto mt-10 rounded-2xl shadow-2xl object-contain border-4 border-[#d6a756] bg-[#fffaf0] p-2 transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#702424] mt-6">
              Thiruvalluvar Statue
            </h1>

            <p className="text-lg text-[#795548] max-w-2xl">
              The monumental statue of Thiruvalluvar honours the great Tamil poet and philosopher, whose Thirukkural continues to inspire generations.
            </p>
          </div>


          {/* Section 1: Three Books (Trivarga) */}
          <div className="bg-[#fffaf0] border border-[#d6a756]/40 rounded-2xl p-6 sm:p-8 shadow-xl">

            <h2 className="text-2xl font-bold text-[#702424] mb-4 border-b border-[#d6a756]/40 pb-2">
              1. The Three Books of Life (Muppaal)
            </h2>

            <p className="text-[#5d4037] mb-6 leading-relaxed">
              Thiruvalluvar's magnum opus, the Thirukkural, offers ethical guidance for humanity across three fundamental pillars of existence (
              <span className="text-[#9A6B3A] font-medium">
                Muppaal
              </span>
              ):
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#5d4037]">

              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30">
                <strong className="text-[#9A6B3A] block mb-1">
                  Virtue & Duty (Aram)
                </strong>
                The foundation of righteous living, detailing personal ethics, truth, compassion, and moral responsibility (38 Chapters).
              </li>

              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30">
                <strong className="text-[#9A6B3A] block mb-1">
                  Wealth & Governance (Porul)
                </strong>
                Insights on citizenship, leadership, economy, statecraft, and social harmony (70 Chapters).
              </li>

              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30">
                <strong className="text-[#9A6B3A] block mb-1">
                  Love & Relationships (Inbam)
                </strong>
                A delicate exploration of romantic love, affection, and emotional bonding (25 Chapters).
              </li>

              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30">
                <strong className="text-[#9A6B3A] block mb-1">
                  Universal Ethics (Ulaga Podhu Marai)
                </strong>
                Timeless wisdom written without religious bias, making it applicable to all humanity.
              </li>

              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30 md:col-span-2">
                <strong className="text-[#9A6B3A] block mb-1">
                  133 Chapters (1,330 Couplets)
                </strong>
                Precisely crafted two-line couplets (<span className="text-[#702424] font-medium">Kurals</span>) delivering supreme philosophy in minimal words.
              </li>

            </ul>
          </div>


          {/* Section 2: Architectural Symbolism */}
          <div>

            <h2 className="text-2xl font-bold text-[#702424] mb-6">
              2. Architectural Symbolism & Dimensions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors">

                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1">
                  Symbol 01
                </div>

                <h3 className="text-xl font-bold text-[#702424] mb-2">
                  133 Feet Total Height
                </h3>

                <p className="text-[#5d4037] text-sm leading-relaxed">
                  The entire structure stands at 133 feet, symbolizing the 133 chapters of the immortal Thirukkural.
                </p>

              </div>


              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors">

                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1">
                  Symbol 02
                </div>

                <h3 className="text-xl font-bold text-[#702424] mb-2">
                  38-Feet Pedestal (Aram)
                </h3>

                <p className="text-[#5d4037] text-sm leading-relaxed">
                  The stone pedestal stands 38 feet tall, signifying the 38 chapters dedicated to Virtue (Aram) as the base of human life.
                </p>

              </div>


              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors">

                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1">
                  Symbol 03
                </div>

                <h3 className="text-xl font-bold text-[#702424] mb-2">
                  95-Feet Statue Body
                </h3>

                <p className="text-[#5d4037] text-sm leading-relaxed">
                  The statue itself measures 95 feet, representing Wealth (70 chapters) and Love (25 chapters) built upon virtue.
                </p>

              </div>


              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors">

                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1">
                  Symbol 04
                </div>

                <h3 className="text-xl font-bold text-[#702424] mb-2">
                  Three Raised Fingers
                </h3>

                <p className="text-[#5d4037] text-sm leading-relaxed">
                  The statue’s right hand holds three fingers upward, pointing towards the three core principles of Aram, Porul, and Inbam.
                </p>

              </div>

            </div>
          </div>


          {/* Section 3: Engineering & Legacy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg">

              <h3 className="text-xl font-bold text-[#702424] mb-3">
                Master Craftsmanship
              </h3>

              <p className="text-[#5d4037] text-sm leading-relaxed mb-3">
                Designed by renowned sculptor{' '}
                <strong className="text-[#9A6B3A]">
                  V. Ganapati Sthapati
                </strong>
                , assembled using 3,681 heavy granite blocks on a rock island in Kanyakumari.
              </p>

              <p className="text-[#795548] text-xs">
                Built to withstand extreme sea breezes and seismic activity, engineered with interlocking traditional stone techniques.
              </p>

            </div>


            <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg">

              <h3 className="text-xl font-bold text-[#702424] mb-3">
                Global Cultural Impact
              </h3>

              <p className="text-[#5d4037] text-sm leading-relaxed mb-3">
                Unveiled on January 1, 2000, standing where three oceans meet as an enduring landmark of{' '}
                <strong className="text-[#9A6B3A]">
                  Tamil heritage and global philosophy
                </strong>
                .
              </p>

              <p className="text-[#795548] text-xs">
                Thirukkural has been translated into over 40 languages worldwide, celebrated for its secular humanitarian teachings.
              </p>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default StatuePage4;