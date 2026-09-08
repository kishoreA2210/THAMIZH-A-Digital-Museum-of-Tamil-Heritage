
import { Link } from "react-router-dom";
import Temple from "./tample_image.jpg";
import Home from "./home.json";

function Homepage() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section
        id="home"
        className="relative h-screen w-full bg-cover bg-[center_40%]"
        style={{ backgroundImage: `url(${Temple})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-6">
          <div className="max-w-3xl">

            <p className="mb-4 text-xs tracking-[0.4em] text-[#d6a756] uppercase">
              A Digital Museum of Tamil Heritage
            </p>

            <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-wide">
              THAMIZH
            </h1>

            <div className="mx-auto my-6 h-px w-16 bg-[#d6a756]"></div>

            <p className="mx-auto max-w-2xl text-sm md:text-base leading-7 text-gray-200">
              Five thousand years of language, art, temple craft, music,
              cuisine and wisdom — preserved, celebrated, and shared with
              the world.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

              <a
                href="#collection"
                className="bg-[#8b2f2f] px-7 py-3 text-xs font-semibold tracking-wider hover:bg-[#6f2424]"
              >
                ABOUT US
              </a>

              <a
                href="#tamilquiz"
                className="border border-white/70 px-7 py-3 text-xs font-semibold tracking-wider hover:bg-white hover:text-black"
              >
                LET CHECK WHAT YOU KNOW ABOUT OUR CULTURE..!
              </a>

            </div>

          </div>
        </div>

  
      </section>


      {/* ================= QUOTE SECTION ================= */}

      <section className="text-center py-16 sm:py-20 px-6">

        <h2  className="text-xl sm:text-2xl font-bold">
         “ஆயிரம் ஆண்டுகள் கடந்தாலும், தமிழின் மரபு என்றும் அழியாது.”
        </h2>

      </section>


      {/* ================= IMAGE GRID ================= */}

      <section id="heritagescroll" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[30px] gap-4 p-4 sm:p-5 mx-4 sm:mx-8 md:mx-16 lg:mx-40 my-10">

        {/* Image 1 */}
        <div className="row-span-8 sm:row-span-7 relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105">

          <a href="#templescroll">
            <img 
              id="temple"
              src={Home[0].image1}
              alt="Temple"
              className="w-full h-full object-cover"
              
            />
          
         
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

            <h2 className="text-white text-2xl lg:text-3xl font-bold text-center px-4 drop-shadow-2xl">
              {Home[0].text1}
            </h2>

          </div>
          </a> 

        </div>


        {/* Image 2 */}
        <div className="row-span-8 sm:row-span-10 relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105">
        <a href="#statuescroll">
          <img
            src={Home[0].image2}
            alt="Temple"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

            <h2 className="text-white text-2xl lg:text-3xl font-bold text-center px-4 drop-shadow-2xl">
              {Home[0].text2}
            </h2>

          </div>
          </a>

        </div>


        {/* Image 3 */}
        <div className="row-span-8 sm:row-span-7 relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105">
        <a href="#musicscroll">
          <img
            src={Home[0].image3}
            alt="Temple"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

            <h2 className="text-white text-2xl lg:text-3xl font-bold text-center px-4 drop-shadow-2xl">
              {Home[0].text3}
            </h2>

          </div>
          </a>
        </div>


        {/* Image 4 */}
        <div className="row-span-8 sm:row-span-7 relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105">
        <a href="#sportscroll">
          <img
            src={Home[0].image4}
            alt="Temple"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

            <h2 className="text-white text-2xl lg:text-3xl font-bold text-center px-4 drop-shadow-2xl">
              {Home[0].text4}
            </h2>

          </div>
          </a>

        </div>


        {/* Image 5 */}
        <div className="row-span-8 sm:row-span-7 relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105">
        <a href="#foodscroll">
          <img
            src={Home[0].image5}
            alt="Temple"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

            <h2 className="text-white text-2xl lg:text-3xl font-bold text-center px-4 drop-shadow-2xl">
              {Home[0].text5}
            </h2>

          </div>
          </a>

        </div>


        {/* Image 6 */}
        <div className="row-span-8 sm:row-span-7 relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105">
        <a href="#bookscroll">
          <img
            src={Home[0].image6}
            alt="Temple"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

            <h2 className="text-white text-2xl lg:text-3xl font-bold text-center px-4 drop-shadow-2xl">
              {Home[0].text6}
            </h2>

          </div>
          </a>
        </div>

      </section>


      {/* ================= TEMPLE SECTION TITLE ================= */}

      <section className="text-center py-14 sm:py-20 px-6">

        <h2 id="templescroll" className="text-2xl sm:text-3xl font-bold">
          Now Learn Our Legacy....
        </h2>

        <p className="mt-3 text-sm text-gray-500">
          Explore the architectural heritage of Tamil Nadu.
        </p>

      </section>







      {/* ================= TEMPLE CARDS ================= */}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-8 lg:px-16 xl:px-24 my-10">


        {/* ================= TEMPLE CARD 1 ================= */}

        <div className="overflow-hidden rounded-xl bg-white border border-[#e5e0d7] shadow-md hover:shadow-xl transition duration-300">

          {/* Image */}
          <div className="relative h-[160px] sm:h-[170px] lg:h-[190px] overflow-hidden">

            <img
              src={Home[0].temple1}
              alt="Brihadeeswarar Temple"
              className="w-full h-100 object-cover transition duration-500 hover:scale-105"
            />

            {/* Category */}
            <span className="absolute bottom-3 left-3 bg-[#123f35] text-white px-3 py-1 rounded-full text-[10px] font-semibold">
              TEMPLE
            </span>

          </div>


          {/* Content */}
          <div className="p-4">

            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#222]">
              {Home[0].title1}
            </h2>

            <p className="mt-2 text-xs sm:text-sm leading-5 text-[#6b6b63] line-clamp-2">
              {Home[0].description1}
            </p>

            <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#777]">

              <span>
                {Home[0].location1}
              </span>

              <span>
                {Home[0].period1}
              </span>

            </div>

            <div className="mt-4 flex items-center justify-between">

              <span className="text-xs text-[#8B2F2F] font-semibold">
                Tamil Heritage
              </span>

          
            <Link to="/TemplePage1">
            
            <h1 className="text-xs font-semibold text-[#222] hover:text-[#8B2F2F]">
                Learn More →
              </h1>
            </Link>
          
            
              

            </div>

          </div>

        </div>


        {/* ================= TEMPLE CARD 2 ================= */}

        <div className="overflow-hidden rounded-xl bg-white border border-[#e5e0d7] shadow-md hover:shadow-xl transition duration-300">

          <div className="relative h-[160px] sm:h-[170px] lg:h-[190px] overflow-hidden">

            <img
              src={Home[0].temple2}
              alt="Palani Temple"
              className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />

            <span className="absolute bottom-3 left-3 bg-[#123f35] text-white px-3 py-1 rounded-full text-[10px] font-semibold">
              TEMPLE
            </span>

          </div>


          <div className="p-4">

            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#222]">
              {Home[0].title2}
            </h2>

            <p className="mt-2 text-xs sm:text-sm leading-5 text-[#6b6b63] line-clamp-2">
              {Home[0].description2}
            </p>

            <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#777]">

              <span>
                {Home[0].location2}
              </span>

              <span>
                {Home[0].period2}
              </span>

            </div>

            <div className="mt-4 flex items-center justify-between">

              <span className="text-xs text-[#8B2F2F] font-semibold">
                Tamil Heritage
              </span>

              <Link to="/TemplePage2">
            
            <h1 className="text-xs font-semibold text-[#222] hover:text-[#8B2F2F]">
                Learn More →
              </h1>
            </Link>
            </div>

          </div>

        </div>


        {/* ================= TEMPLE CARD 3 ================= */}

        <div className="overflow-hidden rounded-xl bg-white border border-[#e5e0d7] shadow-md hover:shadow-xl transition duration-300">

          <div className="relative h-[160px] sm:h-[170px] lg:h-[190px] overflow-hidden">

            <img
              src={Home[0].temple3}
              alt="Temple"
              className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />

            <span className="absolute bottom-3 left-3 bg-[#123f35] text-white px-3 py-1 rounded-full text-[10px] font-semibold">
              TEMPLE
            </span>

          </div>


          <div className="p-4">

            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#222]">
              {Home[0].title3}
            </h2>

            <p className="mt-2 text-xs sm:text-sm leading-5 text-[#6b6b63] line-clamp-2">
              {Home[0].description3}
            </p>

            <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#777]">

              <span>
                {Home[0].location3}
              </span>

              <span>
                {Home[0].period3}
              </span>

            </div>

            <div className="mt-4 flex items-center justify-between">

              <span className="text-xs text-[#8B2F2F] font-semibold">
                Tamil Heritage
              </span>

              <Link to="/TemplePage3">
            
            <h1 className="text-xs font-semibold text-[#222] hover:text-[#8B2F2F]">
                Learn More →
              </h1>
            </Link>

            </div>

          </div>

        </div>


        {/* ================= TEMPLE CARD 4 ================= */}

        <div className="lg:col-start-2 overflow-hidden rounded-xl bg-white border border-[#e5e0d7] shadow-md hover:shadow-xl transition duration-300">

          <div className="relative h-[160px] sm:h-[170px] lg:h-[190px] overflow-hidden">

            <img
              src={Home[0].temple4}
              alt="Temple"
              className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />

            <span className="absolute bottom-3 left-3 bg-[#123f35] text-white px-3 py-1 rounded-full text-[10px] font-semibold">
              TEMPLE
            </span>

          </div>


          <div className="p-4">

            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#222]">
              {Home[0].title4}
            </h2>

            <p className="mt-2 text-xs sm:text-sm leading-5 text-[#6b6b63] line-clamp-2">
              {Home[0].description4}
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

             <Link to="/TemplePage4">
            
            <h1 className="text-xs font-semibold text-[#222] hover:text-[#8B2F2F]">
                Learn More →
              </h1>
            </Link>

            </div>

          </div>

        </div>

      </section>

  


  {/* Statue section Image */}


 {/* Statue Section */}
<section id="statuescroll" className="text-center py-10 sm:py-16 px-4">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#182522]">
    Stories Carved in Stone....
  </h2>
  <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
    From divine figures to legendary personalities, explore the sculptures that preserve the history, beliefs, and artistic traditions of Tamil culture.
  </p>
</section>

{/* Main Card Container */}
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
  <div className="flex flex-col lg:flex-row items-center justify-center relative">

    {/* Image Container */}
    <div className="z-20 relative -mb-10 lg:mb-0 lg:-mr-12 flex-shrink-0">
      <img
        src={Home[0].image2}
        alt="Statue"
        className="
          w-[240px] h-[240px]
          sm:w-[300px] sm:h-[300px]
          lg:w-[360px] lg:h-[360px]
          object-cover
          rounded-2xl
          shadow-2xl
          border-4 border-white
        "
      />
    </div>

    {/* Content Box */}
    <div
      className="
        bg-[#f5edda]
        w-full
        rounded-2xl
        pt-16 pb-8 px-6
        sm:pt-16 sm:pb-10 sm:px-10
        lg:py-12 lg:pl-20 lg:pr-12
        text-center lg:text-left
        shadow-sm
      "
    >
      <p className="text-[#9A6B3A] uppercase tracking-[3px] text-xs sm:text-sm font-semibold mb-2">
        Heritage • Sculpture
      </p>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#182522] leading-tight mb-4">
        Stories Carved in Stone
      </h2>

      <p className="text-[#4d554f] text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
        Tamil Nadu's temples are more than places of worship.
        Their sculptures preserve stories of gods, kings, artists,
        and everyday life, carrying centuries of Tamil history through stone.
      </p>

      <p className="text-[#9A6B3A] font-medium italic text-sm sm:text-base mb-6">
        “A legacy shaped by stone, time, and tradition.”
      </p>

      <button
        className="
          px-6 sm:px-8
          py-3
          rounded-full
          bg-[#182522]
          text-[#f5edda]
          text-sm sm:text-base
          font-semibold
          hover:bg-[#9A6B3A]
          transition
          duration-300
          shadow-md
        "
      >
        Explore Statue →
      </button>
    </div>

  </div>
</div>

    {/*Statue card collection*/}

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

    {/* Card 1 */}
    <div className="group relative min-h-[260px] bg-[#f5edda] rounded-2xl overflow-hidden p-6 sm:p-8 flex items-center">
      <div className="w-[55%] pr-2 sm:pr-4 z-10">
        <p className="text-[#9A6B3A] text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] font-semibold mb-2 sm:mb-3">
          {Home[0].category5}
        </p>

        <h3 className="text-lg sm:text-2xl font-bold text-[#182522] mb-2 sm:mb-3">
          {Home[0].description5}
        </h3>

        <p className="text-[#4d554f] text-xs sm:text-sm leading-5 sm:leading-6 mb-3 sm:mb-4">
          A timeless representation of Lord Shiva, symbolising
          cosmic dance, creation and transformation.
        </p>
        <Link to="/StatuePage1">
        <h1 className="text-[#9A6B3A] font-semibold text-xs sm:text-sm group-hover:underline">
          Discover →
        </h1>
        </Link>
      </div>

      <div className="absolute right-0 top-0 w-[45%] h-full">
        <img
          src={Home[0].statueimg1}
          alt="Nataraja Statue"
          className="w-full h-full object-cover rounded-l-[40px] sm:rounded-l-[80px] group-hover:scale-105 transition duration-500"
        />
      </div>
    </div>


    {/* Card 2 */}
    <div className="group relative min-h-[260px] bg-[#f5edda] rounded-2xl overflow-hidden p-6 sm:p-8 flex items-center">
      <div className="w-[55%] pr-2 sm:pr-4 z-10">
        <p className="text-[#9A6B3A] text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] font-semibold mb-2 sm:mb-3">
          {Home[0].category6}
        </p>

        <h3 className="text-lg sm:text-2xl font-bold text-[#182522] mb-2 sm:mb-3">
          {Home[0].description6}
        </h3>

        <p className="text-[#4d554f] text-xs sm:text-sm leading-5 sm:leading-6 mb-3 sm:mb-4">
          Pallava stone sculptures reflect the artistic excellence
          and architectural heritage of ancient Tamilakam.
        </p>

        <Link to="/StatuePage2">
        <h1 className="text-[#9A6B3A] font-semibold text-xs sm:text-sm group-hover:underline">
          Discover →
        </h1>
        </Link>

      </div>

      <div className="absolute right-0 top-0 w-[45%] h-full">
        <img
          src={Home[0].statueimg2}
          alt="Mahabalipuram Sculpture"
          className="w-full h-full object-cover rounded-l-[40px] sm:rounded-l-[80px] group-hover:scale-105 transition duration-500"
        />
      </div>
    </div>


    {/* Card 3 */}
    <div className="group relative min-h-[260px] bg-[#f5edda] rounded-2xl overflow-hidden p-6 sm:p-8 flex items-center">
      <div className="w-[55%] pr-2 sm:pr-4 z-10">
        <p className="text-[#9A6B3A] text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] font-semibold mb-2 sm:mb-3">
          {Home[0].category7}
        </p>

        <h3 className="text-lg sm:text-2xl font-bold text-[#182522] mb-2 sm:mb-3">
          {Home[0].description7}
        </h3>

        <p className="text-[#4d554f] text-xs sm:text-sm leading-5 sm:leading-6 mb-3 sm:mb-4">
          Guardian figures carved into temple architecture showcase
          the strength and detailed craftsmanship of Tamil sculptors.
        </p>


      <Link to="/StatuePage3">
        <h1 className="text-[#9A6B3A] font-semibold text-xs sm:text-sm group-hover:underline">
          Discover →
        </h1>

        </Link>
      </div>

      <div className="absolute right-0 top-0 w-[45%] h-full">
        <img
          src={Home[0].statueimg3}
          alt="Temple Guardian Statue"
          className="w-full h-full object-cover rounded-l-[40px] sm:rounded-l-[80px] group-hover:scale-105 transition duration-500"
        />
      </div>
    </div>


    {/* Card 4 */}
    <div className="group relative min-h-[260px] bg-[#f5edda] rounded-2xl overflow-hidden p-6 sm:p-8 flex items-center">
      <div className="w-[55%] pr-2 sm:pr-4 z-10">
        <p className="text-[#9A6B3A] text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] font-semibold mb-2 sm:mb-3">
          {Home[0].category8}
        </p>

        <h3 className="text-lg sm:text-2xl font-bold text-[#182522] mb-2 sm:mb-3">
          {Home[0].description8}
        </h3>

        <p className="text-[#4d554f] text-xs sm:text-sm leading-5 sm:leading-6 mb-3 sm:mb-4">
          Every carved figure carries a story, preserving Tamil
          traditions and artistic knowledge across generations.
        </p>

        <Link to="/StatuePage4">
        <h1 className="text-[#9A6B3A] font-semibold text-xs sm:text-sm group-hover:underline">
          Discover →
        </h1>
        </Link>

      </div>

      <div className="absolute right-0 top-0 w-[45%] h-full">
        <img
          src={Home[0].statueimg4}
          alt="Tamil Statue"
          className="w-full h-full object-cover rounded-l-[40px] sm:rounded-l-[80px] group-hover:scale-105 transition duration-500"
        />
      </div>
    </div>

  </div>
</div>

{/*Book section*/}

<section className="text-center py-14 sm:py-20 px-6 mt-20">

        <h2 id="bookscroll" className="text-2xl sm:text-3xl font-bold">
          Traces of Knowledge
        </h2>

        <p className="mt-3 text-sm text-gray-500">
         From ancient grammar to timeless epics,
          explore the texts that shaped Tamil language,
          thought, and culture.
        </p>

      </section>



   <div className="rounded-2xl text-justify p-5 md:p-10 lg:p-16">
      <div className=" text-center border-2 p-3 bg-[#8b2f2f] font-serif text-3xl font-bold tracking-wider text-white">
        Stories of Tamil Legacy....
      </div>
            <h1 className="text-xl text-[#9A6B3A] font-bold pt-10 ">
              The Written Legacy of Tamil
            </h1>

          <p className="mt-3 text-xl text-gray-500">
       
          Tamil literature is one of the oldest and richest literary traditions in the world, carrying centuries of knowledge, imagination, philosophy, and human experience. From the ancient Sangam period to the classical epics and timeless works of later generations, Tamil books have preserved the thoughts and values of society across generations.
          These literary works speak about love, courage, friendship, morality, nature, kingship, spirituality, and everyday life. More than just stories and poems, they offer a window into the culture, beliefs, and way of life of ancient Tamil society. Through these treasured works, the voice of Tamil civilization continues to live on, connecting the wisdom of the past with the generations of today.
        </p>
         <p className="mt-3 text-xl text-gray-500">
       
         Tamil books are a timeless collection of stories, poems, wisdom, and knowledge that reflect the richness of Tamil civilization. From ancient Sangam literature and classical epics to works of philosophy, ethics, devotion, and social life, these books preserve the thoughts, values, emotions, and traditions of generations. They speak about love, courage, nature, justice, friendship, morality, and the human experience, giving us a deeper understanding of how Tamil society evolved through the centuries. More than written works, these literary treasures are a living connection between the past and the present, carrying the voice and wisdom of Tamil heritage into future generations. </p>
           <h1 className="text-xl text-[#9A6B3A] text-center font-bold pt-20 ">
              BOOKS OF WISDOM
            </h1>
              <p className="mt-3 text-sm text-center text-gray-500">
       
        Explore the timeless stories, ideas, and values preserved through Tamil literature. </p>

      </div>


   


    </>
  );
}
export default Homepage;