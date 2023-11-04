<template>
<!-- Skills -->
<section class="section" id="skills">
<!-- Title -->
<div class="container">
<div class="columns">
    <div class="column is-one-fifth">
        <h3 class="title is-2">Skills</h3>
    </div>
    <div class="column is-two-fifths">
        <div v-for="(skill, index) in skills_1" :key="index">
            <h4 class ="title is-4" > {{ skill.category}} </h4>
            <span class="tag is-primary is-medium" v-for="(typex, tx_index) in skill.types" :key="tx_index" > {{typex}} </span>
        </div>
    </div>
    <div class="column is-two-fifths">
        <div v-for="(skill, index) in skills_2" :key="index">
            <h4 class ="title is-4" > {{ skill.category}} </h4>
            <span class="tag is-primary is-medium" v-for="(typex, tx_index) in skill.types" :key="tx_index" > {{typex}} </span>
        </div>
    </div>
</div>
</div>
</section>
</template>

<script>


export default {
    data() {
        return {
            skills: [
                {'category': 'Data Science/ML/AI', 'types': ['Python', 'scikitlearn', 'Pytorch', 'Keras', 'opencv', 'fortran', 'c', 'R' ] },
                {'category': 'Databases', 'types':  ['Postgresql', 'TSQL', 'SQLITE', 'Redis', 'Neo4j'] },
                {'category': 'Analytics', 'types':  ['Tableau', 'Plotly', 'PowerBI'] },
                {'category': 'Orchestration, Automation, & ETL/ELT', 'types': ['crontab', 'airflow', 'windows task', 'selenium' ,'dbt', 
                               'SSIS', 'airbyte', 'docker compose'] },
                {'category': 'Big Data', 'types':   ['Citus', 'Snowflake', 'Pyspark'] },                
                {'category': 'Front End', 'types':  ['Vuejs', 'Nuxtjs', 'Bulma', 'Vuetify', 'Javascript', 'CSS', 'SASS/SCSS'] },
                {'category': 'Deployment', 'types': ['Docker', 'Git', 'pip', 'npm', 'Azure', 'Linode', 'DockerHub'] },
                {'category': 'Middleware', 'types': ['NodeJS', 'Express', 'Nginx', 'API', 'JSON','HTTP Headers', 'YAML', 'XML', 'Postgrest', 'FastAPI', 'HTTP Cookies'] },
                {'category': 'Testing',  'types':   ['Jest', 'CI\\CD', 'unittest'] },
                {'category': 'Administration & Security', 'types':  ['Postgres', 'Linux/Ubuntu', 'OpenSSL', 'OAuth', 'jwt', 'firewall', 'secrets'] },
                {'category': 'Office and Presentation', 'types':  ['Word', 'Illustrator', 'PowerAutomate', 'Latex', 'PowerPoint'] },
                {'category': 'Business and Soft Skills', 'types':  ['Budgeting', 'Mentoring', 'Adivising', 'Project Management'] }
            ]
        }
    },
    computed: {
        skills_1() {
            return this.skills.slice(0,6)
        },
        skills_2() {
            return this.skills.slice(6,12)
        }
    }

}
</script>
