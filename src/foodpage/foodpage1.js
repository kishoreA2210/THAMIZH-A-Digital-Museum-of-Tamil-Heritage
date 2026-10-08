import React from 'react';


function KambuKoozhDetail() {
  // Data State / Constants inside function
  const ingredients = [
    'கம்பு (Pearl Millet) - 1 கப்',
    'தண்ணீர் - 4 - 5 கப்',
    'மோர் (Buttermilk) - 1.5 கப்',
    'வெங்காயம் (நறுக்கியது) - 1/2 கப்',
    'பச்சை மிளகாய் / மாங்காய் / ஊறுகாய் - தேவைக்கேற்ப',
    'உப்பு - தேவையான அளவு'
  ];

  const steps = [
    {
      title: 'கம்பு அரைத்தல்',
      description: 'கம்பை நன்கு கழுவி 15 நிமிடங்கள் ஊறவைக்கவும். பின் தண்ணீரை வடித்துவிட்டு, மிக்சியில் போட்டு கொரகொரப்பாக (Rava consistency) அரைத்துக் கொள்ளவும்.'
    },
    {
      title: 'வேகவைத்தல்',
      description: 'ஒரு பாத்திரத்தில் 3 கப் தண்ணீர் ஊற்றி கொதிக்க வைக்கவும். தண்ணீர் கொதித்ததும் அரைத்து வைத்துள்ள கம்பை சேர்த்து கட்டிகள் இல்லாதவாறு கிளறி, குறைந்த தீயில் 15-20 நிமிடங்கள் வேகவைக்கவும்.'
    },
    {
      title: 'புளிக்க வைத்தல் (Optional)',
      description: 'கம்பு வெந்ததும் ஆறவைத்து, இரவு முழுவதும் மூடி வைத்து புளிக்க வைக்கவும் (Probiotic சத்துக்கள் பெற இது சிறந்தது).'
    },
    {
      title: 'மோர் மற்றும் தாளிப்பு சேர்த்தல்',
      description: 'மறுநாள் காலையில் தேவைக்கேற்ப கெட்டி மோர், தேவையான அளவு உப்பு மற்றும் நறுக்கிய சின்ன வெங்காயம் சேர்த்து நன்கு கரைக்கவும்.'
    },
    {
      title: 'பரிமாறுதல்',
      description: 'சுவையான, உடலுக்கு குளிர்ச்சி தரும் கம்பங் கூழ் தயார்! இதனுடன் மாங்காய், ஊறுகாய் அல்லது சுண்டல் வைத்து பருகலாம்.'
    }
  ];

  const benefits = [
    {
      title: 'உடல் குளிர்ச்சி (Body Coolant)',
      desc: 'கோடை காலத்தில் உடலின் வெப்பத்தைக் குறைத்து, உடலை எப்போதும் குளிர்ச்சியாக வைத்திருக்க உதவுகிறது.'
    },
    {
      title: 'செரிமான சக்தி & Probiotics',
      desc: 'புளித்த கம்பங் கூழில் இயற்கை புரோபயாடிக்குகள் நிறைந்துள்ளதால், குடல் ஆரோக்கியத்தை மேம்படுத்துகிறது.'
    },
    {
      title: 'சர்க்கரை நோய் கட்டுப்பாடு',
      desc: 'குறைந்த Glycemic Index கொண்டதால், ரத்தத்தில் சர்க்கரையின் அளவை சீராக வைக்க உதவுகிறது.'
    },
    {
      title: 'எடை குறைப்பு (Weight Loss)',
      desc: 'நார்ச்சத்து (Fiber) அதிகமுள்ளதால், நீண்ட நேரம் பசி எடுக்காமல் தடுத்து உடல் எடையைக் குறைக்க உதவும்.'
    },
    {
      title: 'இரும்புச்சத்து (Rich in Iron)',
      desc: 'இரத்த சோகையைக் (Anemia) குணப்படுத்தவும், உடலுக்குத் தேவையான உடனடி ஆற்றலைத் தரவும் சிறந்தது.'
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
                src="/homepage_image/kambu_kali_image.jpg"
                alt="Kambu Koozh"
                className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] h-auto max-h-[500px] mx-auto mt-10 rounded-2xl shadow-2xl object-contain border-4 border-[#d6a756] bg-[#fffaf0] p-2 transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#702424] mt-6">
              கம்பங் கூழ் (Kambu Koozh)
            </h1>

            <p className="text-lg text-[#795548] max-w-2xl">
              ஆரோக்கியம் மற்றும் பாரம்பரியம் நிறைந்த இயற்கை பானம்.
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
              3. கம்பங் கூழின் நன்மைகள் (Health Benefits)
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

export default KambuKoozhDetail;