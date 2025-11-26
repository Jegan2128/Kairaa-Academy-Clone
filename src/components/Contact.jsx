// src/components/MapContactSection.jsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import ContactCard from "../pages/Courses/ContactCard"; // adjust path if needed
import BranchCardGrid from "../pages/Courses/BranchCardGrid";

function createPinIcon(color = "#e02424") {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 38" width="24" height="38">
      <path d="M12 0C7.03 0 3 4.03 3 9c0 7.5 9 22 9 22s9-14.5 9-22c0-4.97-4.03-9-9-9z" fill="${color}"/>
      <circle cx="12" cy="9" r="4" fill="#fff"/>
    </svg>
  `;
  const url = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  return L.icon({
    iconUrl: url,
    iconSize: [28, 44],
    iconAnchor: [14, 44],
    popupAnchor: [0, -44],
  });
}

/** Helper component to fit map to markers on load */
function FitBounds({ positions }) {
  const map = useMap();
  useEffect(() => {
    if (!map || !positions?.length) return;
    const bounds = L.latLngBounds(positions);
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [map, positions]);
  return null;
}

export default function MapContactSection() {
    
  // Branch list (keep as you provided)
  const branches = [
    {
      name: "Coimbatore Branch",
      position: [11.006259925811117, 76.95133439047923],
      address:
        "Kairaa Tech Serve Private Limited, No. 131, 2nd Floor, DB Road, Near Ramrajcotton Showroom, Rs Puram, Coimbatore, Tamil Nadu 641018",
    },
    {
      name: "Chennai Branch",
      position: [12.92304217215311, 80.1647812888451],
      address:
        "Kairaa Tech Serve Private Limited, No.10 Eshwari Nagar, Gowrivakkam, Chennai - 600073",
    },
    {
      name: "Chittoor Branch",
      position: [13.195354248207709, 79.09377978294765],
      address: "No.4-2044/B, Near Savithriamma College, Vellore road, Chittoor - 517 002",
    },
    {
      name: "Vellore Branch",
      position: [12.936164574801069, 79.14796648103912],
      address:
        "KAIRAA BLOCKCHAIN ACADEMY, Plot no.4, first floor Thendral Nagar Extn., Chathuvachari, Vellore - 632009",
    },
    {
      name: "Salem Branch",
      position: [11.67431091272396, 78.14278266567767],
      address: "Dno.2/3, Manimegalay Street, Advatha Asram Road, Balaji Nagar, Salem - 636004",
    },
    {
      name: "Trichy Branch",
      position: [10.826570119506671, 78.68709635092421],
      address:
        "Kairaa Tech Serve Private Limited, 76-O, Sri Jothi Complex, 3rd Floor, N.E.E. Road, Thillainagar, Trichy - 620018",
    },
    {
      name: "Madurai Branch",
      position: [9.949162493815948, 78.15982819435997],
      address:
        "KAIRAA TECH SERVE PRIVATE LIMITED, The Ground floor, Door No. 34, TM Nagar, Mattuthavani Bus Stand, Madurai – 625107",
    },
    {
      name: "Tirunelveli Branch",
      position: [8.700139456282637, 77.72584049325324],
      address:
        "KAIRAA TECHSERVE PRIVATE LIMITED, No.12/1 Vasantha Nagar Palayankottai circle, Tirunelveli - 627002",
    },
  ];

  const [map, setMap] = useState(null);
  const redIcon = createPinIcon("#e02424");

  // extract positions for FitBounds helper
  const positions = branches.map((b) => b.position);

  return (
    <>
    <div className="flex flex-col md:flex-row justify-around md:mx-2 m-2 gap-3">
      {/* Map column */}
      <div className="w-full md:w-3/6 h-[70vh] md:h-[520px] rounded-xl overflow-hidden shadow-lg ">
        <MapContainer
          center={branches[0].position}
          zoom={6}
          className="w-full h-full relative z-0"
          whenCreated={(m) => setMap(m)}
          scrollWheelZoom={true}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <FitBounds positions={positions} />

          {branches.map((b, i) => {
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${b.position[0]},${b.position[1]}`;

            return (
              <Marker key={i} position={b.position} icon={redIcon}>
                <Popup minWidth={220}>
                  <div className="text-sm">
                    <h3 className="font-semibold mb-1">{b.name}</h3>
                    <p className="text-xs mb-3 whitespace-pre-wrap">{b.address}</p>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => window.open(googleMapsUrl, "_blank")}
                        className="px-3 py-1 rounded-md border text-xs text-blue-500 font-medium hover:bg-gray-100"
                      >
                        Open in Google Maps
                      </button>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      {/* Contact card column */}
      <div className="w-full md:w-2/4 flex md:items-start">
        {/* Keep your ContactCard as-is; it will render here */}
        <ContactCard />
      </div>
      
    </div>
    <BranchCardGrid/>
    </>
  );
}
