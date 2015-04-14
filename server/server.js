Meteor.startup(function () {
	Meteor.users.remove({});
});

Meteor.onConnection(function(connection){
	var currentUser = Meteor.users.findOne({ _id: Meteor.user()._id });
    
    currentUser.address = connection.clientAddress;

    Meteor.users.update({ _id : Meteor.user()._id }, currentUser);

    connection.onClose(function(){
        Meteor.users.remove({ _id: currentUser._id });
    });
});