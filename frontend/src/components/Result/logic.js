let mapboxgl;

mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2hhbnQxOTQiLCJhIjoiY2twY2U4NDlnMDM2eDJvcDdjenpwbzJrdSJ9.1oQ67A0udzQw2mwUEP4GYA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [79.0882, 21.1458],
    zoom: 4
});
map.on('load', function () {
    map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        function (error, image) {
            if (error) throw error;
            map.addImage('custom-marker', image);
            map.addSource('points', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            // feature for Mapbox DC
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [
                                    78.0421, 27.1751
                                ]
                            },
                            'properties': {
                                'title': 'The Taj Mahal'
                            }
                        },
                        {
                            // feature for Mapbox SF
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [76.468536, 15.334022]
                            },
                            'properties': {
                                'title': 'Sun Temple'
                            }
                        },
                        {
                            // feature for Mapbox SF
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [75.1791, 20.0238]
                            },
                            'properties': {
                                'title': 'Kailasa Temple'
                            }
                        },
                        {
                            // feature for Mapbox SF
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [ 73.7191, 21.8380]
                            },
                            'properties': {
                                'title': 'The Statue Of Unity'
                            }
                        }
                    ]
                }
            });

            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'points',
                'layout': {
                    'icon-image': 'custom-marker',

                    'text-field': ['get', 'title'],
                    'text-font': [
                        'Open Sans Semibold',
                        'Arial Unicode MS Bold'
                    ],
                    'text-offset': [0, 1.25],
                    'text-anchor': 'top'
                }
            });
        }
    );
});