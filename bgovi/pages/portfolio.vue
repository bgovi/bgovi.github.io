<template>
    

<div>
  <!-- Navigation bar -->
  <NavBar />
  <HeroBody />
  <About />
  <Projects />
  <Skills />
  <MathSkills />
  <!-- <Travel /> -->

  <FooterBar />
  <!-- <footer class="footer">
    <div class="section-heading">
      <p>
        <strong>Bulma Personal Template</strong> by <a href="https://mubaidr.js.org">Muhammad Ubaid Raza</a>. The
        source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
      </p>
    </div>
  </footer> -->
</div>

</template>

<script>
import NavBar      from '~/components/portfolio/Navigation.vue'
import HeroBody    from '~/components/portfolio/HeroBody.vue'
import Projects    from '~/components/portfolio/Projects.vue'
import About       from '~/components/portfolio/About.vue'
import Skills      from '~/components/portfolio/Skills.vue'
import MathSkills  from '~/components/portfolio/MathSkills.vue'
import Travel      from '~/components/portfolio/Travel.vue'
import FooterBar   from '~/components/portfolio/FooterBar.vue'

export default {
    components: {
        NavBar, HeroBody, About, Projects, 
        Skills, MathSkills, Travel, FooterBar
    }

}

</script>
