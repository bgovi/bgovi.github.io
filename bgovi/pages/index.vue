<template>
    

<div>
  <!-- Navigation bar -->
  <NavBar />
  <HeroBody />
  <About /> 
  <Travels />
  <Projects />
  <Skills />
  <Articles />
  <FooterBar />
</div>

</template>

<script>
import NavBar      from '~/components/portfolio/Navigation.vue'
import Travels     from '~/components/portfolio/Travels.vue'
import HeroBody    from '~/components/portfolio/HeroBody.vue'
import Projects    from '~/components/portfolio/Projects.vue'
import About       from '~/components/portfolio/About.vue'
import Skills      from '~/components/portfolio/Skills.vue'
import MathSkills  from '~/components/portfolio/MathSkills.vue'
import FooterBar   from '~/components/portfolio/FooterBar.vue'
import Articles    from '~/components/portfolio/Articles.vue'

export default {
    components: {
        NavBar, HeroBody, About,Travels , Projects, 
        Skills, MathSkills, Articles, FooterBar, 
    }
}

</script>