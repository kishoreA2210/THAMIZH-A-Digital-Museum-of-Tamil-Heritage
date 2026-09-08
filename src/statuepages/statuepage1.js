import React from 'react';

function StatuePage1() {
  return (
    <>
      <div className="min-h-screen bg-white text-[#3d2b1f] py-12 px-4 sm:px-6 lg:px-8">

        <div className="max-w-5xl mx-auto space-y-12">

          {/* Hero Section with Image */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">

            <div className="relative group">
              <img
                src="/homepage_image/natrajar_statue.jpg"
                alt="Nataraja Statue"
                className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto mt-10 rounded-2xl shadow-2xl object-cover border-4 border-[#d6a756] transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#702424] mt-6">
              Natarajar Statue
            </h1>

            <p className="text-lg text-[#795548] max-w-2xl">
              The Cosmic Symbolism & Historical Legacy of Lord Shiva’s Ananda Tandava
            </p>
          </div>


          {/* Section 1: Five Sacred Actions */}
          <div className="bg-[#fffaf0] border border-[#d6a756]/40 rounded-2xl p-6 sm:p-8 shadow-xl">

            <h2 className="text-2xl font-bold text-[#702424] mb-4 border-b border-[#d6a756]/40 pb-2">
              1. The Cosmic Dance (Ananda Tandava)
            </h2>

            <p className="text-[#5d4037] mb-6 leading-relaxed">
              Nataraja's dance represents the continuous cycle of creation,
              preservation, and destruction of the universe through five sacred
              actions (
              <span className="text-[#9A6B3A] font-medium">
                Panchakritya
              </span>
              ):
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#5d4037]">

              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30">
                <strong className="text-[#9A6B3A] block mb-1">
                  Creation (Srishti)
                </strong>
                The upper right hand holds the{' '}
                <span className="text-[#702424] font-medium">
                  Damaru
                </span>{' '}
                (drum), sounding the first cosmic beat of creation.
              </li>

              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30">
                <strong className="text-[#9A6B3A] block mb-1">
                  Protection (Sthiti)
                </strong>
                The lower right hand forms the{' '}
                <span className="text-[#702424] font-medium">
                  Abhaya Mudra
                </span>
                , offering protection and freedom from fear.
              </li>

              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30">
                <strong className="text-[#9A6B3A] block mb-1">
                  Destruction (Samhara)
                </strong>
                The upper left hand holds{' '}
                <span className="text-[#702424] font-medium">
                  Agni
                </span>{' '}
                (fire), representing cosmic destruction and transformation.
              </li>

              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30">
                <strong className="text-[#9A6B3A] block mb-1">
                  Illusion (Tirobhava)
                </strong>
                The right foot crushes{' '}
                <span className="text-[#702424] font-medium">
                  Apasmara
                </span>{' '}
                (the demon of ignorance), suppressing human ego.
              </li>

              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30 md:col-span-2">
                <strong className="text-[#9A6B3A] block mb-1">
                  Salvation (Anugraha)
                </strong>
                The raised left leg and pointing left hand indicate liberation
                (<span className="text-[#702424] font-medium">Moksha</span>)
                and refuge for the soul.
              </li>

            </ul>
          </div>


          {/* Section 2: Key Symbols */}
          <div>

            <h2 className="text-2xl font-bold text-[#702424] mb-6">
              2. Key Symbols & Meanings
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors">

                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1">
                  Symbol 01
                </div>

                <h3 className="text-xl font-bold text-[#702424] mb-2">
                  Prabha Mandala
                </h3>

                <p className="text-[#5d4037] text-sm leading-relaxed">
                  The ring of fire surrounding the deity represents the cosmos
                  and the endless, cyclical nature of time.
                </p>

              </div>


              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors">

                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1">
                  Symbol 02
                </div>

                <h3 className="text-xl font-bold text-[#702424] mb-2">
                  Apasmara Demon
                </h3>

                <p className="text-[#5d4037] text-sm leading-relaxed">
                  The dwarf demon crushed underfoot symbolizes human ignorance,
                  spiritual darkness, and uncontrolled ego.
                </p>

              </div>


              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors">

                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1">
                  Symbol 03
                </div>

                <h3 className="text-xl font-bold text-[#702424] mb-2">
                  Ganga & Crescent Moon
                </h3>

                <p className="text-[#5d4037] text-sm leading-relaxed">
                  Nestled in his matted locks, Ganga represents divine grace
                  while the crescent moon symbolizes wisdom and passage of time.
                </p>

              </div>


              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors">

                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1">
                  Symbol 04
                </div>

                <h3 className="text-xl font-bold text-[#702424] mb-2">
                  Gaja Hasta Gesture
                </h3>

                <p className="text-[#5d4037] text-sm leading-relaxed">
                  The arm crossed gracefully across the chest points down toward
                  the uplifted foot, offering a direct path to liberation.
                </p>

              </div>

            </div>
          </div>


          {/* Section 3: Chola Art & Modern Science */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg">

              <h3 className="text-xl font-bold text-[#702424] mb-3">
                Chola Bronze Artistry
              </h3>

              <p className="text-[#5d4037] text-sm leading-relaxed mb-3">
                Crafted during the Chola Dynasty (9th–11th Century CE) using
                the master technique of{' '}
                <strong className="text-[#9A6B3A]">
                  Lost-Wax Casting (Cire Perdue)
                </strong>
                .
              </p>

              <p className="text-[#795548] text-xs">
                Displayed prominently in global institutions including the
                Louvre Museum (Paris) and the British Museum (London).
              </p>

            </div>


            <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg">

              <h3 className="text-xl font-bold text-[#702424] mb-3">
                Scientific Connection
              </h3>

              <p className="text-[#5d4037] text-sm leading-relaxed mb-3">
                Modern physicists link Nataraja's dance to subatomic physics.
                A 2-meter bronze statue stands at{' '}
                <strong className="text-[#9A6B3A]">
                  CERN
                </strong>{' '}
                in Geneva.
              </p>

              <p className="text-[#795548] text-xs">
                Physicist Fritjof Capra described Shiva’s dance as the most
                vivid visual depiction of the modern physical worldview.
              </p>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default StatuePage1;
