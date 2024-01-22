import React, { useEffect } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import Icon from "ol/style/Icon";
import Style from "ol/style/Style";

const OpenLayersMap: React.FC = () => {
  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM({
            attributions: "", // מונע הצגת חתימה
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([34.78057, 32.086]),
        zoom: 15,
      }),
    });

    // הוספת שכבת נקודות למיקום החנות עם אייקון
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [
          new Feature({
            geometry: new Point(fromLonLat([34.781, 32.0855])),
          }),
        ],
      }),
      style: new Style({
        image: new Icon({
          src: "/public/pin-icon.png",
          scale: 0.2,
        }),
      }),
    });

    map.addLayer(vectorLayer);
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{ width: "300px", height: "300px", marginBottom: "20px" }}
      ></div>
    </div>
  );
};

export default OpenLayersMap;
