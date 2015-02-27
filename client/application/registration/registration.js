/**
 * Created by Amitav Roy on 21/2/15.
 */
Meteor.subscribe("deviceRegistration");

Template.registation.created = function() {
    //console.log(this);
};

Template.registation.rendered = function () {
    this.$('[data-toggle="dropdown"]').dropdown();
};

Template.registation.helpers({
    'registrations' : function () {
        return DeviceRegistration.find({}, {sort: {created: -1}});
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
    },
    'click #del-s3': function () {
        console.log(123);
        S3.delete("/sps2GiA49mdu2FDyQ/unclickd_2015261_35338.jpg", function (error, result) {
            console.log("Error", error);
            console.log("Result", result);
        });
    }
});