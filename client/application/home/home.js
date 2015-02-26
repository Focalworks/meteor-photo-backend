/**
 * Created by Amitav Roy on 25/2/15.
 */
Template.home.events({
    'click #login': function() {
        var userName = $("#inputEmail").val();
        var password = $("#inputPassword").val();

        console.log(userName, password);
        Meteor.loginWithPassword(userName, password, function (Error) {
            if (Error) {
                console.log(Error);
            } else {
                Router.go('device-listing');
            }
        });
    }
});