<template>
      <!-- Project -->
  <section class="section" id="project">
    <!-- Title -->
      <div class="container">
        <div class="columns">
            <div class="column is-one-fifth">
                <h3 class="title is-2">Projects</h3>
            </div>
            <div class="column is-four-fifths">
                <div v-for="(project, index) in projects" :key="index">
                    <article class="message is-dark">
                    <div class="message-header">
                        <p>{{project.title}}</p>
                    </div>
                    <div class="message-body">
                        {{project.description}}
                    </div>
                    </article>
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
            projects: [
                {'title': 'TACOS', 'description': "sup" },
                {'title': 'SPRING', 'description':  "sup" },
                {'title': 'MDM', 'description': "sup" },
                {'title': 'VuConn', 'description':  "sup" }
            ]
        }
    }
}

</script>
