/**
 * Created by kenny on 02/08/2017.
 */

NewsView = Backbone.View.extend({
    events: {
        "click .back" : "goBack",
    },

    initialize: function(options) {
        this.collection.on("add", this.loadData.bind(this));
    },
    render: function() {
        this.$el.removeClass("hide");
        var header = _.template($("#news-header-template").html())
        this.$el.append(header({ source : this.model.get("name") }))
        //this.$(".news-source").html(this.model.get("name"));
        return this;
    },

    loadData: function(models) {

        this.collection.each(function(model) {
            var template = _.template($('#new-item-template').html());
            this.$el.append(template({ imageURL : model.get("urlToImage"), title : model.get("title"),
                description : model.get("description"), author : model.get("author"), publishedAt: model.get("publishedAt")
            }))
        }, this);

    },

    goBack: function(evt) {
        this.$el.empty().addClass("hide");
        $("#sources-view").removeClass("hide");
    }
});

var app = app || {};
app.views = app.views || {};
app.views.NewsView = NewsView;