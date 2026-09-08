import Home from "./home.json";
import { Link } from "react-router-dom";

import TamilQuiz from '../componant/tamilheritagequiz';

function Homepage2() {
  return (
    <div>
         {/* Music Section */}
      <section className="text-center py-14 sm:py-20 px-6 mt-10">

        <h2 id="musicscroll" className="text-2xl sm:text-3xl font-bold">
           Echoes of Tradition
        </h2>

        <p className="mt-3 text-sm text-gray-500 max-w-2xl mx-auto">
           From ancient melodies to temple rhythms,
            discover the instruments and musical traditions
            that shaped the sound of Tamil culture.
        </p>

      </section>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 space-y-20">

  {/* SECTION 1: YAZH */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

    {/* IMAGE */}
    <div className="w-full h-full min-h-[350px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden rounded-2xl">
      <img
        src={Home[0].yuzhimage}
        alt="Yazh - Ancient Tamil Musical Instrument"
        className="w-full h-full object-cover object-center"
      />
    </div>

    {/* CONTENT */}
    <div className="w-full min-w-0 flex flex-col justify-center">
      <p className="text-[#9A6B3A] text-xs sm:text-sm uppercase tracking-[3px] font-semibold mb-4">
        Ancient Tamil • String Instrument
      </p>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#182522] mb-6">
        யாழ்
      </h2>

      <p className="text-[#4d554f] text-base sm:text-lg leading-8 mb-6">
        Yazh is one of the oldest string instruments associated with ancient Tamil musical tradition. Closely connected with the cultural life of the Sangam period, it was made with a wooden body and strings that were plucked to produce melodic sounds.
        <br /><br />
        References to the Yazh can be found in ancient Tamil literature, including Sangam works and Silappathikaram. Tamil literary traditions describe different forms such as Periyazh, Siriyazh, Makara Yazh, and Sakoda Yazh, each differing in structure and musical characteristics.
        <br /><br />
        Although the Yazh is no longer commonly played today, it remains an important symbol of the musical knowledge, artistic traditions, and cultural heritage of ancient Tamil society.
      </p>

      <p className="text-[#9A6B3A] italic font-medium mb-7">
        “A forgotten melody from ancient Tamilakam.”
      </p>

      {/* AUDIO */}
      <div className="w-full mt-auto">
        <p className="text-sm text-[#9A6B3A] font-semibold mb-3">
          🎧 Listen to the Yazh
        </p>

        <audio
          controls
          preload="metadata"
          className="w-full h-10"
        >
          <source
            src={Home[0].yuzhmp3}
            type="audio/mpeg"
          />
        </audio>
      </div>
    </div>

  </div>


  {/* parai instrumetn section */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

    {/* IMAGE */}
    <div className="w-full h-full min-h-[350px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden rounded-2xl">
      <img
        src={Home[0].paraiimage}
        alt="Parai - Ancient Tamil Percussion Instrument"
        className="w-full h-full object-cover object-center"
      />
    </div>

    {/* CONTENT */}
    <div className="w-full min-w-0 flex flex-col justify-center">
      <p className="text-[#9A6B3A] text-xs sm:text-sm uppercase tracking-[3px] font-semibold mb-4">
        Ancient Tamil • Percussion Instrument
      </p>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#182522] mb-6">
        பறை
      </h2>

      <p className="text-[#4d554f] text-base sm:text-lg leading-8 mb-6">
        Parai is one of the oldest percussion instruments in traditional Tamil culture, symbolising communication, celebration, and resilience. Crafted with a wooden frame and a tightly stretched animal membrane, it is played using two wooden sticks to produce powerful, rhythmic beats.
        <br /><br />
        Deeply rooted in Sangam literature and ancient folk traditions, the Parai was historically used to announce royal decrees, signal gatherings, celebrate festivals, and guide agricultural activities across ancient Tamilakam.
        <br /><br />
        Today, the Parai stands as a vibrant symbol of social unity, folk art preservation, and the rich cultural identity of the Tamil people, echoing through both traditional and contemporary music.
      </p>

      <p className="text-[#9A6B3A] italic font-medium mb-7">
        “The rhythm that awakened ancient Tamil land.”
      </p>

      {/* AUDIO */}
      <div className="w-full mt-auto">
        <p className="text-sm text-[#9A6B3A] font-semibold mb-3">
          🎧 Listen to the Parai
        </p>

        <audio
          controls
          preload="metadata"
          className="w-full h-10"
        >
          <source
            src={Home[0].paraimp3}
            type="audio/mpeg"
          />
        </audio>
      </div>
    </div>

  </div>

</div>

<div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 space-y-20">

  {/* SECTION 1: YAZH */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

    {/* IMAGE */}
    <div className="w-full h-full min-h-[350px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden rounded-2xl">
      <img
        src={Home[0].nadhaswaramimage}
        alt="Yazh - Ancient Tamil Musical Instrument"
        className="w-full h-full object-cover object-center"
      />
    </div>

    {/* CONTENT */}
    <div className="w-full min-w-0 flex flex-col justify-center">
      <p className="text-[#9A6B3A] text-xs sm:text-sm uppercase tracking-[3px] font-semibold mb-4">
        Ancient Tamil • String Instrument
      </p>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#182522] mb-6">
       நாதஸ்வரம்
      </h2>

      <p className="text-[#4d554f] text-base sm:text-lg leading-8 mb-6">
        Yazh is one of the oldest string instruments associated with ancient Tamil musical tradition. Closely connected with the cultural life of the Sangam period, it was made with a wooden body and strings that were plucked to produce melodic sounds.
        <br /><br />
        References to the Yazh can be found in ancient Tamil literature, including Sangam works and Silappathikaram. Tamil literary traditions describe different forms such as Periyazh, Siriyazh, Makara Yazh, and Sakoda Yazh, each differing in structure and musical characteristics.
        <br /><br />
        Although the Yazh is no longer commonly played today, it remains an important symbol of the musical knowledge, artistic traditions, and cultural heritage of ancient Tamil society.
      </p>

      <p className="text-[#9A6B3A] italic font-medium mb-7">
        “A forgotten melody from ancient Tamilakam.”
      </p>

      {/* AUDIO */}
      <div className="w-full mt-auto">
        <p className="text-sm text-[#9A6B3A] font-semibold mb-3">
          🎧 Listen to the Yazh
        </p>

        <audio
          controls
          preload="metadata"
          className="w-full h-10"
        >
          <source
            src={Home[0].nadhaswarammp3}
            type="audio/mpeg"
          />
        </audio>
      </div>
    </div>

  </div>


  {/* SECTION 2: PARAI */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

    {/* IMAGE */}
    <div className="w-full h-full min-h-[350px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden rounded-2xl">
      <img
        src={Home[0].thavilimage}
        alt="Parai - Ancient Tamil Percussion Instrument"
        className="w-full h-full object-cover object-center"
      />
    </div>

    {/* CONTENT */}
    <div className="w-full min-w-0 flex flex-col justify-center">
      <p className="text-[#9A6B3A] text-xs sm:text-sm uppercase tracking-[3px] font-semibold mb-4">
        Ancient Tamil • Percussion Instrument
      </p>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#182522] mb-6">
        தவில்
      </h2>

      <p className="text-[#4d554f] text-base sm:text-lg leading-8 mb-6">
        Parai is one of the oldest percussion instruments in traditional Tamil culture, symbolising communication, celebration, and resilience. Crafted with a wooden frame and a tightly stretched animal membrane, it is played using two wooden sticks to produce powerful, rhythmic beats.
        <br /><br />
        Deeply rooted in Sangam literature and ancient folk traditions, the Parai was historically used to announce royal decrees, signal gatherings, celebrate festivals, and guide agricultural activities across ancient Tamilakam.
        <br /><br />
        Today, the Parai stands as a vibrant symbol of social unity, folk art preservation, and the rich cultural identity of the Tamil people, echoing through both traditional and contemporary music.
      </p>

      <p className="text-[#9A6B3A] italic font-medium mb-7">
        “The rhythm that awakened ancient Tamil land.”
      </p>

      {/* AUDIO */}
      <div className="w-full mt-auto">
        <p className="text-sm text-[#9A6B3A] font-semibold mb-3">
          🎧 Listen to the Parai
        </p>

        <audio
          controls
          preload="metadata"
          className="w-full h-10"
        >
          <source
            src={Home[0].thavilmp3}
            type="audio/mpeg"
          />
        </audio>
      </div>
    </div>

  </div>

</div>


    <section className="text-center py-14 sm:py-20 px-6 mt-20">

        <h2 id="sportscroll" className="text-2xl sm:text-3xl font-bold">
          Now Discover Our Sporting Heritage....
        </h2>

        <p className="mt-3 text-sm text-gray-500">
         Explore the traditional sports and games that
          have been passed down through generations of Tamil culture.
        </p>

      </section>
<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-4 sm:mx-8 lg:mx-20 xl:mx-40 gap-2">

  {/* Jallikattu */}
  <div className="relative hover:z-10">
    <div className="relative w-full h-[360px] sm:h-[400px] lg:h-[440px] transition-transform duration-500 hover:scale-105">

      <img
        src={Home[0].jallikattu}
        alt="Jallikattu"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-white font-serif font-bold text-2xl sm:text-3xl">
          Jallikattu
        </h1>
      </div>

    </div>
  </div>


  {/* Silambam */}
  <div className="relative hover:z-10">
    <div className="relative w-full h-[360px] sm:h-[400px] lg:h-[440px] transition-transform duration-500 hover:scale-105">

      <img
        src={Home[0].silambam}
        alt="Silambam"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-white font-serif font-bold text-2xl sm:text-3xl">
          Silambam
        </h1>
      </div>

    </div>
  </div>


  {/* Kabaddi */}
  <div className="relative hover:z-10">
    <div className="relative w-full h-[360px] sm:h-[400px] lg:h-[440px] transition-transform duration-500 hover:scale-105">

      <img
        src={Home[0].kabhadi}
        alt="Kabaddi"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-white font-serif font-bold text-2xl sm:text-3xl">
          Kabaddi
        </h1>
      </div>

    </div>
  </div>


  {/* Archery */}
  <div className="relative hover:z-10">
    <div className="relative w-full h-[360px] sm:h-[400px] lg:h-[440px] transition-transform duration-500 hover:scale-105">

      <img
        src={Home[0].archery}
        alt="Archery"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-white font-serif font-bold text-2xl sm:text-3xl">
          Archery
        </h1>
      </div>

    </div>
  </div>

</div>

{/*jallikattu text*/}
<div className="rounded-2xl text-justify mt-20 p-10 bg-[#f5edda]">
  <div className=" text-center border-2 p-3 bg-[#8b2f2f] font-serif text-3xl font-bold tracking-wider text-white">
    Sport's Heritage....
  </div>
        <h1 className="text-xl text-[#9A6B3A] font-bold pt-10 ">
          Jallikattu
        </h1>

<p className="mt-3 text-sm text-gray-500">
         Jallikattu is a traditional Tamil bull-taming sport closely associated with the Pongal harvest festival. It represents courage, strength, skill, and the cultural connection between Tamil rural communities and native cattle.
          Traditionally, the aim is for participants to hold onto the bull's hump as it moves through the arena. Beyond being a sport, Jallikattu is an important part of Tamil rural heritage and is celebrated especially in villages across Tamil Nadu.
          <br/><span className="font-bold p-3">Key Values:</span>
          Courage • Strength • Skill • Tradition • Community
        </p>

{/*jallikattu text*/}
 <h1 className="text-xl text-[#9A6B3A] font-bold mb-3 pt-7">
          Silambam
        </h1>

<p className="mt-3 text-sm text-gray-500">
        Silambam is an ancient Tamil martial art traditionally practiced using a bamboo staff. It requires speed, balance, coordination, agility, and physical discipline.
        The art has been passed down through generations and remains an important part of Tamil martial heritage. Silambam reflects the traditional knowledge and physical training practices of Tamil communities.
       <br/><span className="font-bold p-3">Key Values:</span>
        Agility • Balance • Discipline • Skill • Heritage 
         
        </p>
{/*jallikattu text*/}

    <h1 className="text-xl text-[#9A6B3A] font-bold mb-3 pt-7">
          Kabhaddi
        </h1>

<p className="mt-3 text-sm text-gray-500">
            Kabaddi is a traditional team sport that combines strength, speed, strategy, and teamwork. It has long been popular in rural communities across Tamil Nadu and other parts of India.
            Players must use quick movements and strategic thinking to attack and defend while working closely with their team. The sport represents physical strength, courage, and competitive spirit.
            <br/><span className="font-bold p-3">Key Values: </span>
            Strength • Speed • Strategy • Teamwork
        </p>

{/*Archery*/}

<h1 className="text-xl text-[#9A6B3A] font-bold mb-3 pt-7">
          Archery
        </h1>

<p className="mt-3 text-sm text-gray-500">
        Archery is an ancient skill associated with hunting, warfare, and martial training. It requires precision, concentration, coordination, and control.
        In Tamil historical traditions, archery was an important martial skill used by warriors and rulers. Today, it continues as both a traditional practice and a competitive sport.
        <br/><span className="font-bold p-3">Key Values:</span>
        Precision • Focus • Control • Patience • Skill
         
        </p>
</div>



      {/*food Section*/}

<section id="foodscroll" className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden mt-20">

  {/* Banana Leaf Image */}
  <img
    src={Home[0].vaazh_elai}
    alt="Traditional Tamil food on banana leaf"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Title */}
  <div className="relative z-10 h-full flex items-center justify-center">
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold tracking-wider text-white">
     TRADITIONAL FOOD
    </h1>
  </div>

</section>



      {/*Food Section*/}
     <section className="text-center py-14 sm:py-20 px-6 mt-10">

        <h2 className="text-2xl sm:text-3xl font-bold">
           A Taste of Tamil Heritage
        </h2>

        <p className="mt-3 text-sm text-gray-500 max-w-2xl mx-auto">
          From ancient grains to traditional recipes,
          discover the flavors and food traditions
          that shaped Tamil culture.
        </p>

      </section>
      
        
              {/* ================= Food CARDS ================= */}
        
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-8 lg:px-16 xl:px-24 my-10">
        
        
                {/* ================= Food CARD 1 ================= */}
        
                <div className="overflow-hidden rounded-xl bg-white border border-[#e5e0d7] shadow-md hover:shadow-xl transition duration-300">
        
                  {/* Image */}
                  <div className="relative h-[160px] sm:h-[170px] lg:h-[190px] overflow-hidden">
        
                    <img
                      src={Home[0].kambu_koozh}
                      alt="Brihadeeswarar Temple"
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />
        
                    {/* Category */}
                    <span className="absolute bottom-3 left-3 bg-[#123f35] text-white px-3 py-1 rounded-full text-[10px] font-semibold">
                      FOOD
                    </span>
        
                  </div>
        
        
                  {/* Content */}
                  <div className="p-4">
        
                    <h2 className="text-lg sm:text-xl font-serif font-bold text-[#222] justify">
                      🌾 1. கம்பங்கூழ் — Kambu Koozh
                    </h2>
        
                    <p className="mt-2 text-xs sm:text-sm leading-5 text-[#6b6b63] line-clamp-2">
                      A traditional Tamil food made from pearl millet. It was commonly enjoyed in rural Tamil Nadu, especially during hot weather, and is valued for its nourishing and cooling qualities.
                    </p>
        
                    
        
                    <div className="mt-4 flex items-center justify-between">
        
                      <span className="text-xs text-[#8B2F2F] font-semibold">
                        Tamil Heritage
                      </span>

                      <Link to="/FoodPage1">
                      <h1 className="text-xs font-semibold text-[#222] hover:text-[#8B2F2F]">
                        Learn More →
                      </h1>
                      </Link>
        
                    </div>
        
                  </div>
        
                </div>
        
        
                {/* ================= Food CARD 2 ================= */}
        
                <div className="overflow-hidden rounded-xl bg-white border border-[#e5e0d7] shadow-md hover:shadow-xl transition duration-300">
        
                  <div className="relative h-[160px] sm:h-[170px] lg:h-[190px] overflow-hidden">
        
                    <img
                      src={Home[0].thenai_rice}
                      alt="Palani Temple"
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />
        
                    <span className="absolute bottom-3 left-3 bg-[#123f35] text-white px-3 py-1 rounded-full text-[10px] font-semibold">
                      FOOD
                    </span>
        
                  </div>
        
        
                  <div className="p-4">
        
                    <h2 className="text-lg sm:text-xl font-serif font-bold text-[#222]">
                     🌾 2. தினை சோறு — Thinai Soru
                    </h2>
        
                    <p className="mt-2 text-xs sm:text-sm leading-5 text-[#6b6b63] line-clamp-2">
                      A traditional dish prepared with foxtail millet, one of the ancient grains associated with Tamil food culture. Thinai was an important staple and is also mentioned in ancient Tamil literature.
                    </p>
        
                  
                    <div className="mt-4 flex items-center justify-between">
        
                      <span className="text-xs text-[#8B2F2F] font-semibold">
                        Tamil Heritage
                      </span>

                    <Link to="/FoodPage2">
                      <h1 className="text-xs font-semibold text-[#222] hover:text-[#8B2F2F]">
                        Learn More →
                      </h1>
                    </Link>
        
                    </div>
        
                  </div>
        
                </div>
        
        
                {/* ================= Food CARD 3 ================= */}
        
                <div className="overflow-hidden rounded-xl bg-white border border-[#e5e0d7] shadow-md hover:shadow-xl transition duration-300">
        
                  <div className="relative h-[160px] sm:h-[170px] lg:h-[190px] overflow-hidden">
        
                    <img
                      src={Home[0].koollu_rasam}
                      alt="Temple"
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />
        
                    <span className="absolute bottom-3 left-3 bg-[#123f35] text-white px-3 py-1 rounded-full text-[10px] font-semibold">
                      FOOD
                    </span>
        
                  </div>
        
        
                  <div className="p-4">
        
                    <h2 className="text-lg sm:text-xl font-serif font-bold text-[#222]">
                     🍲 3. கொள்ளு ரசம் — Kollu Rasam
                    </h2>
        
                    <p className="mt-2 text-xs sm:text-sm leading-5 text-[#6b6b63] line-clamp-2">
                      A traditional Tamil rasam made with horse gram, tamarind, pepper, garlic, and aromatic spices. Its earthy flavor reflects the simple and nutritious cooking traditions of Tamil households.
                    </p>
      
        
                    <div className="mt-4 flex items-center justify-between">
        
                      <span className="text-xs text-[#8B2F2F] font-semibold">
                        Tamil Heritage
                      </span>
                      <Link to="/FoodPage3">
                      <h1 className="text-xs font-semibold text-[#222] hover:text-[#8B2F2F]">
                        Learn More →
                      </h1>
                      </Link>
        
                    </div>
        
                  </div>
        
                </div>
        
        
                {/* ================= Food CARD 4 ================= */}
        
                <div className="lg:col-start-2 overflow-hidden rounded-xl bg-white border border-[#e5e0d7] shadow-md hover:shadow-xl transition duration-300">
        
                  <div className="relative h-[160px] sm:h-[170px] lg:h-[190px] overflow-hidden">
        
                    <img
                      src={Home[0].kambu_kali}
                      alt="Temple"
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />
        
                    <span className="absolute bottom-3 left-3 bg-[#123f35] text-white px-3 py-1 rounded-full text-[10px] font-semibold">
                      FOOD
                    </span>
        
                  </div>
        
        
                  <div className="p-4">
        
                    <h2 className="text-lg sm:text-xl font-serif font-bold text-[#222]">
                      🌾 4. கம்பு களி — Kambu Kali
                    </h2>
        
                    <p className="mt-2 text-xs sm:text-sm leading-5 text-[#6b6b63] line-clamp-2">
                      A traditional staple prepared from pearl millet flour and water. Once a common rural meal, Kambu Kali represents the simple, hearty food habits of traditional Tamil communities.
                    </p>
        
                    <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#777]">
        
                      <span>
                        {Home[0].location4}
                      </span>
        
                      <span>
                        {Home[0].period4}
                      </span>
        
                    </div>
        
                    <div className="mt-4 flex items-center justify-between">
        
                      <span className="text-xs text-[#8B2F2F] font-semibold">
                        Tamil Heritage
                      </span>
                      <Link to="/FoodPage4">
                      <h1 className="text-xs font-semibold text-[#222] hover:text-[#8B2F2F]">
                        Learn More →
                      </h1>
                      </Link>
        
                    </div>
        
                  </div>
        
                </div>
        
              </section>


<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-6 sm:mx-10 md:mx-16 lg:mx-30 mt-16">

  <div className="flex items-center justify-center">
    <img
      src={Home[0].vaazh_elai}
      alt="Food with Vaazh Elai"
      className="w-full max-w-[500px] h-[300px] sm:h-[400px] md:h-[450px] object-cover rounded-2xl"
    />
  </div>

  <div className="text-justify mt-6 md:mt-10">

    <h1 className="text-2xl sm:text-3xl text-[#9A6B3A] font-bold mb-3 pt-2 md:pt-7">
      FLAVOURS OF FOOD
    </h1>

    <p className="text-sm sm:text-base leading-7">
      Tamil food culture is a rich expression of the land,
      traditions, and everyday life of Tamil people. From ancient grains
      such as kambu, thinai, and kezhvaragu to traditional dishes like
      kambu koozh, kambu kali, thinai soru, and kollu rasam, Tamil cuisine
      has always valued simple, nourishing ingredients. Many of these foods
      were closely connected to farming communities and the changing seasons.
      Traditional cooking often used locally grown grains, vegetables, herbs,
      spices, and natural ingredients, creating food that was both flavorful
      and wholesome. Passed down from generation to generation, these recipes
      preserve the taste and stories of Tamil heritage.
    </p>

    <button
      className="
        px-6 sm:px-10
        py-3 sm:py-4
        w-full
        flex
        items-center
        justify-center
        mt-5
        rounded-full
        bg-[#182522]
        text-[#f5edda]
        font-bold
        font-serif
        text-sm sm:text-base
        hover:bg-[#9A6B3A]
        transition
        duration-300
      "
    >
      FOOD'S THAT FILL WITH NATURE!
    </button>

  </div>

</div>
      

    <TamilQuiz/>
</div>
  );
}

export default Homepage2;