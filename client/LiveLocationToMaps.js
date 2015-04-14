Meteor.startup(function() {
    GoogleMaps.load();
});

Template.body.helpers({
    liveMapOptions: function(){
        if(GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(52.367, 4.9),
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
        });
    });
});

Template.liveMap.rendered = function () {
    var position = Geolocation.latLng();
    var currentUser = Meteor.users.findOne({ _id: Meteor.user()._id });
    currentUser.position = position;
    
    Meteor.users.update({_id:Meteor.user()._id}, currentUser);
};

Template.body.events({
    'click': function () {
        
    }
});

Template.users.helpers({
    users: function () {
        return Meteor.users.find({});
    }
});