import React from 'react';

function KolluRasamDetail() {
  // Data State / Constants inside function
  const ingredients = [
    'கொள்ளு (Horse Gram) - 1/4 கப்',
    'புளி - நெல்லிக்காய் அளவு (தண்ணீரில் ஊறவைத்தது)',
    'தக்காளி - 1 (நன்கு பிசைந்தது)',
    'பூண்டு - 5-6 பற்கள் (தட்டியது)',
    'சீரகம் & மிளகு - தலா 1 தேக்கரண்டி (கொரகொரப்பாக பொடித்தது)',
    'கடுகு, பெருங்காயம், கறிவேப்பிலை, கொத்தமல்லி - தாளிக்க',
    'நல்லெண்ணெய் / நெய் - 1 தேக்கரண்டி',
    'உப்பு - தேவையான அளவு'
  ];

  const steps = [
    {
      title: 'கொள்ளு வேகவைத்தல்',
      description: 'கொள்ளை நன்கு கழுவி, தேவையான அளவு தண்ணீர் சேர்த்து குக்கரில் 5-6 விசில் விட்டு மிருதுவாக வேகவைக்கவும்.'
    },
    {
      title: 'கொள்ளு தண்ணீர் எடுத்தல்',
      description: 'வெந்த கொள்ளை வடித்து, அந்த கொள்ளு வேகவைத்த தண்ணீரை தனியாக எடுத்து வைத்துக்கொள்ளவும். (வெந்த கொள்ளையில் சிறிதளவு அரைத்தும் சேர்க்கலாம்).'
    },
    {
      title: 'புளி & தக்காளி கலவை தயார் செய்தல்',
      description: 'ஊறவைத்த புளி சாறுடன் பிசைந்த தக்காளி, தட்டிய பூண்டு, மிளகு-சீரகப் பொடி, பெருங்காயத்தூள், மஞ்சள் தூள் மற்றும் உப்பு சேர்த்து கொள்ளு தண்ணீருடன் கலக்கவும்.'
    },
    {
      title: 'தாளித்தல் & கொதிக்க வைத்தல்',
      description: 'ஒரு வாணலியில் எண்ணெய்/நெய் ஊற்றி கடுகு, காய்ந்த மிளகாய், கறிவேப்பிலை தாளிக்கவும். தயார் செய்த கொள்ளு கரைசலை ஊற்றி மிதமான தீயில் நுரை கூடி வரும் வரை சூடாக்கவும் (அதிகமாக கொதிக்க விடக்கூடாது).'
    },
    {
      title: 'பரிமாறுதல்',
      description: 'இறுதியாக கொத்தமல்லி தழை தூவி இறக்கவும். ஆவி பறக்கும் சுவையான கொள்ளு ரசம் தயார்! இதை சூடான சாதத்துடன் சாப்பிடலாம் அல்லது சூப் போல பருகலாம்.'
    }
  ];

  const benefits = [
    {
      title: 'உடல் எடை குறைப்பு (Weight Loss)',
      desc: 'கொள்ளு உடலில் உள்ள தேவையில்லாத கொழுப்பைக் கரைத்து, உடல் எடையை வேகமாக குறைக்க மிகவும் உதவுகிறது.'
    },
    {
      title: 'சளி மற்றும் இருமலுக்கு நிவாரணம்',
      desc: 'இதில் சேர்க்கப்படும் மிளகு, சீரகம் மற்றும் கொள்ளு இணைந்து நெஞ்சு சளி, இருமல் மற்றும் ஜலதோஷத்தை விரைவாகக் குணப்படுத்தும்.'
    },
    {
      title: 'சர்க்கரை நோய் கட்டுப்பாடு',
      desc: 'இரத்தத்தில் உள்ள சர்க்கரையின் அளவை சீராக வைத்து, இன்சுலின் சுரப்பை அதிகரிக்க உதவுகிறது.'
    },
    {
      title: 'சிறுநீரகக் கல் பிரச்சனை (Kidney Stones)',
      desc: 'கொள்ளு நீர் தொடர்ந்து குடித்து வந்தால் சிறுநீரகத்தில் உள்ள கற்கள் கரையவும், சிறுநீரக ஆரோக்கியம் மேம்படவும் உதவும்.'
    },
    {
      title: 'உடல் பித்தம் & வாயுத் தொல்லை நீங்க',
      desc: 'செரிமான மண்டலத்தை பலப்படுத்தி, வாயுக்கோளாறு மற்றும் செரிமானமின்மை பிரச்சனைகளை போக்கும்.'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-[#3d2b1f] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Hero Section with Center Image */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="relative group">
              <img
                src="/homepage_image/koollu_rasam_image.jpg"
                alt="Kollu Rasam"
                className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] h-auto max-h-[500px] mx-auto mt-10 rounded-2xl shadow-2xl object-contain border-4 border-[#d6a756] bg-[#fffaf0] p-2 transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#702424] mt-6">
              கொள்ளு ரசம் (Kollu Rasam)
            </h1>

            <p className="text-lg text-[#795548] max-w-2xl">
              உடல் எடையைக் குறைக்கும், சளி இருமலுக்குச் சிறந்த மருத்துவக் குணம் கொண்ட பாரம்பரிய ரசம்.
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
              {steps.map((step, index) => (
                <div key={index} className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 rounded-2xl shadow-lg hover:border-[#9A6B3A] transition-colors">
                  <div className="text-[#9A6B3A] text-sm font-semibold tracking-wider uppercase mb-1">
                    Step 0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#702424] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#5d4037] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Health Benefits (நன்மைகள்) */}
          <div className="bg-[#fffaf0] border border-[#d6a756]/40 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-[#702424] mb-6 border-b border-[#d6a756]/40 pb-2">
              3. கொள்ளு ரசத்தின் நன்மைகள் (Health Benefits)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-[#f5edda] p-5 rounded-xl border border-[#d6a756]/30 shadow-sm">
                  <h3 className="text-lg font-bold text-[#9A6B3A] mb-2">
                    ✓ {benefit.title}
                  </h3>
                  <p className="text-[#5d4037] text-sm leading-relaxed">
                    {benefit.desc}
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

export default KolluRasamDetail;