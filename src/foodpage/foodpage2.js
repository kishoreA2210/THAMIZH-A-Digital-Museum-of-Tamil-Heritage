import React from 'react';

function ThinaiSooruDetail() {
  // Data State / Constants inside function
  const ingredients = [
    'திணை அரிசி (Foxtail Millet) - 1 கப்',
    'தண்ணீர் - 2.5 முதல் 3 கப்',
    'நல்லெண்ணெய் அல்லது நெய் - 1 தேக்கரண்டி (விருப்பப்பட்டால்)',
    'உப்பு - தேவையான அளவு'
  ];

  const steps = [
    {
      title: 'திணை சுத்தம் செய்தல் & ஊறவைத்தல்',
      description: 'திணை அரிசியை நன்றாக 2-3 முறை கழுவி, சுத்தமான தண்ணீரில் சுமார் 20 முதல் 30 நிமிடங்கள் ஊறவைக்கவும்.'
    },
    {
      title: 'தண்ணீர் கொதிக்க வைத்தல்',
      description: 'ஒரு பாத்திரத்தில் அல்லது குக்கரில் 2.5 முதல் 3 கப் தண்ணீர் ஊற்றி, சிறிதளவு உப்பு மற்றும் நெய்/நல்லெண்ணெய் சேர்த்து கொதிக்க வைக்கவும்.'
    },
    {
      title: 'வேகவைத்தல் (பாத்திரம் முறை)',
      description: 'தண்ணீர் கொதித்ததும் ஊறவைத்த திணையைச் சேர்த்து, மூடிபோட்டு மிதமான தீயில் 10-12 நிமிடங்கள் தண்ணீர் வற்றும் வரை வேகவைக்கவும்.'
    },
    {
      title: 'குக்கர் முறை (மாற்று வழி)',
      description: 'குக்கரைப் பயன்படுத்துவதாக இருந்தால், திணையைச் சேர்த்து மூடிபோட்டு மிதமான தீயில் 2 விசில் (Whistles) விட்டு அடுப்பை அணைக்கவும்.'
    },
    {
      title: 'பரிமாறுதல்',
      description: 'ஆவி பறக்கும் சூடான திணைச் சோறு தயார்! இதனுடன் சாம்பார், காரக்குழம்பு, ரசம் அல்லது காய்கறி கூட்டுகளுடன் தொட்டுச் சாப்பிட மிகவும் சுவையாக இருக்கும்.'
    }
  ];

  const benefits = [
    {
      title: 'சர்க்கரை நோயாளிகளுக்கு சிறந்தது (Low GI)',
      desc: 'திணை அரிசியில் குறைந்த Glycemic Index உள்ளதால், இரத்தத்தில் சர்க்கரையின் அளவை உடனடியாக உயர்த்தாமல் சீராக வைக்க உதவுகிறது.'
    },
    {
      title: 'நார்ச்சத்து மிகுந்தது (High Fiber)',
      desc: 'அதிகப்படியான நார்ச்சத்து உள்ளதால் செரிமான மண்டலத்தை சீராக்கி, மலச்சிக்கல் பிரச்சனையைக் தடுக்கிறது.'
    },
    {
      title: 'இதய ஆரோக்கியம் (Heart Health)',
      desc: 'உடலில் உள்ள கெட்ட கொழுப்பைக் (LDL) குறைத்து, இதய ரத்த நாளங்களின் ஆரோக்கியத்தைப் பாதுகாக்கிறது.'
    },
    {
      title: 'நரம்பு மண்டல பலம் (Rich in Vitamin B12)',
      desc: 'தசைகள் மற்றும் நரம்பு மண்டலத்தின் செயல்பாட்டிற்கு தேவையான வைட்டமின்கள் மற்றும் தாதுக்கள் நிறைந்துள்ளன.'
    },
    {
      title: 'எலும்பு பலம் (Calcium & Iron)',
      desc: 'கால்சியம் மற்றும் இரும்புச்சத்து நிறைந்துள்ளதால் எலும்புகளுக்கு வலிமை அளித்து, இரத்த சோகையைக் போக்க உதவுகிறது.'
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
                src="/homepage_image/thenai_rice_image.jpg"
                alt="Thinai Sooru"
                className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] h-auto max-h-[500px] mx-auto mt-10 rounded-2xl shadow-2xl object-contain border-4 border-[#d6a756] bg-[#fffaf0] p-2 transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#702424] mt-6">
              திணைச் சோறு (Thinai Sooru)
            </h1>

            <p className="text-lg text-[#795548] max-w-2xl">
              சத்துக்கள் நிறைந்த, பாரம்பரிய ஊட்டச்சத்துமிக்க திணை அரிசி சோறு.
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
              3. திணைச் சோற்றின் நன்மைகள் (Health Benefits)
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

export default ThinaiSooruDetail;