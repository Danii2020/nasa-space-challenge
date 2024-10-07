// Estilos proporcionados por GIBS para el layer
const MAPBOX_STYLE = {
    "version": 8,
    "name": "FIRMS_MODIS_Thermal_Anomalies",
    "sources": {
      "MODIS_Aqua_Thermal_Anomalies_All": {
        "type": "vector",
        "tiles": [
          "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Aqua_Thermal_Anomalies_All/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt",
          "https://gibs.earthdata.nasa.gov/wmts/epsg3413/best/MODIS_Aqua_Thermal_Anomalies_All/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt"
        ]
      },
      "MODIS_Aqua_Thermal_Anomalies_Day": {
        "type": "vector",
        "tiles": [
          "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Aqua_Thermal_Anomalies_Day/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt",
          "https://gibs.earthdata.nasa.gov/wmts/epsg3413/best/MODIS_Aqua_Thermal_Anomalies_Day/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt"
        ]
      },
      "MODIS_Aqua_Thermal_Anomalies_Night": {
        "type": "vector",
        "tiles": [
          "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Aqua_Thermal_Anomalies_Night/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt",
          "https://gibs.earthdata.nasa.gov/wmts/epsg3413/best/MODIS_Aqua_Thermal_Anomalies_Night/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt"
        ]
      },
      "MODIS_Combined_Thermal_Anomalies_All": {
        "type": "vector",
        "tiles": [
          "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Combined_Thermal_Anomalies_All/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt",
          "https://gibs.earthdata.nasa.gov/wmts/epsg3413/best/MODIS_Combined_Thermal_Anomalies_All/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt"
        ]
      },
      "MODIS_Combined_Thermal_Anomalies_Day": {
        "type": "vector",
        "tiles": [
          "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Combined_Thermal_Anomalies_Day/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt",
          "https://gibs.earthdata.nasa.gov/wmts/epsg3413/best/MODIS_Combined_Thermal_Anomalies_Day/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt"
        ]
      },
      "MODIS_Combined_Thermal_Anomalies_Night": {
        "type": "vector",
        "tiles": [
          "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Combined_Thermal_Anomalies_Night/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt",
          "https://gibs.earthdata.nasa.gov/wmts/epsg3413/best/MODIS_Combined_Thermal_Anomalies_Night/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt"
        ]
      },
      "MODIS_Terra_Thermal_Anomalies_All": {
        "type": "vector",
        "tiles": [
          "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_Thermal_Anomalies_All/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt",
          "https://gibs.earthdata.nasa.gov/wmts/epsg3413/best/MODIS_Terra_Thermal_Anomalies_All/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt"
        ]
      },
      "MODIS_Terra_Thermal_Anomalies_Day": {
        "type": "vector",
        "tiles": [
          "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_Thermal_Anomalies_Day/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt",
          "https://gibs.earthdata.nasa.gov/wmts/epsg3413/best/MODIS_Terra_Thermal_Anomalies_Day/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt"
        ]
      },
      "MODIS_Terra_Thermal_Anomalies_Night": {
        "type": "vector",
        "tiles": [
          "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_Thermal_Anomalies_Night/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt",
          "https://gibs.earthdata.nasa.gov/wmts/epsg3413/best/MODIS_Terra_Thermal_Anomalies_Night/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.mvt"
        ]
      }
    },
    "layers": [
      {
        "id": "MODIS_Aqua_Thermal_Anomalies_Day_v6_NRT",
        "source": "MODIS_Aqua_Thermal_Anomalies_Day",
        "source-layer": "MODIS_Aqua_Thermal_Anomalies_Day_v6_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Aqua_Thermal_Anomalies_Night_v6_NRT",
        "source": "MODIS_Aqua_Thermal_Anomalies_Night",
        "source-layer": "MODIS_Aqua_Thermal_Anomalies_Night_v6_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Combined_Thermal_Anomalies_All_v6_NRT",
        "source": "MODIS_Combined_Thermal_Anomalies_All",
        "source-layer": "MODIS_Combined_Thermal_Anomalies_All_v6_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Combined_Thermal_Anomalies_Day_v6_NRT",
        "source": "MODIS_Combined_Thermal_Anomalies_Day",
        "source-layer": "MODIS_Combined_Thermal_Anomalies_Day_v6_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Combined_Thermal_Anomalies_Night_v6_NRT",
        "source": "MODIS_Combined_Thermal_Anomalies_Night",
        "source-layer": "MODIS_Combined_Thermal_Anomalies_Night_v6_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Terra_Thermal_Anomalies_All_v6_NRT",
        "source": "MODIS_Terra_Thermal_Anomalies_All",
        "source-layer": "MODIS_Terra_Thermal_Anomalies_All_v6_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Terra_Thermal_Anomalies_Day_v6_NRT",
        "source": "MODIS_Terra_Thermal_Anomalies_Day",
        "source-layer": "MODIS_Terra_Thermal_Anomalies_Day_v6_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Terra_Thermal_Anomalies_Night_v6_NRT",
        "source": "MODIS_Terra_Thermal_Anomalies_Night",
        "source-layer": "MODIS_Terra_Thermal_Anomalies_Night_v6_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Aqua_Thermal_Anomalies_All_v61_NRT",
        "source": "MODIS_Aqua_Thermal_Anomalies_All",
        "source-layer": "MODIS_Aqua_Thermal_Anomalies_All_v61_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Aqua_Thermal_Anomalies_Day_v61_NRT",
        "source": "MODIS_Aqua_Thermal_Anomalies_Day",
        "source-layer": "MODIS_Aqua_Thermal_Anomalies_Day_v61_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Aqua_Thermal_Anomalies_Night_v61_NRT",
        "source": "MODIS_Aqua_Thermal_Anomalies_Night",
        "source-layer": "MODIS_Aqua_Thermal_Anomalies_Night_v61_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Combined_Thermal_Anomalies_All_v61_NRT",
        "source": "MODIS_Combined_Thermal_Anomalies_All",
        "source-layer": "MODIS_Combined_Thermal_Anomalies_All_v61_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Combined_Thermal_Anomalies_Day_v61_NRT",
        "source": "MODIS_Combined_Thermal_Anomalies_Day",
        "source-layer": "MODIS_Combined_Thermal_Anomalies_Day_v61_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Combined_Thermal_Anomalies_Night_v61_NRT",
        "source": "MODIS_Combined_Thermal_Anomalies_Night",
        "source-layer": "MODIS_Combined_Thermal_Anomalies_Night_v61_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Terra_Thermal_Anomalies_All_v61_NRT",
        "source": "MODIS_Terra_Thermal_Anomalies_All",
        "source-layer": "MODIS_Terra_Thermal_Anomalies_All_v61_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Terra_Thermal_Anomalies_Day_v61_NRT",
        "source": "MODIS_Terra_Thermal_Anomalies_Day",
        "source-layer": "MODIS_Terra_Thermal_Anomalies_Day_v61_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Terra_Thermal_Anomalies_Night_v61_NRT",
        "source": "MODIS_Terra_Thermal_Anomalies_Night",
        "source-layer": "MODIS_Terra_Thermal_Anomalies_Night_v61_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Aqua_Thermal_Anomalies_All_v6_STD",
        "source": "MODIS_Aqua_Thermal_Anomalies_All",
        "source-layer": "MODIS_Aqua_Thermal_Anomalies_All_v6_STD",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Aqua_Thermal_Anomalies_Day_v6_STD",
        "source": "MODIS_Aqua_Thermal_Anomalies_Day",
        "source-layer": "MODIS_Aqua_Thermal_Anomalies_Day_v6_STD",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Aqua_Thermal_Anomalies_Night_v6_STD",
        "source": "MODIS_Aqua_Thermal_Anomalies_Night",
        "source-layer": "MODIS_Aqua_Thermal_Anomalies_Night_v6_STD",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Combined_Thermal_Anomalies_All_v6_STD",
        "source": "MODIS_Combined_Thermal_Anomalies_All",
        "source-layer": "MODIS_Combined_Thermal_Anomalies_All_v6_STD",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Combined_Thermal_Anomalies_Day_v6_STD",
        "source": "MODIS_Combined_Thermal_Anomalies_Day",
        "source-layer": "MODIS_Combined_Thermal_Anomalies_Day_v6_STD",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Combined_Thermal_Anomalies_Night_v6_STD",
        "source": "MODIS_Combined_Thermal_Anomalies_Night",
        "source-layer": "MODIS_Combined_Thermal_Anomalies_Night_v6_STD",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Terra_Thermal_Anomalies_All_v6_STD",
        "source": "MODIS_Terra_Thermal_Anomalies_All",
        "source-layer": "MODIS_Terra_Thermal_Anomalies_All_v6_STD",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Terra_Thermal_Anomalies_Day_v6_STD",
        "source": "MODIS_Terra_Thermal_Anomalies_Day",
        "source-layer": "MODIS_Terra_Thermal_Anomalies_Day_v6_STD",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Terra_Thermal_Anomalies_Night_v6_STD",
        "source": "MODIS_Terra_Thermal_Anomalies_Night",
        "source-layer": "MODIS_Terra_Thermal_Anomalies_Night_v6_STD",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      },
      {
        "id": "MODIS_Aqua_Thermal_Anomalies_All_v6_NRT",
        "source": "MODIS_Aqua_Thermal_Anomalies_All",
        "source-layer": "MODIS_Aqua_Thermal_Anomalies_All_v6_NRT",
        "type": "circle",
        "paint": {
          "circle-radius": [
            "step",
            [
              "zoom"
            ],
            2,
            3,
            3
          ],
          "circle-color": "rgb(236, 98, 16)"
        }
      }
    ]
  }
  window.onload = function () {
    var source = new ol.source.WMTS({
        url: 'https://gibs-{a-c}.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?TIME=2013-06-16',
        layer: 'MODIS_Terra_CorrectedReflectance_TrueColor',
        format: 'image/jpeg',
        matrixSet: '250m',
        tileGrid: new ol.tilegrid.WMTS({
          origin: [-180, 90],
          resolutions: [
            0.5625,
            0.28125,
            0.140625,
            0.0703125,
            0.03515625,
            0.017578125,
            0.0087890625,
            0.00439453125,
            0.002197265625
          ],
          matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          tileSize: 512
        })
      });
      var baseLayer = new ol.layer.Tile({
        source: source,
        extent: [-180, -90, 180, 90]
      });
      
      var vectorLayer = new ol.layer.VectorTile({
        renderMode: 'vector',
        source: new ol.source.VectorTile({
          visible: true,
          url: 'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?TIME=2020-03-18T00:00:00Z&layer=MODIS_Aqua_Thermal_Anomalies_All&tilematrixset=2km&Service=WMTS&Request=GetTile&Version=1.0.0&FORMAT=application%2Fvnd.mapbox-vector-tile&TileMatrix={z}&TileCol={x}&TileRow={y}&TileMatrixSet=1km',
          format: new ol.format.MVT(),
          projection: ol.proj.get('EPSG:4326'),
          tileGrid: new ol.tilegrid.WMTS({
            extent: [-180, -90, 180, 90],
            resolutions: [0.5625, 0.28125, 0.140625, 0.0703125, 0.03515625, 0.017578125],
            tileSize: [512, 512]
          })
        })
      });
      
      var map = new ol.Map({
        layers: [baseLayer, vectorLayer],
        target: 'map',
        view: new ol.View({
          center: [0, 0],
          maxZoom: 8,
          zoom: 1,
          extent: [-180, -90, 180, 90],
          projection: ol.proj.get('EPSG:4326')
        })
      });

      function updateMapDate(date) {
        const newUrl = `https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?TIME=${date}T00:00:00Z&layer=MODIS_Aqua_Thermal_Anomalies_All&tilematrixset=2km&Service=WMTS&Request=GetTile&Version=1.0.0&FORMAT=application%2Fvnd.mapbox-vector-tile&TileMatrix={z}&TileCol={x}&TileRow={y}&TileMatrixSet=1km`;
        const newBaseUrl = `https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?TIME=${date}`
      
        vectorLayer.getSource().setUrl(newUrl);
        source.setUrl(newBaseUrl);
      }

      document.getElementById('datePicker').addEventListener('change', function(event) {
        const selectedDate = event.target.value;
        if (selectedDate) {
          updateMapDate(selectedDate);
        }
      });
      olms.stylefunction(vectorLayer, MAPBOX_STYLE, 'MODIS_Aqua_Thermal_Anomalies_All');
  }
  