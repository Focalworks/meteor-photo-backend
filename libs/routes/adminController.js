/**
 * Created by Amitav Roy on 24/2/15.
 */

/*Admin controller*/
AdminController = RouteController.extend({
    onBeforeAction: function () {
        if (Meteor.user() === null) {
            Router.go('/');
        }

        this.next();
    }
});