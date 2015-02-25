/**
 * Created by Amitav Roy on 24/2/15.
 */
/*Distribution list screens*/
Router.route('/dist-list-listing', {
    controller: 'AdminController',
    template: 'distListListing'
});

Router.route('/dist-list-listing/:_id', function () {
    var distList = DistributionList.findOne({_id: this.params._id});
    this.render('distListDetails', {data: distList});
});