import React from 'react'; 
 
function StatuePage2() { 
  return ( 
    <> 
      <div className="min-h-screen bg-white text-[#3d2b1f] py-12 px-4 sm:px-6 lg:px-8"> 
 
        <div className="max-w-5xl mx-auto space-y-12"> 
 
          {/* Hero Section with Image */} 
          <div className="flex flex-col items-center justify-center text-center space-y-4"> 
 
            <div className="relative group"> 
            <img 
            src="/homepage_image/kaanagi_statue.jpg" 
            alt="Kannagi Statue" 
            className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] h-auto max-h-[500px] mx-auto mt-10 rounded-2xl shadow-2xl object-contain border-4 border-[#d6a756] bg-[#fffaf0] p-2 transition-transform duration-300 group-hover:scale-[1.01]" 
            /> 
            </div>
 
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#702424] mt-6"> 
              Kannagi Statue 
            </h1> 
 
            <p className="text-lg text-[#795548] max-w-2xl"> 
              Kannagi, the legendary heroine of Silappathikaram, stands as a symbol of courage, justice, and unwavering determination. 
            </p> 
          </div> 
 
 
          {/* Section 1: Core Virtues */} 
          <div className="bg-[#fffaf0] border border-[#d6a756]/40 rounded-2xl p-6 sm:p-8 shadow-xl"> 
 
            <h2 className="text-2xl font-bold text-[#702424] mb-4 border-b border-[#d6a756]/40 pb-2"> 
              1. The Pillars of Her Legacy (Silappathikaram) 
            </h2> 
 
            <p className="text-[#5d4037] mb-6 leading-relaxed"> 
              Kannagi's epic journey written by Prince Ilango Adigal reflects deep moral principles through five defining aspects ( 
              <span className="text-[#9A6B3A] font-medium"> 
                Aram & Needhi 
              </span> 
              ): 
            </p> 
 
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#5d4037]"> 
 
              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30"> 
                <strong className="text-[#9A6B3A] block mb-1"> 
                  Devotion (Karpu) 
                </strong> 
                Unwavering loyalty and devotion to her husband Kovalan through hardship and joy. 
              </li> 
 
              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30"> 
                <strong className="text-[#9A6B3A] block mb-1"> 
                  Justice (Needhi) 
                </strong> 
                Fearlessly challenging the Pandyan King in court to prove Kovalan’s innocence. 
              </li> 
 
              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30"> 
                <strong className="text-[#9A6B3A] block mb-1"> 
                  Righteous Wrath (Sina-thee) 
                </strong> 
                Her intense grief and anger burning down the unjust city of Madurai. 
              </li> 
 
              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30"> 
                <strong className="text-[#9A6B3A] block mb-1"> 
                  Truth (Sathyam) 
                </strong> 
                Proving truth through the breaking of her Ruby Anklet (<span className="text-[#702424] font-medium">Manikkach Chilambu</span>). 
              </li> 
 
              <li className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30 md:col-span-2"> 
                <strong className="text-[#9A6B3A] block mb-1"> 
                  Deification (Pattini Deivam) 
                </strong> 
                Ascending as the Goddess of Chastity, revered across Tamil Nadu and Sri Lanka. 
              </li> 
 
            </ul> 
          </div> 
 
 
          {/* Section 2: Key Symbols */} 
          <div> 
 
            <h2 className="text-2xl font-bold text-[#702424] mb-6"> 
              2. Key Symbols & Iconic Attributes 
            </h2> 
 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> 
 
              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors"> 
 
                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1"> 
                  Symbol 01 
                </div> 
 
                <h3 className="text-xl font-bold text-[#702424] mb-2"> 
                  Ruby-Filled Anklet 
                </h3> 
 
                <p className="text-[#5d4037] text-sm leading-relaxed"> 
                  The single remaining anklet filled with rubies, which shattered the Queen's pearl anklet claim and exposed the royal misjudgment. 
                </p> 
 
              </div> 
 
 
              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors"> 
 
                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1"> 
                  Symbol 02 
                </div> 
 
                <h3 className="text-xl font-bold text-[#702424] mb-2"> 
                  Upraised Arm Posture 
                </h3> 
 
                <p className="text-[#5d4037] text-sm leading-relaxed"> 
                  The iconic statue stance holding up the anklet signifies an uncompromising demand for truth and absolute justice. 
                </p> 
 
              </div> 
 
 
              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors"> 
 
                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1"> 
                  Symbol 03 
                </div> 
 
                <h3 className="text-xl font-bold text-[#702424] mb-2"> 
                  Madurai In Flames 
                </h3> 
 
                <p className="text-[#5d4037] text-sm leading-relaxed"> 
                  The fire that consumed Madurai represents the destructive nature of systemic injustice and state error. 
                </p> 
 
              </div> 
 
 
              <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors"> 
 
                <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1"> 
                  Symbol 04 
                </div> 
 
                <h3 className="text-xl font-bold text-[#702424] mb-2"> 
                  The Broken Scepter 
                </h3> 
 
                <p className="text-[#5d4037] text-sm leading-relaxed"> 
                  The fall of King Neduncheziyan symbolizing that righteousness (<span className="text-[#702424] font-medium">Aram</span>) is superior to royal authority. 
                </p> 
 
              </div> 
 
            </div> 
          </div> 
 
 
          {/* Section 3: Historical & Cultural Impact */} 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
 
            <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg"> 
 
              <h3 className="text-xl font-bold text-[#702424] mb-3"> 
                Literary & Cultural History 
              </h3> 
 
              <p className="text-[#5d4037] text-sm leading-relaxed mb-3"> 
                Immortalized in the 5th-century Tamil epic by{' '} 
                <strong className="text-[#9A6B3A]"> 
                  Ilango Adigal 
                </strong> 
                , Cheran Senguttuvan later built a temple honoring her with a stone brought from the Himalayas. 
              </p> 
 
              <p className="text-[#795548] text-xs"> 
                Revered as Pattini Devi in Sri Lankan traditions and Kannagi Amman across Tamil Nadu. 
              </p> 
 
            </div> 
 
 
            <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg"> 
 
              <h3 className="text-xl font-bold text-[#702424] mb-3"> 
                Modern Symbolism 
              </h3> 
 
              <p className="text-[#5d4037] text-sm leading-relaxed mb-3"> 
                The iconic landmark statue erected on Marina Beach, Chennai stands as an enduring emblem of{' '} 
                <strong className="text-[#9A6B3A]"> 
                  Tamil identity and women empowerment 
                </strong> 
                . 
              </p> 
 
              <p className="text-[#795548] text-xs"> 
                Continues to inspire modern literature, theatre, and discussions on civic integrity and moral courage. 
              </p> 
 
            </div> 
 
          </div> 
 
        </div> 
      </div> 
    </> 
  ); 
} 
 
export default StatuePage2;