Meteor.startup(function() {
    GoogleMaps.load();

    Template.body.helpers({
        liveMapOptions: function(){
            if(GoogleMaps.loaded()){
                return {
                    center: new google.maps.LatLng(-37.8136, 144.9631),
                    zoom: 8
                };
            }
        }
    });

    Template.body.onCreated(function(){
        GoogleMaps.ready('liveMap', function(map){
            var marker = new google.maps.Marker({
                position: map.options.center,
                map: map.instance
            })
        });
    });
});