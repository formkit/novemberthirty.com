<template>
  <div class="min-h-screen bg-black text-white">
    <NuxtRouteAnnouncer />

    <!-- Banner -->
    <div
      class="w-full overflow-hidden flex justify-center bg-black h-[200px] border-b border-neutral-900"
    >
      <div class="max-w-4xl w-full h-full relative">
        <img
          src="/img/banner.png"
          alt="NovemberThirty Banner"
          class="w-full h-full object-cover mix-blend-hard-light"
        />
        <div class="absolute inset-0 pointer-events-none">
          <div
            class="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black to-transparent"
          ></div>
          <div
            class="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black to-transparent"
          ></div>
        </div>
      </div>
    </div>

    <!-- Header -->
    <header class="container mx-auto px-4 py-8 -mt-20 relative z-10 mb-8">
      <div class="flex flex-col items-center text-center">
        <img
          src="/img/n30-small.jpeg"
          alt="NovemberThirty Logo"
          class="w-32 h-32 mb-4 rounded-full border-4 border-white"
        />
        <h1 class="text-5xl font-bold mb-2 font-heading">NovemberThirty</h1>
        <p class="text-xl text-gray-300 mb-8">
          Documenting the transition to a post-AI world
        </p>
      </div>
    </header>

    <!-- About and Hosts Section -->
    <section class="container mx-auto px-4 lg:py-3">
      <div
        class="max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 space-y-12 lg:space-y-0"
      >
        <!-- About Section -->
        <div>
          <div
            class="text-xl text-gray-300 leading-relaxed space-y-4 lg:space-y-6"
          >
            <p>
              NovemberThirty tells the stories of people transitioning to a
              post-AI world.
            </p>
            <p>
              Episodes drop weekly, with a new guest each week. We discuss with
              our guests about how AI is affecting them, their industry, their
              family, and what they believe.
            </p>
            <p>
              Each episode is followed by a post-interview discussion with the
              hosts, where we discuss the interview as well as the latest
              developments in AI.
            </p>
          </div>
        </div>

        <!-- Hosts Section -->
        <div>
          <div class="space-y-6">
            <!-- Justin -->
            <div
              class="bg-neutral-900 border border-neutral-900 rounded-lg p-6 text-center lg:text-left lg:flex lg:items-center lg:space-x-6"
            >
              <img
                src="/img/justin.jpeg"
                alt="Justin Schroeder"
                class="w-24 h-24 mx-auto lg:mx-0 mb-4 lg:mb-0 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 class="text-2xl mb-1">Justin Schroeder</h3>
                <p class="text-sm text-gray-400 mb-3">Co-host</p>
                <div class="text-gray-300">
                  <div class="space-y-1 text-sm">
                    <p>
                      Co-founder of
                      <a
                        href="https://wearebraid.com"
                        target="_blank"
                        rel="noopener"
                        class="underline"
                        style="color: #f3ce92"
                        >Braid</a
                      >
                    </p>
                    <p>
                      Creator of
                      <a
                        href="https://formkit.com"
                        target="_blank"
                        rel="noopener"
                        class="underline"
                        style="color: #f3ce92"
                        >FormKit</a
                      >
                    </p>
                  </div>
                  <div
                    class="flex justify-center lg:justify-start space-x-4 mt-4"
                  >
                    <a
                      href="https://x.com/jpschroeder"
                      target="_blank"
                      rel="noopener"
                      class="inline-flex items-center space-x-2 px-3 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        />
                      </svg>
                      <span>@jpschroeder</span>
                    </a>
                    <a
                      href="mailto:justin@novemberthirty.com"
                      class="inline-flex items-center space-x-2 px-3 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                        />
                        <path
                          d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                        />
                      </svg>
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Andrew -->
            <div
              class="bg-neutral-900 border border-neutral-900 rounded-lg p-6 text-center lg:text-left lg:flex lg:items-center lg:space-x-6"
            >
              <img
                src="/img/andrew.jpeg"
                alt="Andrew Boyd"
                class="w-24 h-24 mx-auto lg:mx-0 mb-4 lg:mb-0 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 class="text-2xl mb-1">Andrew Boyd</h3>
                <p class="text-sm text-gray-400 mb-3">Co-host</p>
                <div class="text-gray-300">
                  <div class="space-y-1 text-sm">
                    <p>
                      Co-founder of
                      <a
                        href="https://wearebraid.com"
                        target="_blank"
                        rel="noopener"
                        class="underline"
                        style="color: #f3ce92"
                        >Braid</a
                      >
                    </p>
                    <p>
                      Creator of
                      <a
                        href="https://formkit.com"
                        target="_blank"
                        rel="noopener"
                        class="underline"
                        style="color: #f3ce92"
                        >FormKit</a
                      >
                    </p>
                  </div>
                  <div
                    class="flex justify-center lg:justify-start space-x-4 mt-4"
                  >
                    <a
                      href="https://x.com/0xBoyd"
                      target="_blank"
                      rel="noopener"
                      class="inline-flex items-center space-x-2 px-3 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        />
                      </svg>
                      <span>@0xBoyd</span>
                    </a>
                    <a
                      href="mailto:andrew@novemberthirty.com"
                      class="inline-flex items-center space-x-2 px-3 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                        />
                        <path
                          d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                        />
                      </svg>
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="w-full py-12 text-center border-t border-neutral-900 mt-16">
      <div class="container mx-auto px-4 pt-2">
        <img
          src="/img/n30-small.jpeg"
          alt="NovemberThirty"
          class="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-white"
        />
        <p class="text-gray-400">© 2024 NovemberThirty Podcast</p>
      </div>
    </footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap");

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

.font-heading {
  font-family: "Oswald", sans-serif;
  font-weight: 600;
}
</style>
