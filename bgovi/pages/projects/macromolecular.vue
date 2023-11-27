<template>
<div>

<section class="section" id="about">
<!-- Title -->
    <div class="container">

    </div>

</section>

<h1> Protein structure images  </h1>


<p>
Goal and Approach:

Steps:
    1.) Dynamic assembly of equation parameters based on avaialbe information. A series of equations are predetermined
        based on feature analysis. The linear combination of terms are determined from identified similarities in the Protein database.

    2.) Initial Image randomly generation based on sequence prompt
            The less sequence information available the further the guess is from the correct solution.
    3.) Starting from the initial images random distorations are added to the image. The image improvement are guided by
        an equation. After so many iterations the process is stopped and the current image is saved.
    4.) Step 2 and 3 are repeated several thousand times.
    5.) The best answer is determined by which image minimizes the equation. 
    6.) Local features of the highest rank image nearest neighbors are integrated into the model by superimposing 
        based on consensus image features and averaging together.


<h1> Pipeline overview  image</h1>



<h1> Discuss image overview</h1>



1 and 2.) Initial Image Generation and Energy Scores
    The Protein Data Bank and Limited Protein Folds
    Identifying Similarities amongst Proteins Sequences
    Structure Alignment and Structure Similarity Scores

        superposition
        mapping features

Energy Scores
    Sequence Alignment
    Image Superposition and Profile determination
    Physical Restraints
    Information Correlation

3.) Monte Carlo Simulations: Random Pertubation of image

4. and 5.) Decoy Recognition

Predicted Structures: Description of meaning.

Genomics Level Scaling: (Predicting Interaction Networks)
    Network Image

    Spring

    Quick Refinement

Publications and Articles



</div>
</template>

<script>

export default {

    data () {
        return {
            energy_score: [{
                'image': "", 'desc': ""
            }],
            publications: [
                "",
            ]
        }
    }

}

</script>
