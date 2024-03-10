// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import { Loader } from "@googlemaps/js-api-loader";
// const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")
import '../stylesheets/custom.scss';
const {MAP_API_key} = require('../constant/index');
let map;
const center = { lat: 41.90476224706472, lng: 12.49822074385094 };
const myLatlng = { lat: -25.363, lng: 131.044 };
const zoom = 14;
const url = "https://maps.googleapis.com/maps/api/staticmap";
// @ts-ignore google.maps.plugins
const loader = new Loader({
  apiKey: MAP_API_key,
  version: "weekly",
});

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("wrapper");

//   wrapper.style.backgroundImage = `url(${url}?center=${center.lat},${center.lng}&zoom=${zoom}&scale=2&size=${wrapper.clientWidth}x${wrapper.clientHeight}&key=${MAP_API_key})`;
    loader.load().then(() => {
        initMap();

    });
//   wrapper.addEventListener("click", () => {
//     wrapper.remove();
//     loader.load().then(() => {
//       map = new google.maps.Map(document.getElementById("map"), {
//         center,
//         zoom,
//       });
//     });
//   });
});

async function initMap() {

    

    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const myLatlng = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: myLatlng,
      mapId: "DEMO_MAP_ID",
    });
    const marker = new google.maps.marker.AdvancedMarkerElement({
      position: myLatlng,
      map,
      title: "Click to zoom",
    });

    const card = document.createElement("div");

  card.innerHTML = "<div class='cardTitile'>Title</div><div card='body'>Card body</div>";
  card.classList.add("custom-card");
  
  
    map.addListener("center_changed", () => {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
      window.setTimeout(() => {
        map.panTo(marker.position);
      }, 3000);
    });
    marker.addListener("click", () => {
    //   map.setZoom(8);
    //   map.setCenter(marker.position);
    map.controls[google.maps.ControlPosition.CENTER].push(card);
    });
  }
  
 