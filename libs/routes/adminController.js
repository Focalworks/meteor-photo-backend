/**
 * Created by Amitav Roy on 24/2/15.
 */

/*Admin controller*/
AdminController = RouteController.extend({
    onBeforeAction: function () {
        /*console.log('onBefore');*/
        if (!Meteor.user() || !Roles.userIsInRole(Meteor.user()._id, ['superadmin', 'manager'])) {
            console.log('Unauthorized access');
            /*Router.go('/');*/
            this.render('home');
        }

        this.next();
    },
    waitOn: function () {
        /*console.log('waitOn');*/
        if (!Meteor.user()) {
            //Router.go('/');
        }
        return [
            Meteor.subscribe('deviceRegistration'),
            Meteor.subscribe('userCollection'),
            Meteor.subscribe("distributionList"),
            Meteor.subscribe("photoset")
        ]
    }
});