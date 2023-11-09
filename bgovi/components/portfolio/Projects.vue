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
                    <article class="message is-link mb-5">
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
            projects: [
                {'title': 'TACOS: Template Based Assembly of Comples Structures', 'description': tacos_description },
                {'title': 'SPRING: Mapping Monomeric Threading to Protein−Protein Structure Prediction ', 'description':  spring_description },
                {'title': 'MDM: Full Stack Master Data Management System', 'description': mdm_description },
                {'title': 'VuConn: Virtualized User Connections (In Development)', 'description':  vuconn_description }
                //, {'title': 'Aggrid Fullstack: Framework for full stack survey and table applications', 'description':  aggrid_description }
            ]
        }
    }
}

let tacos_description = `
I developed one of the first fully automated pipelines for template based quaternary structure prediction 
starting from sequence. Two critical steps for template based modeling are identifying the correct homologous 
structures by threading which generates sequence to structure alignments and refining the initial threading template 
coordinates closer to the native conformation.


When user submits an amino acid sequence, the server first tries to retrieve template proteins of similar folds 
(or super-secondary structures) from locally installed meta-threading approach.
In the second step, the continuous fragments excised from the PDB templates are reassembled into full-length models 
by replica-exchange Monte Carlo simulations with the threading unaligned regions (mainly loops) built by ab initio modeling.

I included intramolecular domain-domain interfaces into the PDB 
library to boost template recognition of protein dimers; the merging of the two classes of interfaces improved 
recognition of heterodimers by 40% using benchmark settings. Next the template based assembly of protein complexes pipeline, 
TACOS, was created. The pipeline combines threading templates and domain knowledge from the PDB into a knowledge based energy score. 
The energy score is integrated into a Monte Carlo sampling simulation that drives the initial template closer to the native topology.
In the third step, the fragment assembly simulation is performed again starting from the SPICKER cluster centroids, 
where the spatial restrains collected from both the LOMETS templates and the PDB structures by TM-align are used to guide the simulations. 
The purpose of the second iteration is to remove the steric clash as well as to refine the global topology of the cluster centroids. 
The decoys generated in the second simulations are then clustered and the lowest energy structures are selected.
`
tacos_description = tacos_description.replace(/\n/g, ' ')


let spring_description = `
The key step of template-based protein−protein structure prediction is the
recognition of complexes from experimental structure libraries that have similar quaternary
fold. Maintaining two monomer and dimer structure libraries is however laborious, and
inappropriate library construction can degrade template recognition coverage. We propose
a novel strategy SPRING to identify complexes by mapping monomeric threading
alignments to protein−protein interactions based on the original oligomer images in the
PDB, which does not rely on library construction and increases the efficiency and quality of
complex template recognitions
`
spring_description = spring_description.replace(/\n/g, ' ')

let mdm_description = `
A full-stack framework for Master Data Management (MDM) is a comprehensive solution that streamlines and centralizes the management of critical organizational data, ensuring data accuracy, consistency, and integrity.
This framework encompasses both front-end and back-end components, offering a holistic approach to MDM.

Efficiency and Automation: Automation of data processes reduces manual errors, accelerates data processing, and improves productivity.
`
mdm_description = mdm_description.replace(/\n/g, ' ')

let vuconn_description = `
In summary, a virtual connection to a database is a critical link that enables an application to interact with a database management system. It allows the application to perform various database operations while ensuring security, reliability, and efficient resource usage.
Properly managing these connections is essential for the smooth operation of applications that rely on databases for data storage and retrieval.

It's essential to secure the virtual connection to the database to prevent unauthorized access and data breaches. This involves using secure authentication methods, encryption, and access control mechanisms

In many applications, connection pooling is used to efficiently manage virtual database connections. Connection pooling allows multiple instances of the application to share a limited number of connections, reducing the overhead of opening and closing connections repeatedly.
`
vuconn_description = vuconn_description.replace(/\n/g, ' ')

let aggrid_description = `
In summary, a virtual connection to a database is a critical link that enables an application to interact with a database management system. It allows the application to perform various database operations while ensuring security, reliability, and efficient resource usage.
Properly managing these connections is essential for the smooth operation of applications that rely on databases for data storage and retrieval.

It's essential to secure the virtual connection to the database to prevent unauthorized access and data breaches. This involves using secure authentication methods, encryption, and access control mechanisms

In many applications, connection pooling is used to efficiently manage virtual database connections. Connection pooling allows multiple instances of the application to share a limited number of connections, reducing the overhead of opening and closing connections repeatedly.
`
aggrid_description = aggrid_description.replace(/\n/g, ' ')



</script>