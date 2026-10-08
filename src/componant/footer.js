function Footer() {
  return (
    <footer className="bg-[#0d1715] text-[#f5f1e8] my-20">

      {/* CTA */}
      <div className="px-4 sm:px-8 lg:px-16 pt-8">
        <div className="rounded-2xl bg-[#f5edda] px-6 py-10 text-center text-[#202522]">

          <p className="text-sm font-semibold tracking-[0.3em] text-[#8b2f2f]">
            KEEP EXPLORING TAMIL HERITAGE
          </p>

          <h2 className="mt-4 font-serif text-2xl sm:text-4xl">
            Discover another story from our collection.
          </h2>

          <a
            href="#heritagescroll"
            className="mt-6 inline-block rounded-md bg-[#8b2f2f] px-7 py-3 text-sm font-semibold text-white hover:bg-[#702424]"
          >
            EXPLORE COLLECTION →
          </a>

        </div>
      </div>


      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">


          {/* BRAND */}
          <div>

            <h2 className="font-serif text-3xl font-bold tracking-wider text-[#c49a4a]">
              THAMIZH
            </h2>

            <p className="mt-2 text-sm tracking-widest">
              A DIGITAL MUSEUM OF
              <br />
              TAMIL HERITAGE
            </p>

            <div className="my-5 h-px w-10 bg-[#c49a4a]" />

            <p className="max-w-sm text-sm leading-7 text-[#b9c0bc]">
              Preserving the legacy, traditions, art, food and stories
              that have shaped Tamil Nadu for generations.
            </p>

            <div className="mt-6 flex gap-3">

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#c49a4a] hover:text-[#f5edda]"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#c49a4a] hover:text-[#f5edda]"
              >
                YouTube
              </a>

              <a
                href="mailto:hello@thamizhmuseum.org"
                className="text-[#c49a4a] hover:text-[#f5edda]"
              >
                Email
              </a>

            </div>

          </div>


          {/* COLLECTIONS */}
          <div>

            <h3 className="mb-5 text-lg font-semibold tracking-widest">
              COLLECTIONS
            </h3>

            <ul className="space-y-3 text-sm text-[#c2c8c4]">

              <li>
                <a
                  href="#home"
                  className="hover:text-[#c49a4a]"
                >
                  › Temples
                </a>
              </li>

              <li>
                <a
                  href="#statuescroll"
                  className="hover:text-[#c49a4a]"
                >
                  › Statue
                </a>
              </li>

              <li>
                <a
                  href="#Music"
                  className="hover:text-[#c49a4a]"
                >
                  › Music Instrument
                </a>
              </li>

              <li>
                <a
                  href="#sportscroll"
                  className="hover:text-[#c49a4a]"
                >
                  › Traditional Games
                </a>
              </li>

              <li>
                <a
                  href="#bookscroll"
                  className="hover:text-[#c49a4a]"
                >
                  › Literature
                </a>
              </li>

              <li>
                <a
                  href="#foodscroll"
                  className="hover:text-[#c49a4a]"
                >
                  › Traditional Food
                </a>
              </li>

            </ul>

          </div>


          {/* LOGO */}
          <div className="mt-15">

            <img
              src="/footer_image/logo.png"
              alt="THAMIZH Museum Logo"
              className="h-auto w-auto"
            />

          </div>

        </div>


        {/* CONTACT */}
        <div className="mt-10 border-t border-[#293631] pt-8">

          <div className="flex flex-col gap-4 text-sm text-[#b9c0bc] md:flex-row md:justify-between">

            <p>📍 Tamil Nadu, India</p>

            <p>✉ hello@thamizhmuseum.org</p>

            <p>☎ +91 12345 67890</p>

          </div>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="border-t border-[#293631] bg-[#101c19]">

        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-sm text-[#aeb7b2] md:flex md:justify-between">

          <p>© 2026 THAMIZH. All rights reserved.</p>

          <p>Designed & Developed for Tamil Heritage ❤️</p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;