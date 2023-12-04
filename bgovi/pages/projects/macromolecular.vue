<template>
<div>

<!-- Title and Overview -->
<section class="section">
    <div class="container">
    <h1 class="title">Predicting Protein Structure and Interactions</h1>
    <p class="subtitle"><strong>Prediction Pipeline:</strong> Starting from a protein sequence how to determine its structure and function?</p>

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
<section class="section">
    <div class="container">
    <p class="subtitle"><strong>Image Similarity and Superposition:</strong> </p>
        <div class="content">
                <div v-for="(ix,index2) in image_super" :key="index2">
                    <p>{{ix.desc}}</p>
                    <div class="has-text-centered">
                        <figure class="image is-16x9 is-inline-block" style="width: 300px">
                            <img :src="svg_path+ix['image']" alt="Centered image">
                        </figure>
                    </div>
                </div>

        </div>
    </div>
</section>

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


<!-- Conclusion -->
<section class="section">
    <div class="container">
    <p class="subtitle"><strong>Conclusion</strong></p>

    <div class="content">

    </div>
    </div>
</section>


<!-- Articles and Publications -->
<section class="section">
    <div class="container">
    <p class="subtitle"><strong>Articles and Publications</strong></p>

    <div class="content">

    </div>
    </div>
</section>



</div>
</template>

<script>

// const svg_path = "/img/projects/macromolecular/svg/"

export default {

    data () {
        return {
            svg_path: "/img/projects/macromolecular/svg/",
            steps: [
                "The sequence is searched through a series of protein related database to find related sequences with known properties related to structure and function.",
                "Dynamic assembly of equation parameters based on availabe information. A series of equations are predetermined \
                based on feature analysis. The linear combination of terms are determined from identified similarities in the Protein database.",
                "The initial image is randomly generation based on sequence the prompt and identified information. The less sequence information available the \
                further the guess is from the correct solution.",
                "Starting from the initial images random distorations are added to the image. The image improvement are guided by \
                    an equation. After so many iterations the process is stopped and the current image is saved.",
                "Step 2 and 3 are repeated several thousand times.",
                "The best answer is determined by which image minimizes the equation.",
                "Local features from the neighborhood of the highest rank image are integrated into the model by superimposing \
                based on consensus image features and averaging together."
            ],
            image_super: [
                {
                'name': "Root Mean Square Deviation", 'image': "rmsd.svg", 'desc': `Similar to protein sequences, protein structures need to be aligned in order to evaluate the
similarity. Given a superposition, one way is to compare structures is to calculate the root mean
squared error between a set of points.`
                },
                {'name': "Expanded RMSD", 'image': "rmsd_expanded.svg", 'desc': `
Kabsch derived the solution for finding the optimal solution of y onto x as to minimize the RMSD.
First the equation is squared and mean squared deviation is used for simplicity and the equation is
expanded.`
                },
                {'name': "Min component", 'image': "maximize.svg", 'desc': `
Notice that the first summation term is not dependent on U and can be removed from consideration.
In order to minimize the RMSD we need to maximize.
                `
                },
                {'name': "Trace", 'image': "min_trace.svg", 'desc': `
Converting the equation into vector notation leads to the equation below with the goal of
maximizing L.
                `},
                {'name': "Cyclic Property", 'image': "cyclic.svg", 'desc': `
Now using the cyclic property of the transpose the equation can be written as follows where R can
be calculated and U is unknown.                
                `},
                {'name': "SVD", 'image': "svd.svg", 'desc': `
R is the correlation matrix and using singular value decomposition it can be rewritten as R = V ∗
S ∗ W T where V and W are orthogonal matricies and S is a diagonal matrix containing the singular
values. Replacing R with the SVD and using the trace cyclic property
                `},
                {'name': "orthoganal", 'image': "maximize.svg", 'desc': `
The matrices W T ,U,V are replaced with the matrix T, which is the product of orthogonal matrices,
which leads to` },
                {'name': "identity", 'image': "identity.svg", 'desc': `

Since T is orthogonal and T ii <= 1, the trace is maximized when T equals the Identity Matrix.
The Kabsch algorithm optimal rotation matrices can either be in the right handed coordinate
system or left handed system (determinant of U equals -1). In order to convert a left handed system
to right handed the last column of U needs to be multiplied by negative one.
                `},
                {'name': "tmscore", 'image': "tmscore.svg", 'desc': `
Structural scoring systems that can properly identify global structure similarity are important.
The TMscore was designed to consider the alignment coverage and pairwise distance proximities
in order to calculate a similarity score.
                `}
            ],


            energy_score: [
                {
                'name': "Physical Potential", 'image': "", 'desc': ""
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
