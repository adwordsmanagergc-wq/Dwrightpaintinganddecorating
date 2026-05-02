"use client";

import { useEffect, useRef } from "react";

interface SuburbPin {
  name: string;
  slug: string;
  lat: number;
  lng: number;
}

const suburbPins: SuburbPin[] = [
  { name: "Heathridge",  slug: "heathridge",  lat: -31.7592, lng: 115.7672 },
  { name: "Beldon",      slug: "beldon",      lat: -31.7758, lng: 115.7550 },
  { name: "Edgewater",   slug: "edgewater",   lat: -31.7783, lng: 115.7825 },
  { name: "Mullaloo",    slug: "mullaloo",    lat: -31.7758, lng: 115.7311 },
  { name: "Ocean Reef",  slug: "ocean-reef",  lat: -31.7572, lng: 115.7286 },
  { name: "Joondalup",   slug: "joondalup",   lat: -31.7448, lng: 115.7661 },
  { name: "Connolly",    slug: "connolly",    lat: -31.7411, lng: 115.7544 },
  { name: "Craigie",     slug: "craigie",     lat: -31.7886, lng: 115.7553 },
  { name: "Padbury",     slug: "padbury",     lat: -31.7872, lng: 115.7689 },
];

export default function SuburbMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Inject Leaflet CSS
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    import("leaflet").then((L) => {
      if (!containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [-31.77, 115.755],
        zoom: 13,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      });

      mapRef.current = map;

      // Clean light CartoDB tiles
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 19,
        }
      ).addTo(map);

      // Fit map to all markers with padding
      const bounds = L.latLngBounds(suburbPins.map((s) => [s.lat, s.lng]));
      map.fitBounds(bounds, { padding: [40, 40] });

      suburbPins.forEach((suburb) => {
        const icon = L.divIcon({
          html: `
            <a
              href="/painter/${suburb.slug}"
              class="suburb-pin"
              style="
                display: inline-block;
                background: #1d3a8a;
                color: white;
                padding: 5px 11px;
                border-radius: 9999px;
                font-size: 11.5px;
                font-weight: 700;
                white-space: nowrap;
                box-shadow: 0 2px 10px rgba(29,58,138,0.45);
                text-decoration: none;
                font-family: Inter, Arial, sans-serif;
                letter-spacing: 0.2px;
                border: 2px solid rgba(255,255,255,0.8);
                transition: background 0.15s, transform 0.15s, box-shadow 0.15s;
                cursor: pointer;
              "
              onmouseover="this.style.background='#1a1a1a';this.style.transform='scale(1.1)';this.style.boxShadow='0 4px 16px rgba(0,0,0,0.35)'"
              onmouseout="this.style.background='#1d3a8a';this.style.transform='scale(1)';this.style.boxShadow='0 2px 10px rgba(29,58,138,0.45)'"
            >${suburb.name}</a>
          `,
          className: "",
          iconSize: [0, 0],
          iconAnchor: [0, 10],
        });

        L.marker([suburb.lat, suburb.lng], { icon }).addTo(map);
      });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
      {/* Map container */}
      <div ref={containerRef} style={{ height: "520px" }} className="w-full" />

      {/* Overlay legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg text-xs text-gray-700 font-medium pointer-events-none z-[1000]">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-3 h-3 rounded-full bg-[#1d3a8a] inline-block" />
          Click a suburb to see our services there
        </div>
        <div className="text-gray-400 text-[10px]">Scroll to zoom · Drag to pan</div>
      </div>
    </div>
  );
}
