<template>
      <!-- About -->
  <section class="section" id="about">
    <!-- Title -->
      <div class="container">
        <div class="columns">
            <div class="column is-one-fifth">
                <h3 class="title is-2">Travels</h3>
            </div>
            <div class="column is-four-fifths">
                <div id="map-wrap" style="height: 500px"
                >
                <client-only>
                <l-map :zoom=13 :center="[55.9464418,8.1277591]">
                    <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                    <l-marker :lat-lng="[55.9464418,8.1277591]"></l-marker>
                </l-map>
                </client-only>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
// import L from "leaflet";

export default {
  data() {
    return {
      map: null,
      locations: [
        { name: 'City 1', lat: 51.5074, lng: -0.1278 },
        { name: 'City 2', lat: 40.7128, lng: -74.0060 },
        // Add more locations here
      ],
    };
  } //,
//   created() {
//     // Check if this code is running on the client-side
//     this.map = L.map("map").setView([0, 0], 2);

//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       maxZoom: 19,
//     }).addTo(this.map);

//     this.locations.forEach((location) => {
//       L.marker([location.lat, location.lng])
//         .addTo(this.map)
//         .bindPopup(location.name);
//     });

//     this.isClient = process.client;
//   },

//   mounted() {
//     this.map = L.map("map").setView([0, 0], 2);

//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       maxZoom: 19,
//     }).addTo(this.map);

//     this.locations.forEach((location) => {
//       L.marker([location.lat, location.lng])
//         .addTo(this.map)
//         .bindPopup(location.name);
//     });
//   },
};
</script>

<style scoped>
#map {
  height: 400px;
  width: 100%;
  position: relative; /* Relative position to allow z-index to work */
  z-index: 999; /* Lower z-index to keep it below the navbar */


}
</style>