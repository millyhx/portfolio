<template>
  <div class="bg-white text-gray-800 scroll-smooth">
    
    <!-- NAVBAR -->
    <header class="fixed top-0 w-full bg-white shadow-sm z-50">
      <div class="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 class="text-xl font-bold tracking-tight">
          mdozyurt@outlook.com
        </h1>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" class="hover:text-blue-500 transition">About</a>
          <a href="#skills" class="hover:text-blue-500 transition">Skills</a>
          <a href="#experience" class="hover:text-blue-500 transition">Experience</a>
          <a href="#projects" class="hover:text-blue-500 transition">Projects</a>
        </nav>

        <!-- Burger Menu -->
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="fade">
        <div
          v-if="menuOpen"
          class="md:hidden bg-white border-t px-4 py-4 flex flex-col space-y-4"
        >
          <a href="#about" @click="closeMenu">About</a>
          <a href="#skills" @click="closeMenu">Skills</a>
          <a href="#experience" @click="closeMenu">Experience</a>
          <a href="#projects" @click="closeMenu">Projects</a>
        </div>
      </transition>
    </header>

    <!-- HERO -->
    <section class="pt-32 pb-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6">

        <div class="grid md:grid-cols-2 gap-12 items-center">

          <!-- Left Content -->
          <div>
            <p class="uppercase tracking-widest text-sm text-purple-500 mb-4">
              Welcome to my portfolio
            </p>

            <h2 class="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hi, I'm
              <span class="text-purple-500">Melisa Ozyurt</span>
            </h2>

            <p class="text-gray-600 text-lg leading-relaxed mb-8">
              Web Developer and UI/UX Designer focused on creating aesthetic solutions. Also a big interest in Digital Forensics and Cyber Security.
            </p>

            <div class="flex flex-wrap gap-4">
              <a
                href="#projects"
                class="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
              >
                View Projects
              </a>

            <a
              :href="cvFile"
              download
              class="border border-purple-500 text-purple-500 px-6 py-3 rounded-full hover:bg-purple-50 transition"
            >
              Download CV
            </a>
            </div>
          </div>

          <!-- Right Image -->
          <div class="flex justify-center md:justify-end">
            <div class="relative">
              <div
                class="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50"
              ></div>

              <img
                src="./assets/img/profile.jpg"
                alt="Profile"
                class="relative w-72 h-72 object-cover rounded-full shadow-xl border-8 border-white"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section
      id="about"
      class="py-24 max-w-6xl mx-auto px-6"
    >
      <div class="grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h3 class="text-3xl font-bold mb-6">
            About Me
          </h3>

          <p class="text-gray-600 leading-relaxed mb-4">
            I enjoy creating beautiful websites that are accessible to everyone. I am a Software Engineer with a First-Class degree and around four years of experience across software development, testing, and Agile teams.
          </p>

          <p class="text-gray-600 leading-relaxed">
            I’ve worked closely with teams and stakeholders in fast-paced environments where attention to detail really matters.
            I’m also an advocate for Women in STEM and passionate about supporting more inclusive and diverse spaces in tech.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div class="p-6 bg-gray-50 rounded-2xl shadow-sm">
            <h4 class="text-4xl font-bold text-purple-500">4+</h4>
            <p class="text-gray-600 mt-2">Years Experience</p>
          </div>

          <div class="p-6 bg-gray-50 rounded-2xl shadow-sm">
            <h4 class="text-4xl font-bold text-purple-500">10+</h4>
            <p class="text-gray-600 mt-2">Projects Completed</p>
          </div>

          <div class="p-6 bg-gray-50 rounded-2xl shadow-sm">
            <h4 class="text-4xl font-bold text-purple-500">15+</h4>
            <p class="text-gray-600 mt-2">Technologies Learned</p>
          </div>

          <div class="p-6 bg-gray-50 rounded-2xl shadow-sm">
            <h4 class="text-4xl font-bold text-purple-500">100%</h4>
            <p class="text-gray-600 mt-2">Responsive Design</p>
          </div>
        </div>

      </div>
    </section>

    <!-- SKILLS -->
    <section
      id="skills"
      class="py-24 bg-gray-50"
    >
      <div class="max-w-6xl mx-auto px-6">

        <div class="text-center mb-16">
          <h3 class="text-3xl font-bold mb-4">
            Skills & Expertise
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto bg-green-500 text-white px-4 py-2 inline-block">
            What can I do?
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">

          <div
            v-for="skill in skills"
            :key="skill.title"
            class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <h4 class="text-xl font-semibold mb-3">
              {{ skill.title }}
            </h4>

            <p class="text-gray-600 leading-relaxed">
              {{ skill.description }}
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section
      id="experience"
      class="py-24 max-w-5xl mx-auto px-6"
    >
      <h3 class="text-3xl font-bold mb-14 text-center">
        Experience & Education
      </h3>

      <div class="relative border-l-2 border-green-200 ml-4">

        <div
          v-for="item in experience"
          :key="item.title"
          class="mb-12 ml-8 relative"
        >
          <div
            class="absolute -left-[42px] top-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white"
          ></div>

          <h4 class="text-xl font-semibold">
            {{ item.title }}
          </h4>

          <p class="text-sm text-gray-500 mb-2">
            {{ item.date }}
          </p>

          <p class="text-gray-600">
            {{ item.description }}
          </p>
        </div>

      </div>
    </section>

    <!-- PROJECTS -->
    <section
      id="projects"
      class="py-24 bg-gray-50"
    >
      <div class="max-w-6xl mx-auto px-6">

        <div class="text-center mb-16">
          <h3 class="text-3xl font-bold mb-4">
            Featured Projects
          </h3>

          <p class="text-gray-600">
            Some of my recent work and creative projects.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">

          <div
            v-for="project in projects"
            :key="project.title"
            class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
          >
            <div class="overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div class="p-6">
              <h4 class="text-xl font-semibold mb-2">
                {{ project.title }}
              </h4>

              <p class="text-gray-600 mb-4">
                {{ project.description }}
              </p>

              <a
                :href= project.location
                target="_blank"
                rel="noopener noreferrer"
                class="text-green-500 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="py-10 text-center text-gray-500 text-sm">
      © 2026 Created by Me.
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import project1 from './assets/img/project-1.png'
import project2 from './assets/img/project-2.png'
import project3 from './assets/img/project-3.png'
import project4 from './assets/img/project-4.png'
import project5 from './assets/img/project-5.png'

