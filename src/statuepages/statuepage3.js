import React from 'react';

function StatuePage3() {
  return (
    <>
      <div className="min-h-screen bg-white text-[#3d2b1f] py-12 px-4 sm:px-6 lg:px-8">

        <div className="max-w-5xl mx-auto space-y-12">

          {/* Hero Section with Image */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">

            <div className="relative group">
              <img
                src="/homepage_image/mahabalipuram_temple.jpg"
                alt="Arjuna's Penance Relief"
                className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] h-auto max-h-[500px] mx-auto mt-10 rounded-2xl shadow-2xl object-contain border-4 border-[#d6a756] bg-[#fffaf0] p-2 transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#702424] mt-6">
              Arjuna's Penance
            </h1>

            <p className="text-lg text-[#795548] max-w-2xl">
              Carved into the massive rock at Mahabalipuram, Arjuna's Penance is one of the finest examples of Pallava-era monumental art.
            </p>
          </div>


          {/* Section 1: Architectural Features */}
          <div className="bg-[#fffaf0] border border-[#d6a756]/40 rounded-2xl p-6 sm:p-8 shadow-xl">

            <h2 className="text-2xl font-bold text-[#702424] mb-4 border-b border-[#d6a756]/40 pb-2">
              1. The Great Open-Air Bas-Relief
            </h2>

            <p className="text-[#5d4037] mb-6 leading-relaxed">
              Measuring over 96 feet long and 43 feet high, this monolith relief depicts cosmic life, divine myths, and nature through five key elements (
              <span className="text-[#9A6B3A] font-medium">
                Pallava Visual Narratives
              </span>
              ):
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#5d4037]">

              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30">
                <strong className="text-[#9A6B3A] block mb-1">
                  Ascetic Arjuna / Bhagiratha
                </strong>
                The central figure performing intense penance standing on one leg to seek divine blessings.
              </li>

              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30">
                <strong className="text-[#9A6B3A] block mb-1">
                  Descent of River Ganges
                </strong>
                The natural rock fissure representing the river descending from heaven to purify the Earth.
              </li>

              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30">
                <strong className="text-[#9A6B3A] block mb-1">
                  Boon of Pasupatastra
                </strong>
                Lord Shiva standing beside the ascetic with his attendants, bestowing the ultimate celestial weapon.
              </li>

              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30">
                <strong className="text-[#9A6B3A] block mb-1">
                  Naga & Nagini Deities
                </strong>
                Serpent gods carved inside the central cleft, floating upward in worship of the descending waters.
              </li>

              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30 md:col-span-2">
                <strong className="text-[#9A6B3A] block mb-1">
                  Life-sized Elephant Herd
                </strong>
                Majestic life-sized elephants carved with exquisite realism, leading a procession of animals towards the sacred stream.
              </li>

            </ul>
          </div>


          {/* Section 2: Key Symbols */}
          <div>

            <h2 className="text-2xl font-bold text-[#702424] mb-6">
              2. Key Symbols & Narrative Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors">

                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1">
                  Symbol 01
                </div>

                <h3 className="text-xl font-bold text-[#702424] mb-2">
                  The Natural Fissure
                </h3>

                <p className="text-[#5d4037] text-sm leading-relaxed">
                  A clever hydrological feature where rainwater flowed down the crevice, simulating the actual descent of the river Ganga during monsoon.
                </p>

              </div>


              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors">

                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1">
                  Symbol 02
                </div>

                <h3 className="text-xl font-bold text-[#702424] mb-2">
                  The Ascetic Cat
                </h3>

                <p className="text-[#5d4037] text-sm leading-relaxed">
                  A humorous sculpture showing a cat imitating Arjuna’s penance pose while mice dance around it, reflecting Pallava artistic wit.
                </p>

              </div>


              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors">

                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1">
                  Symbol 03
                </div>

                <h3 className="text-xl font-bold text-[#702424] mb-2">
                  Celestial Beings (Gandharvas)
                </h3>

                <p className="text-[#5d4037] text-sm leading-relaxed">
                  Flying divine couples, Kinnaras, and celestial musicians converging towards the center to witness the cosmic event.
                </p>

              </div>


              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors">

                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1">
                  Symbol 04
                </div>

                <h3 className="text-xl font-bold text-[#702424] mb-2">
                  Wildlife Realism
                </h3>

                <p className="text-[#5d4037] text-sm leading-relaxed">
                  Lions, monkeys, deer, and birds depicted in their natural postures, symbolizing harmony between humans, nature, and the divine.
                </p>

              </div>

            </div>
          </div>


          {/* Section 3: Chola/Pallava Art & Heritage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg">

              <h3 className="text-xl font-bold text-[#702424] mb-3">
                Pallava Rock-Cut Legacy
              </h3>

              <p className="text-[#5d4037] text-sm leading-relaxed mb-3">
                Carved during the 7th Century CE under King{' '}
                <strong className="text-[#9A6B3A]">
                  Mahendravarman I & Narasimhavarman I
                </strong>
                , transforming granite boulders into eternal masterpieces.
              </p>

              <p className="text-[#795548] text-xs">
                Recognized worldwide as a core feature of the UNESCO World Heritage Site at Mamallapuram.
              </p>

            </div>


            <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg">

              <h3 className="text-xl font-bold text-[#702424] mb-3">
                Dual Narrative Significance
              </h3>

              <p className="text-[#5d4037] text-sm leading-relaxed mb-3">
                Scholars interpret the relief as either{' '}
                <strong className="text-[#9A6B3A]">
                  Arjuna obtaining Pasupatastra
                </strong>{' '}
                from the Mahabharata, or Bhagiratha bringing the river Ganga to earth.
              </p>

              <p className="text-[#795548] text-xs">
                Stands as one of the largest bas-relief stone carvings in the world, drawing art historians globally.
              </p>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default StatuePage3;