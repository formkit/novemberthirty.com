<template>
  <div class="min-h-screen bg-black text-white">
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <header class="container mx-auto px-4 py-8">
      <div class="flex flex-col items-center text-center">
        <img src="/img/n30-small.jpeg" alt="NovemberThirty Logo" class="w-32 h-32 mb-4 rounded-full">
        <h1 class="text-5xl font-bold mb-2">NovemberThirty</h1>
        <p class="text-xl text-gray-300 mb-8">Documenting the transition to a post-AI world</p>
      </div>
    </header>

    <!-- About Section -->
    <section class="container mx-auto px-4 py-12">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-6 text-center">About the Podcast</h2>
        <div class="text-lg text-gray-300 leading-relaxed space-y-4">
          <p>
            We're committing to multiple years of chronicling the transition to a post-AI world. 
            It's called "November Thirty" (the date ChatGPT came out), and each episode has a short 
            digest and commentary on what's happening in the AI space—not developer focused at all.
          </p>
          <p>
            Then we're going to have a guest on to talk about how AI is affecting them, their industry, 
            their family, and more. It's intended to be much bigger picture than just "how does it help me program" 
            and more like "what value do I have as a person in this new world."
          </p>
          <p>
            We're going to have on professors, truck drivers, doctors, politicians, and others to try and 
            document this moment in time and what it means for all of us as humans with love and ambition.
          </p>
        </div>
      </div>
    </section>

    <!-- Hosts Section -->
    <section class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold mb-12 text-center">Meet Your Hosts</h2>
      
      <div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <!-- Justin -->
        <div class="text-center">
          <img src="/img/justin.jpeg" alt="Justin Schroeder" class="w-48 h-48 mx-auto mb-6 rounded-full object-cover">
          <h3 class="text-2xl font-bold mb-4">Justin Schroeder</h3>
          <div class="space-y-2 text-gray-300">
            <p>Co-founder of <a href="https://wearebraid.com" target="_blank" rel="noopener" class="text-blue-400 hover:text-blue-300 underline">Braid</a></p>
            <p>Creator of <a href="https://formkit.com" target="_blank" rel="noopener" class="text-blue-400 hover:text-blue-300 underline">FormKit</a></p>
            <div class="flex justify-center space-x-4 mt-4">
              <a href="https://x.com/jpschroeder" target="_blank" rel="noopener" class="text-blue-400 hover:text-blue-300">
                @jpschroeder
              </a>
              <a href="mailto:justin@novemberthirty.com" class="text-green-400 hover:text-green-300">
                Contact
              </a>
            </div>
          </div>
        </div>

        <!-- Andrew -->
        <div class="text-center">
          <img src="/img/andrew.jpeg" alt="Andrew Boyd" class="w-48 h-48 mx-auto mb-6 rounded-full object-cover">
          <h3 class="text-2xl font-bold mb-4">Andrew Boyd</h3>
          <div class="space-y-2 text-gray-300">
            <p>Co-founder of <a href="https://wearebraid.com" target="_blank" rel="noopener" class="text-blue-400 hover:text-blue-300 underline">Braid</a></p>
            <p>Creator of <a href="https://formkit.com" target="_blank" rel="noopener" class="text-blue-400 hover:text-blue-300 underline">FormKit</a></p>
            <div class="flex justify-center space-x-4 mt-4">
              <a href="https://x.com/0xBoyd" target="_blank" rel="noopener" class="text-blue-400 hover:text-blue-300">
                @0xBoyd
              </a>
              <a href="mailto:andrew@novemberthirty.com" class="text-green-400 hover:text-green-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="container mx-auto px-4 py-12 text-center">
      <div class="border-t border-gray-800 pt-8">
        <img src="/img/n30-small.jpeg" alt="NovemberThirty" class="w-16 h-16 mx-auto mb-4 rounded-full">
        <p class="text-gray-400">© 2024 NovemberThirty Podcast</p>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>
