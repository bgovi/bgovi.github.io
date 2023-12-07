<template>
<div>

<!-- Title and Overview -->
<section class="section" style="padding-bottom: 24px">
    <div class="container">
    <h1 class="title">Virtual Database Connections (VuConn): In Development</h1>

    </div>
</section>

<section class="section" style="padding-top: 0px">
    <div class="container">

    <p class="subtitle"><strong>Objective Statement:</strong> VuConn helps analysts, customers, dbas, security and engineering teams implement data security 
    controls, user permissions, user access, and databases objects at scale. The virtualization layer provides extended functionality not generally available
    to data servers. Implementing VuConn is simple, as it sits in between requests and the 
    databases connection, the platform doesn’t require any changes to your data, schema or how your users or applications interact with data.
    </p>

    <p class="subtitle"><strong>Overview:</strong> At the heart of every internet based application is a database backend.
    Direct connections allow developers full logical control of how data is interacted with; 
    the connection enforces a series of permissions, however it is still a shared environment that requires developers to have a level of trust amongst
    each other. For data that requires to be shared amongst not trusted users, APIs and GraphQL are standard options. 
    <br>
    <br>
    APIs allow controlled access to data, enabling organizations to share information securely with external entities 
    while maintaining control over who can access what. This is essential for collaborations and partnerships. However, this precision removes
    all flexibilty from then end user. APIs requires each new use case to be communicated to a developer inorder to implement a new API endpoint.
    The middle man approach for APIs does not scale well especially as developers can be overburdened with one off requests.
    GraphQL, developed by Facebook, introduced a query language for APIs that allows clients to request only the data they need. 
    It offers a more flexible alternative to traditional REST APIs for certain use cases, but its flexibility is still limited.
    VuConn provides the full flexibility of SQL with the security restraints of REST APIs and GraphQL.
    </p>


    <div class="content">
            <div class="has-text-centered">
            <figure class="is-inline-block" style="max-width: 1000px">
                <img src="/img/projects/vuconn/vuconnOverview.svg" alt="Centered image">
            </figure>
            </div>

    <!-- pipeline steps -->
        <p class="subtitle"><strong>Pipeline Steps:</strong></p>
        <ol>
            <li class="has-text-justified is-size-5" v-for="(step,index) in pipeline_steps" :key="index">
                {{step}}
            </li>
        </ol>
    </div>
    </div>
</section>


<section class="section" style="padding-top: 0px;">
    <div class="container">


    <p class="subtitle"><strong>Use Cases:</strong></p>
    <div class="content">
        <ul>
            <li class="has-text-justified is-size-5" v-for="(use_case,index) in use_cases" :key="index">
                {{use_case.name}}: {{use_case.desc}}
            </li>
        </ul>
    </div>



    </div>
</section>



</div>
</template>

<script>


export default {
    data() {
        return {
            use_cases: [
                {'name': "Zero Trust", "desc": zero_trust},
                {'name': "Self Service", "desc": self_service},
                {'name': "JIT Permissions", "desc": jit_access},
                {'name': "Virtual Objects", "desc": virtual_objects},
                {'name': "Sql Injection Prevention", "desc": no_sql_injection},
                {'name': "Data Control and Security", "desc": data_control},
                {'name': "Resource Optimizations", "desc": optimization_discovery}

            ],
            pipeline_steps: [
                "Each user has a virtual user connection that allows individual and group permissions to be handled through the http or tcp connection protocols.",
                "When a query is sent through VuConn, the request is evaulated for the necessary permissions. If valid, modificaitons to the request are made to enforce rules.",
                "The rewritten query is evaluated for any temporary credentials that should be considered.",
                "The final request is then forwarded to the target server."
            ]
        }
    }
}

const zero_trust = `
Each user, request or end point has explicit rules enforced by VuConn. This allows full freedom of expression within an enforced ruleset.
The vitrual nature of the system allows for an unlimitted set of permissions and roles to be easily created, managed and enforced.
`

const self_service = `VuConn allows any user regardless of coding knowledge to properly access their data. Those with developer skills sets
have access to standards programming languages that allows proper customization for each use case.
`

const jit_access = `
Real time authorization system provides first class security protocols. Altered permissions are enforced at time of change. 
`

const virtual_objects = `
Virtual objects allows simple abstraction of coding and database objects amongst users. Views, schemas and functions can be stored within the
virtual environment allowing for a clean and sparse server environment for company DBAs to maintains.
`

const no_sql_injection = `The JIT compiler and validator is designed to prevent all SQL Injection attacks`

const data_control = `
Seamless create and enforce fine-grained access control, dynamic data masking, data auditing and monitoring,
    and differential privacy
`

const optimization_discovery = `
Scale low code and custom code apps. AI enabled discovery of order of operations for large scale integrated analytics.
`

</script>
