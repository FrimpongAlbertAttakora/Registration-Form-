// Map_Box
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiZXJ0YXR0YWtvcmFmcmltcG9uZyIsImEiOiJjazVlajcybmYxemQwM2tyZnVpaTg1czhjIn0.O0kwrsS5D1MeRrOF1NxhVA';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 12,
center: [-1.563712,6.667557]
});


function loadMap() {
    map.on('load', function() {
        map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
            type: 'geojson',
            data: {
            type: 'FeatureCollection',
            features: [
                {
                type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-1.563712,6.667557]
                        },
                    properties: {
                        hostelId: 'Jecado Hostel',
                        icon: 'marker'
                        }
                    },
                ]
                }
            },
        layout: {
        'icon-image': '{icon}-15',
        'icon-size': 2,
        'text-field': '{hostelId}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.9],
        'text-anchor': 'top',
                }
            });
        }
    );
}

loadMap();