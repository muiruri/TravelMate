/**
 * Created by kenny on 01/08/2017.
 */

var SourcesView;

SourcesView = Backbone.View.extend({

    initialize: function(options) {
        this.collection.on("add", this.loadData.bind(this));
    },
    render: function() {
        this.$(".table").bootstrapTable({
            data : [], striped: true, idField: "id", pagination: true,  height: app.getHeight(), toolbar : '#toolbar', search : true
        });
        this.$('.table').on('dbl-click-row.bs.table', (function (event, row, element) {
            var id = row.id;
            var model = this.collection.get(id);

            var newsCollection = new app.collections.NewsCollection();
            var newsView = new app.views.NewsView({ el : document.getElementById("news-view"), collection : newsCollection, model : model });
            newsCollection.fetch({ source : model.get("id") });
            this.$el.addClass("hide");
            newsView.render();
        }).bind(this));
        return this;
    },

    loadData: function(models) {
        var i = 1;
        var newList = this.collection.map(function(model) {
            var newModel = {};
            newModel.count = i;
            newModel.id = model.get("id");
            newModel.name = model.get("name");
            newModel.description = model.get("description");

            //newModel.id = model.get("_id");
            i++;
            return newModel;
        });
        this.$(".table").bootstrapTable("load", newList);
    }
});

var app = app || {};
app.views = app.views || {};
app.views.SourcesView = SourcesView;