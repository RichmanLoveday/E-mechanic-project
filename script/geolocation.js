
let mapBox = document.getElementById('map')



const displayMap = (locations) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFhbWFhdmljdG9yIiwiYSI6ImNrcTVudG52OTE5MzEydmxuMjZ1ODQwNm8ifQ.dAZeYmW6jd8us_bVPpoqtQ';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/maamaavictor/ckq610zer8dqy18rl485fb1dn',
        scrollZoom: true,
        // center: [-118.113491, 34.111745],
        // zoom: 2,
        interactive: true
    })

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
        //Add Marker
        const el = document.createElement('div');
        el.className = 'marker';

        new mapboxgl.Marker({
                element: el,
                anchor: 'bottom'
            })
            .setLngLat(loc.coordinates)
            .addTo(map);

        //Add Popup
        new mapboxgl.Popup({
                offset: 30
            })
            .setLngLat(loc.coordinates)
            .setHTML(`<p style='color: green'>${loc.shop} <p style='color: blue'>${loc.mechanic}</p> </p>`)
            .addTo(map)

        //Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
}



var rLocation = '[{"coordinates": [3.38499846,6.5166646],"mechanic": "Tunde Okon","shop": "Okon automobile repairs"}, {"coordinates": [3.38999846,6.5166646],"mechanic": "Musa Ibrahim","shop": "MusaI automobile "}, {"coordinates": [3.3999846,6.5166646],"mechanic": "Mike Abdul","shop": "Abdul automobile repairs"}]'



if (mapBox) {

    rLocation = JSON.parse(rLocation)
    displayMap(rLocation);
    //displayMap can handle more than one location all at once 
    //to use send in an object that contains locations
}

//Script for the open and closing of the side menu
function OpenSideMenu() {
    document.getElementById('side-menu').style.width = '60%';
    document.getElementById('search-menu').style.width = '0%';
}

function CloseSideMenu() {
    document.getElementById('side-menu').style.width = '0px';
    document.getElementById('services').style.display = 'none';
}