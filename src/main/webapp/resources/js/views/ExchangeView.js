/**
 * Created by kenny on 07/04/2017.
 */

var ExchangeView;

ExchangeView = Backbone.View.extend({
    events: {
        "change #rateDate" : "dateChanged",
    },

    initialize: function(options) {
        this.model.on("change", this.loadRates.bind(this));
    },
    render: function() {
        this.$(".table").bootstrapTable({
            data : [], striped: true, idField: "id", pagination: true,  height: app.getHeight(), toolbar : '#toolbar', search : true
        });


        this.$('.datepicker').datepicker({ autoclose: true , format: 'yyyy-mm-dd', startDate: "01-01-1999",endDate : "0d", value: "01-01-1999"});
        this.$('.datepicker').datepicker('setDate', moment().format('YYYY-MM-DD'))
        //this.model.fetch()
        return this;
    },

    dateChanged: function(evt) {
        var date = this.$("#rateDate").val();
        this.model.fetch({date : date });
    },

    loadRates: function(model) {
        var i = 1;
        var rates = this.model.get("rates");
        var newList = []
        for(var key in rates) {
            var newModel = {};
            newModel.count = i;
            newModel.id = i;
            newModel.code = key;
            newModel.rate = rates[key];
            newList.push(newModel);
            i++;
        }

        this.$(".table").bootstrapTable("load", newList);
    }
});

var app = app || {};
app.views = app.views || {};
app.views.ExchangeView = ExchangeView;