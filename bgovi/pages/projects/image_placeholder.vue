<template>
<div>




<div class='column is-one-quarter'>
  <div class='card equal-height'>
    <div class="card-image has-text-centered">
        <figure class="image is-64x64 is-inline-block">
              <img src="https://bulma.io/images/placeholders/256x256.png">
        </figure>
    </div>
    <div class='card-content'>
      <!-- other content here -->
    </div>
  </div>
</div>












<section class="section">
  <div class="container has-text-centered">
    <div>
          <div style ="width: 500px;" class="is-centered">

            <figure class="image is-square is-centered">
              <img src="https://bulma.io/images/placeholders/256x256.png">
            </figure>
          </div>
    </div>

  </div>
</section>






<section class="section">
  <div class="container has-text-centered">
    <div>
    <div style="max-width: 500px">

          <figure class="image is-square">
            <img src="https://bulma.io/images/placeholders/256x256.png">
          </figure>
        </div>
    </div>
  </div>
</section>




<!-- doesnt work at all -->
<div class = "container">
  <div class="level">
    <div style="max-width: 200px" class="level-item has-text-centered">
      <figure class="image is-square">
        <img src="https://bulma.io/images/placeholders/256x256.png">
      </figure>
    </div>
  </div>
</div>
  

<!-- centered, resizes and can set width approx. But I dont want it to resize until there is no white space on either side -->
<div class="columns is-desktop">
  <div class="column is-half is-offset-one-quarter">
      <div class="image is-1x1">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="Mobile Image">
      </div>    
  </div>
</div>

<!-- not centered and leaves white padding -->
<section class="section">
  <div class="container has-text-centered">
    <figure class="image max-width-image is-centered">
      <img src="https://bulma.io/images/placeholders/256x256.png" alt="Your Image">
    </figure>
  </div>
</section>


</div>

</template>

<style scoped>
.custom_img {
  width: 100%;
  height: auto;
  max-width: 50px;

}

.max-width-image {
  max-width: 800px; /* Set your desired max-width value */
  height: auto;
}

.vertical-align-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Optional: Set a height to center vertically within the viewport */
}

.content {
  text-align: center; /* Optional: Center text within the content */
}

</style>