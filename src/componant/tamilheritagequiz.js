import { useState } from "react";

// ---------------- QUIZ COMPONENT ----------------
function TamilHeritageQuiz() {
  const questions = [
    {
      question: "1. உலகின் மிக உயரமான ஒற்றைக்கல் நந்தி அமைந்துள்ள தஞ்சை பெரிய கோயிலைக் கட்டியவர் யார்?",
      options: ["கரிகால சோழன்", "முதலாம் ராஜராஜ சோழன்", "நரசிம்ம வர்மன்", "முதலாம் ராஜேந்திர சோழன்"],
      answer: 1, // Index of correct option (முதலாம் ராஜராஜ சோழன்)
    },
    {
      question: "2. குமரி முனையில் அமைந்துள்ள 133 அடி உயரமுள்ள திருவள்ளுவர் சிலை எந்தக் கற்களால் செதுக்கப்பட்டது?",
      options: ["கருங்கல் (Granite)", "செங்கல் (Brick)", "மார்பிள் (Marble)", "மணற்கல் (Sandstone)"],
      answer: 0,
    },
    {
      question: "3. 'தமிழின் முதல் காப்பியம்' என்றும், யாழ் பற்றிய குறிப்புகள் அதிகம் இடம்பெறும் நூல் எது?",
      options: ["மணிமேகலை", "திருக்குறள்", "சிலப்பதிகாரம்", "சீவக சிந்தாமணி"],
      answer: 2,
    },
    {
      question: "4. பண்டைய தமிழ் இலக்கியங்களில் குறிப்பிடப்படும் மிகவும் பழமையான நரம்பு இசைக்கருவி எது?",
      options: ["வீணை", "யாழ்", "நாதஸ்வரம்", "கோட்டுவாத்தியம்"],
      answer: 1,
    },
    {
      question: "5. பொங்கல் திருநாளின் போது வீரத்தின் அடையாளமாக விளையாடப்படும் பாரம்பரிய விளையாட்டு எது?",
      options: ["சிலம்பம்", "கபடி", "ஜல்லிக்கட்டு", "சதுரங்கம்"],
      answer: 2,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQ = currentQuestion + 1;
    if (nextQ < questions.length) {
      setCurrentQuestion(nextQ);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div id="tamilquiz" className="max-w-3xl mx-auto my-20 p-6 sm:p-10 bg-[#f5edda] rounded-2xl shadow-lg border border-[#e5e0d7]">
      <div className="text-center mb-8">
        <span className="bg-[#8b2f2f] text-white text-xs sm:text-sm uppercase tracking-widest px-4 py-1 rounded-full font-semibold">
          Tamil Culture & Heritage
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#182522] mt-3">
          தமிழ் பாரம்பரிய வினாடி-வினா (Quiz)
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          கோயில்கள், சிலைகள், நூல்கள் மற்றும் கலாச்சாரம் பற்றிய உங்கள் அறிவை சோதியுங்கள்!
        </p>
      </div>

      {showResult ? (
        <div className="text-center py-8 space-y-5">
          <h3 className="text-2xl font-bold text-[#182522]">
            🎉 வினாடி-வினா முடிந்தது!
          </h3>
          <p className="text-lg text-[#9A6B3A] font-semibold">
            உங்கள் மதிப்பெண்: <span className="text-2xl font-bold text-[#8b2f2f]">{score}</span> / {questions.length}
          </p>
          <p className="text-sm text-gray-600">
            {score === 5
              ? "அற்புதம்! தமிழ் பாரம்பரியத்தைப் பற்றி சிறப்பாக அறிந்து வைத்துள்ளீர்கள்! 🏆"
              : score >= 3
              ? "மிக நன்று! தமிழ் கலாச்சாரத்தைப் பற்றிய நல்ல அறிவு உள்ளது! 👍"
              : "நல்ல முயற்சி! தமிழ் பாரம்பரியத்தைப் பற்றி மேலும் தெரிந்துகொள்ள நமது பக்கத்தை தொடர்ந்து படியுங்கள். 📚"}
          </p>
          <button
            onClick={handleRestart}
            className="mt-4 px-8 py-3 bg-[#182522] text-[#f5edda] rounded-full font-bold hover:bg-[#9A6B3A] transition duration-300"
          >
            மீண்டும் முயற்சிக்க (Play Again) 🔄
          </button>
        </div>
      ) : (
        <div>
          {/* Question Counter */}
          <div className="flex justify-between items-center mb-4 text-xs sm:text-sm font-semibold text-[#9A6B3A]">
            <span>கேள்வி {currentQuestion + 1} / {questions.length}</span>
            <span>மதிப்பெண்: {score}</span>
          </div>

          {/* Question */}
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#182522] mb-6">
            {questions[currentQuestion].question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                className={`w-full text-left p-4 rounded-xl text-sm sm:text-base font-medium transition duration-200 border ${
                  selectedOption === idx
                    ? "bg-[#182522] text-white border-[#182522]"
                    : "bg-white text-[#222] border-[#e5e0d7] hover:bg-[#eadecc]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <div className="mt-8 text-right">
            <button
              onClick={handleNextQuestion}
              disabled={selectedOption === null}
              className={`px-8 py-3 rounded-full font-bold text-sm sm:text-base transition duration-300 ${
                selectedOption !== null
                  ? "bg-[#8b2f2f] text-white hover:bg-[#a83b3b] cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {currentQuestion + 1 === questions.length ? "முடிவு காண் →" : "அடுத்த கேள்வி →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TamilHeritageQuiz;