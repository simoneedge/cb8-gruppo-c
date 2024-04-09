import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { getCookie } from "cookies-next";

const Stadium = ({}) => {
  const searchTextFieldRef = useRef(null);
  const [sportFacilities, setSportFacilities] = useState([]);
  let map;
  let service;
  const sport = getCookie("selectedSport");

  useEffect(() => {
    const loadMap = async () => {
      const script = document.createElement("script");
      const capitalizeFirstLetter = (string) => {
        return string.replace(/\b\w/g, (char) => char.toUpperCase());
      };
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;

      const loadScript = new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
      });

      document.body.appendChild(script);

      await loadScript;

      const pyrmont = new window.google.maps.LatLng(41.8719, 12.5674); // Coordinate di Roma come esempio
      map = new window.google.maps.Map(document.createElement("div"), {
        center: pyrmont,
        zoom: 15,
      });

      const input = searchTextFieldRef.current;
      const autocomplete = new window.google.maps.places.Autocomplete(input, {
        componentRestrictions: { country: "IT" },
      });

      autocomplete.bindTo("bounds", map);

      window.google.maps.event.addListener(
        autocomplete,
        "place_changed",
        () => {
          const place = autocomplete.getPlace();
          if (!place.geometry) {
            console.error("Place geometry is missing.");
            return;
          }

          const includedLanguages = ["en", "it"];
          const request = {
            location: place.geometry.location,
            radius: "50000",
            keyword: sport,
            language: "en",
          };

          if (includedLanguages.length > 0) {
            request.language = includedLanguages
              .map((lang) => `-${lang}`)
              .join("|");
          }

          service = new window.google.maps.places.PlacesService(map);
          service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              Promise.all(
                results.map((result) => {
                  return new Promise((resolve, reject) => {
                    service.getDetails(
                      { placeId: result.place_id },
                      (place, status) => {
                        if (
                          status ===
                          window.google.maps.places.PlacesServiceStatus.OK
                        ) {
                          resolve(place);
                        } else {
                          reject(status);
                        }
                      }
                    );
                  });
                })
              ).then((places) => {
                const capitalizedPlaces = places.map((place) => ({
                  ...place,
                  name: capitalizeFirstLetter(place.name),
                }));
                setSportFacilities(capitalizedPlaces);
              });
            }
          });
        }
      );
    };

    loadMap();
  }, []);

  return (
    <form className={styles.form}>
      <input
        id="searchTextField"
        type="text"
        size="50"
        placeholder="Inserisci una città"
        ref={searchTextFieldRef}
      />
      <div className={styles.container}>
        {sportFacilities.map((facility, index) => (
          <div
            key={index}
            className={styles.detail}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <h3>{facility.name}</h3>
            <p>
              <strong>Indirizzo:</strong> {facility.formatted_address}
            </p>
            {facility.formatted_phone_number && (
              <p>
                <strong>Telefono:</strong> {facility.formatted_phone_number}
              </p>
            )}
          </div>
        ))}
      </div>
    </form>
  );
};

export default Stadium;
