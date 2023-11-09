<template>
      <!-- About -->
  <section class="section" id="about">
    <!-- Title -->
      <div class="container">
        <div class="columns">
            <div class="column is-one-fifth">
                <h3 class="title is-2">About</h3>
            </div>
            <div class="column is-four-fifths">
<p class="has-text-justified">
<strong>Overview: </strong>
My general interests is around converting mathematics and knowledge into something tangible. 

I am often the only developer or on a very small mobile team. As such, I generally need to know many things and where many hats.
I have had multiple roles including full stack engineer, data engineer, analytical engineer, and data scientist. 
I have often worked in health care related roles where data and network security are paramont which requires familiarization with
penetration and web related security operations (network, web, application and database).

For fun, you can often find me on the mat. Since my early teens I have been actively involved in wrestling, judo and jujitsu. I spend a lot of time
doing calistenics, hiking, and biking. More leisure activities include: travel, food, curtural events, museums, modern history, 
national parks and unesco sites.

I also really like teaching, mentoring and advising. I like helping people figure out how to break down 
complex problems into simpler, more doable things. 

Also, math is hard and I'm constantly trying to get better at it and incorporate it into my work.
</p>
<br>
<p class="has-text-justified">
<strong>Fun: </strong>
You can often find me on the mat. Since my early teens I have been actively involved in wrestling, judo and jujitsu. I spend a lot of time
doing calistenics, hiking, and biking. More leisure activities include: travel, food, curtural events, museums, modern history, 
national parks and unesco sites.

I also really like teaching, mentoring and advising. I like helping people figure out how to break down 
complex problems into simpler, more doable things. 

Also, math is hard and I'm constantly trying to get better at it and incorporate it into my work.
</p>



<br>
<p class="has-text-justified"> 
<strong> Short Bio: </strong> My professional and academic interest began junior year at Indiana University Bloomington when I took biochemistry.
Biochemistry provided me a conceptual understanding of biology using organic chemistry and thermodynamics.
After completing the biochemistry course, I joined a laboratory as a research assistant.
I was pleased with the work I was doing but did not have the level of enthusiasm needed for a lifelong commitment, 
so I began to branch out into other fields, particularly biophysics.
I stayed a fifth year and crammed through mathematics and physics while going to presentations and 
browsing websites searching for research areas that interested me.

What led me into math and physics was the fact that in biochemistry we talked a lot about experimentally-observed protein 
functions and pathways but very little about how and why these macromolecules develop and perform these various functions – that’s 
more of a physics kind of question. I decided I wanted to study how these proteins develop structure and function.
 
So I searched for different programs that would allow me to develop the needed technical skills. I discovered the Bioinformatics Ph.D. 
program at the University of Michigan. Besides my general interests in proteins, I wanted a career path that touched as many 
computational areas as possible. The lab I joined utilized images, statistics, sequence analysis, text, profiles, physics and 
domain knowledge to understand protein structure, function and dynamics.
</p>

<br>
<p class="has-text-justified">
<strong> Alpha Fold and Career Change: </strong>
AI impact and costs


Clinicial Infomatics;
Created machine learning algorithms that monitor and assess patient health based on health records,
wearable sensors, and other biological data. Developed and tested patient facing mobile app.

General Engineering:
Function as Full Stack Developer, Data Scientist and Database Administrator. Maintain and created
custom workflows and web apps for the system. Built and maintained Master Data Management System
for physician practice. Build and review ML solutions. Created custom built ETL framework

Return To Data:
Currently, doing xyz looking forward to the next set of challenging problems to solve.
</p>

<!-- <strong> Long Term Interests: </strong> Relationships, Graphs, Networks and Other Connected Structures:  -->

<!-- 3 bullet points per row -->
    <!-- <strong> Career Objectives: </strong> -->
<br>
<p>
<strong> Career Interets: </strong>


</p>


<div>

    <h1 class="title has-text-centered">Technical/Specialized Interests</h1>

<div class="columns" v-for="i in range(0, 12, 3)" :key="i">
                <div class="column is-one-third content is-normal" style="margin: 0px; padding: 0px;">
                    <ul> <li>{{fields[i]}}</li> </ul>
                </div>
                <div class="column is-one-third content is-normal" style="margin: 0px; padding: 0px;">
                   <ul> <li>{{fields[i+1]}}</li> </ul>
                </div>
                <div class="column is-one-third content is-normal" style="margin: 0px; padding: 0px;">
                   <ul> <li>{{fields[i+2]}}</li> </ul>
                </div>
      </div>
</div>





            </div>
        </div>
        <Divider />
    </div>
  </section>
</template>

<script>
import Divider      from '~/components/portfolio/Divider.vue'
export default { 
  components: { Divider },
  data() {
    return {
      career: [
        'Learn new things', 'Work on interesting problems', 'Enjoy the company of team members', 'Being able to pay my mortgage'
      ],

      fields: [
          'General Data Science and Data Engineering',
          'Matrix and Tensor Algebra',
          'Network Topology and Analysis',
          'Optimization Under Constraints',
          'Graphy Theory and Quiver Mathematics',
          'General ML/AI and Algorithms',
          'Probability, Risk Analysis, and Combinatorics',
          'Transfer Learning',
          'Macromolecular Structure', 'Metabolomics', 'Signal Transduction and Regulation',
          'Image Processing', 'Natural Language Processing', 'Hybrid Cloud', 
          'Novel Projects',
          'Financial/Investment Mathematics' 
      ]
    }
  },
    methods: {
        range(start, end, step) {
            step = step || 1;
            const result = [];
            for (let i = start; i <= end; i += step) {
            result.push(i);
            }
            return result;
        }
    }

}




</script>