/**
 * Created by Amitav Roy on 24/2/15.
 */
/*Device listing screens*/
Router.route('/device-listing', {
    controller: 'AdminController',
    template: 'registation'
});

Router.route('/device-details/:_id', {
    controller: 'AdminController',
    template: 'deviceDetails',
    data: function () {
        var deviceId = this.params._id;
        return {
            device: DeviceRegistration.findOne({_id: deviceId})
        }
    }
});