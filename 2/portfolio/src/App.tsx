import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ExperienceSection } from './components/ExperienceSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'

export default function App() {
  return (
    <div className="dark min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}