// The URL on your server where CesiumJS's static files are hosted.
window.CESIUM_BASE_URL = '/assets/';
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMDA5YmM2YS1mYzllLTQ4ODUtYWUwZi02NDQ1N2M1Yzk2NjIiLCJpZCI6NjUxMzAsImlhdCI6MTYyOTg4MjcwNX0.6_E10NsIFRucvLARFz1RfJUvlo3ni_sOtgJcWqCxGeI";

import * as Cesium from 'cesium';

function createViewer(container) {
  // Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
  const viewer = new Cesium.Viewer(container, {
    terrainProvider: new Cesium.EllipsoidTerrainProvider({}), //Cesium.createWorldTerrain()
    baseLayerPicker: false,
    homeButton: false,
    infoBox:false,
    scene3DOnly: true,
    sceneModePicker: false,
    animation: false,
    timeline: false,
    creditContainer: 'credits',
    navigationHelpButton: false,
    navigationInstructionsInitiallyVisible: false,
    skyAtmosphere: false,
    imageryProvider:false,
    globe: false,
    skyBox: false
  });    
  // Add Cesium OSM Buildings, a global 3D buildings layer.
  // const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());   
  // viewer.scene.primitives.add(new Cesium.Cesium3DTileset({url: 'assets/13852/tileset.json'}))

  viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
      url: Cesium.IonResource.fromAssetId(577821),
      maximumScreenSpaceError: 4,
      maximumMemoryUsage: 2048
    })
  );

  viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(-94.475589, 42.136361, 400),
    orientation : {
      heading : Cesium.Math.toRadians(45.0),
      pitch : Cesium.Math.toRadians(-15.0),
    }
  });
}

for (let i = 0; i < 1; i++) {
  createViewer(`cesiumContainer${i + 1}`)
}