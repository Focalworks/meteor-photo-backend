/**
 * Created by Amitav Roy on 21/2/15.
 */
Template.registation.rendered = function () {
    this.$('[data-toggle="dropdown"]').dropdown();
};

Template.registation.helpers({
    'registrations' : function () {
        return DeviceRegistration.find();
    }
});

Template.registation.events({
    'click .delete': function () {
        var device = $(this);
        var r = confirm("Are you sure you want to delete?");

        if (r == true) {
            Meteor.call('removeDeviceById', device[0]._id);
        } else {
            console.log("Dont delete");
        }

        return false;
    }
});