import cvFile from './assets/pdf/CV.pdf'

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}

const skills = [
  {
    title: 'Web Development',
    description:
      'Building responsive applications using frontend technologies including Vue.js, React and Laravel. Experienced with HTML and CSS/ Tailwind. ',
  },
  {
    title: 'Back-End Development',
    description:
      'Experienced with Java, Python, JavaScript/TypeScript, Visual Basic.NET and PHP. ',
  },
  {
    title: 'UI/UX Design',
    description:
      'Enjoy creating clean and friendly designs using Canva and Figma, whilst considering WCAG (Web Content Accessability Guidelines) and Nielsens usability heuristics.',
  },
  {
    title: 'Testing',
    description:
      'Experienced with Test-Driven Development, Unit testing and using tools such as JUnit, PyTest, Cypress and Selenium.',
  },
  {
    title: 'Digital Forensics',
    description:
      'I have a great interest in Digital Forensics, having completed the C5W-100 Introduction into Digital Forensics Course. I have self-taught myself to use imaging tools such as FTK and investigative tools such as EnCase and Autopsy.',
  },
   {
    title: 'Other Skills',
    description:
      'I am experienced working with Linux, IBM DOORS, Jira, Git, Cyber security fundamentals, and working in an Agile team.',
  },
  
]

const experience = [
  {
    title: 'Bachelor of Science, Computer Software Engineer - First Class Honours',
    date: 'October 2020 - November 2024',
    description:
      'University of Central Lancashire',
  },
  {
    title: 'BAE - Software Engineering Degree Apprentice',
    date: 'October 2020 - November 2024',
    description:
      'Four year degree apprenticeship working with Official data in line with UK security standards. Maintained and managed software requirements, enhanced web applications and wrote clean code.',
  },
  {
    title: 'BT - Software Engineer',
    date: 'February 2019 - October 2020',
    description:
      'Created impact assessments, prepared and delivered presentation to stakeholders.',
  },
  {
    title: 'BT FurtHER Digital Intensive Program',
    date: 'November 2018 - February 2019',
    description:
      'A four month Computer Software Engineering course ran by Code First Girls in London.',
  },
]

const projects = [
  {
    title: 'Country Cars and Vans',
    description:
      'A complete re-design for a car garage who requested a simple and clean single page website.',
    image: project1,
    location: 'http://www.countrycarsandvansltd.co.uk/',
  },
  {
    title: 'Geolocation Metadata Extractor',
    description:
      'A tool to extract geolocation metadata from a file.',
    image: project2,
    location: 'https://github.com/millyhx/Geolocation-Metadata-Extractor',
  },
  {
    title: 'Language Tool',
    description:
      'A working prototype of a language tool that can be used whilst travelling.',
    image: project3,
    location: 'https://github.com/millyhx/lingua',
  },
  {
    title: 'Music App (Moonwave)',
    description:
      'A music app used for background music whilst reading. Features a vinyl player with Jazz music and rain feature.',
    image: project4,
    location: 'https://millyhx.github.io/musicapp/',
  },
  {
    title: 'Cloud Post',
    description:
      'A simple web app, where users can write something and let it go in the clouds. Along the lines of get something off your chest...',
    image: project5,
    location: 'https://millyhx.github.io/cloudpost/',
  },
]

</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>