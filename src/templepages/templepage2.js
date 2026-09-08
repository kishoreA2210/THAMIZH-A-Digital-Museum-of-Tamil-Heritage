import React from "react";

function TemplePage2() {
  return (
    <>
      <div className="relative w-full min-h-screen bg-[#FDFBF7] font-sans">
        
        {/* Background Section */}
        <div className="relative w-full min-h-[520px] md:min-h-[600px] text-white px-6 md:px-16 pt-8 pb-24 flex flex-col justify-between">

          {/* Background Image */}
          <img
            src="./templepages_image/palani_temple_image1.jpg"
            alt="Palani Murugan Temple"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

          {/* Back Link */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
              <span>&larr;</span> Back to Temple Collection
            </div>
          </div>

          {/* Banner Main Content */}
          <div className="relative z-10 max-w-2xl mt-6 mb-12 space-y-4">

            {/* Tag */}
            <div className="inline-block px-3 py-1 bg-[#8C6D3B]/40 border border-[#A88B54]/50 rounded-md backdrop-blur-sm">
              <span className="text-[11px] font-semibold tracking-wider text-[#EAD8B1] uppercase">
                A TEMPLE COLLECTION
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-5xl font-serif leading-tight">
              Palani Murugan Temple <br />
              <span className="text-2xl md:text-4xl font-normal text-gray-200">
                (Arulmigu Dhandayuthapani Swamy Temple)
              </span>
            </h1>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-sm md:text-base text-gray-300">
              <span className="text-[#D4AF37]">📍</span>
              <span>Palani, Dindigul, Tamil Nadu</span>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-300/90 leading-relaxed max-w-xl">
              A sacred hill temple dedicated to Lord Murugan, renowned as one
              of the most important spiritual landmarks and pilgrimage centres
              of Tamil Nadu.
            </p>

            {/* Fact Info Cards */}
            <div className="flex flex-wrap items-center gap-6 pt-4">

              {/* Fact 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#8C6D3B]/60 bg-black/40 flex items-center justify-center text-[#EAD8B1]">
                  📅
                </div>

                <div>
                  <p className="text-[11px] text-gray-400 uppercase">
                    Ancient Shrine
                  </p>
                  <p className="text-sm font-medium text-gray-200">
                    Over 2,000 Years Old
                  </p>
                </div>
              </div>

              {/* Fact 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#8C6D3B]/60 bg-black/40 flex items-center justify-center text-[#EAD8B1]">
                  🛕
                </div>

                <div>
                  <p className="text-[11px] text-gray-400 uppercase">
                    Presiding Deity
                  </p>
                  <p className="text-sm font-medium text-gray-200">
                    Lord Dhandayuthapani
                  </p>
                </div>
              </div>

              {/* Fact 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#8C6D3B]/60 bg-black/40 flex items-center justify-center text-[#EAD8B1]">
                  ⛰️
                </div>

                <div>
                  <p className="text-[11px] text-gray-400 uppercase">
                    Sacred Hill
                  </p>
                  <p className="text-sm font-medium text-gray-200">
                    Palani Hills
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* Temple Overview */}

      <div className="grid grid-cols-2 gap-2 ml-15 p-5 mr-15">

        <div>
          <h1 className="text-amber-900 tracking-wide">
            OVERVIEW..
          </h1>

          <h1 className="text-2xl text-bold font-serif tracking-wide">
            A Sacred Abode of Lord Murugan :
          </h1>

          <p className="text-justify p-5">
            The Palani Murugan Temple, also known as Arulmigu Dhandayuthapani
            Swamy Temple, is one of the most revered temples dedicated to Lord
            Murugan. Situated atop the Sivagiri Hill in Palani, the temple is
            one of the six sacred abodes of Murugan, known as the Arupadai Veedu.
            <br />
            <br />
            The temple is famous for its spiritual significance, ancient
            traditions, the sacred Panchamirtham offering, and the unique idol
            of Lord Murugan worshiped as Dhandayuthapani.
          </p>

          <h1 className="text-white rounded-2xl w-60 h-12 bg-[#8b2f2f] text-center p-2">
            Scroll Down to Learn More
          </h1>
        </div>


        <div>
          <img
            src="./templepages_image/palani_temple_image1.jpg"
            alt="Palani Murugan Temple"
            className="w-full h-full rounded-2xl"
          />
        </div>

      </div>


      {/* Architectural Highlights */}

      <div className="ml-15 p-5 mr-15">

        <h2 className="text-xl font-bold text-amber-900 tracking-wide mb-6 font-sans uppercase">
          Architectural Highlights
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">


          {/* Card 1 */}
          <div className="bg-[#f7f3eb] rounded-xl p-6 text-center border border-[#ebd3c2]/50 shadow-sm">

            <div className="w-12 h-12 bg-[#3b2314] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 stroke-[#f7f3eb] fill-none stroke-[1.5]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2L8 8h8l-4-6zm-3 6L6 22h12L15 8H9zm-1 8h8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Hilltop Temple
            </h3>

            <p className="font-sans text-xs text-gray-600 leading-relaxed">
              The sacred temple stands atop the Sivagiri Hill and can be
              reached through the traditional stone steps, rope car, or winch
              service.
            </p>

          </div>


          {/* Card 2 */}
          <div className="bg-[#f7f3eb] rounded-xl p-6 text-center border border-[#ebd3c2]/50 shadow-sm">

            <div className="w-12 h-12 bg-[#3b2314] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 stroke-[#f7f3eb] fill-none stroke-[1.5]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 15c0-3 2-6 6-6h4c4 0 6 3 6 6v3H4v-3zm3-6V6c0-1.5 1-3 3-3s3 1.5 3 3v3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Sacred Sanctum
            </h3>

            <p className="font-sans text-xs text-gray-600 leading-relaxed">
              The sanctum houses Lord Dhandayuthapani, depicted as a youthful
              ascetic holding a sacred staff.
            </p>

          </div>


          {/* Card 3 */}
          <div className="bg-[#f7f3eb] rounded-xl p-6 text-center border border-[#ebd3c2]/50 shadow-sm">

            <div className="w-12 h-12 bg-[#3b2314] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 stroke-[#f7f3eb] fill-none stroke-[1.5]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 4a3 3 0 013 3v2a3 3 0 01-6 0V7a3 3 0 013-3zm0 8c-3 0-5 2-5 4v4h10v-4c0-2-2-4-5-4z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Siddhar Tradition
            </h3>

            <p className="font-sans text-xs text-gray-600 leading-relaxed">
              The temple is closely associated with the Siddhar tradition and
              the spiritual legacy of Siddhar Bogar.
            </p>

          </div>


          {/* Card 4 */}
          <div className="bg-[#f7f3eb] rounded-xl p-6 text-center border border-[#ebd3c2]/50 shadow-sm">

            <div className="w-12 h-12 bg-[#3b2314] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 stroke-[#f7f3eb] fill-none stroke-[1.5]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 10a3 3 0 116 0v5H9v-5zm-5 8h16v2H4v-2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Panchamirtham
            </h3>

            <p className="font-sans text-xs text-gray-600 leading-relaxed">
              Palani Panchamirtham is the temple's famous sacred offering,
              traditionally prepared and offered to Lord Murugan.
            </p>

          </div>

        </div>

      </div>


      {/* Temple Gallery */}

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">


          {/* Left Column: History & Full Height Image */}

          <div className="flex flex-col h-full bg-amber-50/40 p-5 rounded-xl border border-amber-100 shadow-sm">

            <h1 className="font-bold text-amber-900 tracking-wide text-xl uppercase mb-3">
              History
            </h1>

            <p className="text-justify text-gray-700 leading-relaxed mb-4 text-sm">
              Palani has been an important centre of Murugan worship for
              centuries. According to Tamil tradition, Lord Murugan came to
              Palani after a divine dispute involving the sacred fruit of
              knowledge. He chose the hill as his abode and became known as
              Dhandayuthapani, the ascetic form of Murugan.
              <br />
              <br />
              The temple has since grown into one of the most significant
              pilgrimage centres in Tamil Nadu and attracts devotees from
              across India and the world.
            </p>


            <div className="flex-1 w-full min-h-[300px] relative overflow-hidden rounded-lg">

              <img
                src="./templepages_image/palani_temple_image2.jpg"
                alt="Palani Murugan Temple"
                className="absolute inset-0 w-full h-full object-cover"
              />

            </div>

          </div>


          {/* Right Column: Gallery & Content */}

          <div className="flex flex-col h-full justify-between bg-amber-50/40 p-5 rounded-xl border border-amber-100 shadow-sm space-y-4">


            {/* Image Gallery Grid */}

            <div className="grid grid-cols-3 gap-2">

              <img
                src="./templepages_image/palani_temple_image3.jpg"
                alt="Palani Temple Gallery 1"
                className="w-full h-37 object-cover rounded-md shadow-sm"
              />

              <img
                src="./templepages_image/palani_temple_image4.jpg"
                alt="Palani Temple Gallery 2"
                className="w-full h-37 object-cover rounded-md shadow-sm"
              />

              <img
                src="./templepages_image/palani_temple_image5.jpg"
                alt="Palani Temple Gallery 3"
                className="w-full h-37 object-cover rounded-md shadow-sm"
              />

              <img
                src="./templepages_image/palani_temple_image6.jpg"
                alt="Palani Temple Gallery 4"
                className="w-full h-37 object-cover rounded-md shadow-sm"
              />

              <img
                src="./templepages_image/palani_temple_image7.jpg"
                alt="Palani Temple Gallery 5"
                className="w-full h-37 object-cover rounded-md shadow-sm"
              />

              <img
                src="./templepages_image/palani_temple_image8.jpg"
                alt="Palani Temple Gallery 6"
                className="w-full h-37 object-cover rounded-md shadow-sm"
              />

            </div>


            {/* Presiding Deity Section */}

            <div className="space-y-1">

              <h2 className="font-bold text-amber-900 tracking-wide text-sm uppercase border-b border-amber-200 pb-1">
                Presiding Deity (Main God)
              </h2>

              <p className="text-justify text-gray-700 text-xs leading-relaxed">
                <span className="font-semibold text-gray-900">
                  Deity:{" "}
                </span>
                Lord Murugan, worshiped as Dhandayuthapani Swamy.
              </p>

              <p className="text-justify text-gray-700 text-xs leading-relaxed">
                <span className="font-semibold text-gray-900">
                  Main Feature:{" "}
                </span>
                Lord Murugan is depicted as a youthful ascetic holding a
                Dhandam, or sacred staff.
              </p>

            </div>


            {/* Architectural Highlights Section */}

            <div className="space-y-1">

              <h2 className="font-bold text-amber-900 tracking-wide text-sm uppercase border-b border-amber-200 pb-1">
                Architectural Highlights
              </h2>

              <ul className="list-disc pl-4 space-y-1 text-gray-700 text-xs text-justify">

                <li>
                  <span className="font-semibold text-gray-900">
                    Sacred Status:
                  </span>{" "}
                  One of the six sacred abodes of Lord Murugan, known as
                  Arupadai Veedu.
                </li>

                <li>
                  <span className="font-semibold text-gray-900">
                    Location:
                  </span>{" "}
                  Situated atop the Sivagiri Hill in Palani, Tamil Nadu.
                </li>

                <li>
                  <span className="font-semibold text-gray-900">
                    Special Tradition:
                  </span>{" "}
                  Famous for the sacred Palani Panchamirtham and the worship
                  of Dhandayuthapani Swamy.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default TemplePage2;