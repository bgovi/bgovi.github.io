<template>
<div>

<!-- Title and Overview -->
<section class="section">
    <div class="container">
    <h1 class="title">Predicting Protein Structure and Interactions</h1>
    <p class="subtitle"><strong>Prediction Pipeline</strong></p>

    <div class="content">
            <div class="has-text-centered">
            <figure class="image is-16x9 is-inline-block" style="max-width: 800px">
                <img src="/img/projects/macromolecular/TacosOverview.png" alt="Centered image">
            </figure>
            </div>

    </div>
    </div>
</section>


<!-- Pipeline Steps -->
<section class="section">
    <div class="container">
    <p class="subtitle"><strong>Pipeline Steps</strong></p>
    <div class="content">
        <ol>
            <li class="has-text-justified" v-for="(step,index) in steps" :key="index">{{step}}</li>
        </ol>
    </div>
    </div>
</section>

<!-- Image Similarity and Superimposition -->


<!-- Equations -->
<section class="section">
    <div class="container">
    <p class="subtitle"><strong>Potential Score</strong></p>
    <!-- <div class="content">
        <ol>
            <li class="has-text-justified" v-for="(step,index) in steps" :key="index">{{step}}</li>
        </ol>
    </div> -->
    </div>
</section>

<!-- Predicted Models -->
<section class="section">
    <div class="container">
    <p class="subtitle"><strong>Correlation to Ground Truth</strong></p>

    <div class="content">
            <div class="has-text-centered">
            <figure class="image is-16x9 is-inline-block" style="max-width: 1000px">
                <img src="/img/projects/macromolecular/InformationScore.png" alt="Centered image">
            </figure>
            </div>
    </div>
    </div>
</section>




<!-- Predicted Models -->
<section class="section">
    <div class="container">
    <p class="subtitle"><strong>Predicted Models</strong></p>

    <div class="content">
            <div class="has-text-centered">
            <figure class="image is-16x9 is-inline-block" style="max-width: 1000px">
                <img src="/img/projects/macromolecular/Generated_models.png" alt="Centered image">
            </figure>
            </div>
    </div>
    </div>
</section>


<!-- Predicted Models -->
<section class="section">
    <div class="container">
    <p class="subtitle"><strong>Predicting Interaction Networks</strong></p>

    <div class="content">
            <div class="has-text-centered">
            <figure class="image is-16x9 is-inline-block">
                <img src="/img/projects/macromolecular/InteractionNetwork.png" alt="Centered image">
            </figure>
            </div>
    </div>
    </div>
</section>


<!-- Predicted Models -->
<section class="section">
    <div class="container">
    <p class="subtitle"><strong>Interaction Network Superposition</strong></p>

    <div class="content">
            <div class="has-text-centered">
            <figure class="image is-1x1 is-inline-block" style="max-width: 400px">
                <img src="/img/projects/macromolecular/spring_overview.jpg" alt="Centered image">
            </figure>
            </div>
    </div>
    </div>
</section>




</div>
</template>

<script>

export default {

    data () {
        return {
            steps: [
                "Dynamic assembly of equation parameters based on avaialbe information. A series of equations are predetermined \
                based on feature analysis. The linear combination of terms are determined from identified similarities in the Protein database.",
                "Initial Image randomly generation based on sequence prompt. The less sequence information available the \
                further the guess is from the correct solution.",
                "Starting from the initial images random distorations are added to the image. The image improvement are guided by \
                    an equation. After so many iterations the process is stopped and the current image is saved.",
                "Step 2 and 3 are repeated several thousand times.",
                "The best answer is determined by which image minimizes the equation.",
                "Local features of the highest rank image nearest neighbors are integrated into the model by superimposing \
                based on consensus image features and averaging together."
            ],

            energy_score: [
                {
                'name': "", 'image': "", 'desc': ""
                }
            ],
            publications: [
                "",
            ]
        }
    }

}

// <h1> Discuss image overview</h1>



// 1 and 2.) Initial Image Generation and Energy Scores
//     The Protein Data Bank and Limited Protein Folds
//     Identifying Similarities amongst Proteins Sequences
//     Structure Alignment and Structure Similarity Scores

//         superposition
//         mapping features

// Energy Scores
//     Sequence Alignment
//     Image Superposition and Profile determination
//     Physical Restraints
//     Information Correlation

// 3.) Monte Carlo Simulations: Random Pertubation of image

// 4. and 5.) Decoy Recognition

// Predicted Structures: Description of meaning.

// Genomics Level Scaling: (Predicting Interaction Networks)
//     Network Image

//     Spring

//     Quick Refinement

// Publications and Articles


</script>
