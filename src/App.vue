<script setup lang="ts">
import { Github, Linkedin } from 'lucide-vue-next'


import project1 from './assets/img/project-1.png'
import project2 from './assets/img/project-2.png'
import project3 from './assets/img/project-3.png'

type Project = {
  title: string
  description: string
  image: string
  link: string
}

const projects: Project[] = [
  {
    title: 'Country Cars and Vans',
    description: 'A simple HTML page using Tailwind CSS built for a client.',
    image: project1,
    link: 'https://github.com/millyhx/country-cars-and-vans'
  },
  {
    title: 'Geolocation Metadata Extractor',
    description: 'A tool to extract geolocation metadata from a file.',
    image: project2,
    link: 'https://github.com/millyhx/Geolocation-Metadata-Extractor'
  },
  {
    title: 'A language tool (Prototype)',
    description: 'An idea for a language tool, with useful insights whilst travelling.',
    image: project3,
    link: 'https://github.com/millyhx/lingua'
  }
]

</script>

<template>
  <div class="min-h-screen font-sans">

    <!-- Hero -->
    <section class="px-8 py-8 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="font-bungee text-4xl font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
         Melisa Ozyurt
         </h1>
        <h2 class="text-4xl font-bold mb-4">Web Developer</h2>
        <p class="opacity-80"> Front-end enthusiast, creative problem solver, and advocate for women in STEM. </p>
        <div class="flex items-center gap-4 py-3">
          <!-- GitHub -->
          <a
            href="https://github.com/yourname"
            target="_blank"
            aria-label="GitHub"
            class="p-2 rounded-lg text-pink-500 transition transform hover:scale-110 hover:shadow-lg"
          >
            <Github class="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            aria-label="LinkedIn"
            class="p-2 rounded-lg text-pink-500 transition transform hover:scale-110 hover:shadow-lg"
          >
            <Linkedin class="w-5 h-5" />
          </a>

      </div>
      </div>
      
      <div class="flex justify-center">
          <img src="./assets/img/profile.png">
      </div>
    </section>

    <!-- Projects -->
    <section class="bg-[#483D8B] px-8 py-8">
      <h3 class="font-bungee text-3xl font-bold mb-8">Projects</h3>

      <div class="grid md:grid-cols-3 gap-6">
        <a
          v-for="project in projects"
          :key="project.title"
          :href="project.link"
          target="_blank"
          class="group rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800
                hover:scale-105 transition duration-300"
        >
          <!-- Image -->
          <div class="h-48 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <!-- Content -->
          <div class="p-6">
            <h4 class="font-semibold mb-2">{{ project.title }}</h4>
            <p class="text-sm opacity-70">
              {{ project.description }}
            </p>

            <span class="inline-block mt-4 text-accent group-hover:underline">
              View on GitHub →
            </span>
          </div>
        </a>
      </div>
    </section>

    <!-- About -->
    <section class="px-8 py-12 bg-neutral-100 dark:bg-neutral-800">
      <h3 class="font-bungee text-3xl font-bold mb-4">About Me</h3>
      <p class="max-w-3xl opacity-80">
        Experiened in both front and back end development, I’ve been building my experiences as a software engineer, with a focus on front-end development. I thrive on creative projects and love turning designs into interactive, user-friendly applications. 
        Outside of coding, I’m a strong advocate for women in STEM and believe in making technology accessible for everyone.
      </p>
    </section>

    <!-- Footer -->
    <footer class="px-8 py-12 text-center opacity-60">
      © 2026 · Melisa Ozyurt
    </footer>
  </div>
</template>