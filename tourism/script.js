// Initialize the map with markers
function initMap() {
    const location = { lat: 48.8566, lng: 2.3522 }; // Example: Paris
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: location,
    });

    const landmarks = [
        { name: "Eiffel Tower", lat: 48.8584, lng: 2.2945 },
        { name: "Louvre Museum", lat: 48.8606, lng: 2.3376 },
        { name: "Notre-Dame Cathedral", lat: 48.8530, lng: 2.3499 }
    ];

    landmarks.forEach(landmark => {
        const marker = new google.maps.Marker({
            position: { lat: landmark.lat, lng: landmark.lng },
            map: map,
            title: landmark.name,
        });

        const infoWindow = new google.maps.InfoWindow({
            content: <h3>${landmark.name}</h3><p>Click for more info.</p>
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}