import React from 'react';

function KambuKaliDetail() {
    
  // Data State / Constants inside function
  const ingredients = [
    'கம்பு மாவு (Pearl Millet Flour) - 1 கப்',
    'பச்சரிசி நொய் அல்லது உடைத்த அரிசி - 2 மேஜைக்கரண்டி',
    'தண்ணீர் - 3 முதல் 4 கப்',
    'மோர் - 1 கப் (களி கூழாகப் பருக)',
    'சின்ன வெங்காயம் - 10 (நறுக்கியது)',
    'பச்சை மிளகாய் - 2 (விரும்பினால்)',
    'உப்பு - தேவையான அளவு'
  ];

  const steps = [
    'கம்பு மாவை சிறிதளவு தண்ணீர் ஊற்றி கட்டிகள் இல்லாமல் கரைத்து தனியாக வைத்துக்கொள்ளவும்.',
    'ஒரு கனமான பாத்திரத்தில் (அல்லது மண் பாத்திரத்தில்) 3 கப் தண்ணீர் ஊற்றி, அரிசி நொய் மற்றும் சிறிதளவு உப்பு சேர்த்து அரிசி நன்கு வேகும் வரை கொதிக்க வைக்கவும்.',
    'அரிசி வெந்ததும், அடுப்பை மிதமான தீயில் வைத்து, கரைத்து வைத்துள்ள கம்பு மாவை மெதுவாக ஊற்றி கட்டி படாமல் தொடர்ந்து கிளறவும்.',
    'கலவை கெட்டியாகி பாத்திரத்தில் ஒட்டாமல் வரும் வரை நன்கு வேகவிடவும். கைகளில் தண்ணீரைத் தொட்டு களியைத் தொட்டால் கைகளில் ஒட்டாமல் இருந்தால் களி தயார்.',
    'தயாரான களியை உருண்டைகளாக உருட்டி தண்ணீரில் போட்டு வைக்கலாம். பரிமாறும்போது தயிர்/மோர், சின்ன வெங்காயம், காரக்குழம்பு அல்லது துவையலுடன் சாப்பிடலாம்.'
  ];

  const benefits = [
    'உடல் சூட்டைத் தணிக்கும் (Body Coolant)',
    'செரிமான ஆரோக்கியம் & நார்ச்சத்து (Fiber Rich)',
    'சர்க்கரை நோய் கட்டுப்பாடு (Diabetes Control)',
    'இரத்த சோகை நீங்க (Rich in Iron)',
    'உடனடி ஆற்றல் & உடல் வலிமை (Instant Energy)'
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-[#3d2b1f] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Hero Section with Center Image */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="relative group">
              <img
                src="/homepage_image/kambu_kali_image.jpg"
                alt="Kambu Kali"
                className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] h-auto max-h-[500px] mx-auto mt-10 rounded-2xl shadow-2xl object-contain border-4 border-[#d6a756] bg-[#fffaf0] p-2 transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#702424] mt-6">
              கம்பு களி (Kambu Kali)
            </h1>

            <p className="text-lg text-[#795548] max-w-2xl">
              உடலுக்குப் புத்துணர்ச்சியும் குளிர்ச்சியும் தரும் பாரம்பரியமிக்க கம்பங்களி மற்றும் கம்பங்கூழ்.
            </p>
          </div>

          {/* Section 1: Ingredients (தேவையான பொருட்கள்) */}
          <div className="bg-[#fffaf0] border border-[#d6a756]/40 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-[#702424] mb-4 border-b border-[#d6a756]/40 pb-2">
              1. தேவையான பொருட்கள் (Ingredients)
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#5d4037]">
              {ingredients.map((item, index) => (
                <li key={index} className="bg-[#f5edda] p-4 rounded-xl border border-[#d6a756]/30 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9A6B3A] shrink-0"></span>
                  <span className="font-medium text-[#5d4037]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Preparation Steps (செய்முறை) */}
          <div>
            <h2 className="text-2xl font-bold text-[#702424] mb-6">
              2. செய்முறை (Preparation Steps)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((description, index) => (
                <div key={index} className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors">
                  <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1">
                    Step 0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#702424] mb-2">
                    படி {index + 1}
                  </h3>
                  <p className="text-[#5d4037] text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Health Benefits (நன்மைகள்) */}
          <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-[#702424] mb-6 border-b border-[#d6a756]/40 pb-2">
              3. கம்பு களியின் நன்மைகள் (Health Benefits)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((title, index) => (
                <div key={index} className="bg-[#f5edda] p-5 rounded-xl border border-[#d6a756]/30 shadow-sm">
                  <h3 className="text-lg font-bold text-[#9A6B3A] mb-2">
                    ✓ {title}
                  </h3>
                  <p className="text-[#5d4037] text-sm leading-relaxed">
                    கம்பில் அதிகளவு இரும்புச்சத்து, நார்ச்சத்து மற்றும் புரதச்சத்து உள்ளதால் உடலுக்கு நல்ல ஆரோக்கியத்தையும் நீண்ட நேர சுறுசுறுப்பையும் தருகிறது.
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default KambuKaliDetail;