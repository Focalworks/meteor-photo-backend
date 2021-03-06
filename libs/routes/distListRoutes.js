/**
 * Created by Amitav Roy on 24/2/15.
 */
/*Distribution list screens*/
Router.route('/dist-list-listing', {
    controller: 'AdminController',
    template: 'distListListing'
});

Router.route('/dist-list-listing/:_id', {
    controller: 'AdminController',
    template: 'distListDetails',
    data: function () {
        var distListId = this.params._id;
        console.log(DistributionList.findOne({_id: distListId}));
        return {
            distList: DistributionList.findOne({_id: distListId})
        }
    }
});