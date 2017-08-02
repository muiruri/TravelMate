/**
 * Created by kenny on 02/08/2017.
 */

NewsView = Backbone.View.extend({
    events: {
        "click .back" : "goBack",
        "click .news-item" : "openNews"
    },

    initialize: function(options) {
        this.collection.on("add", this.loadData.bind(this));
    },

    /**
     *  Renders the view
     * @returns {NewsView}
     */
    render: function() {
        this.$el.removeClass("hide");
        var header = _.template($("#news-header-template").html())
        this.$el.append(header({ source : this.model.get("name") }))
        //this.$(".news-source").html(this.model.get("name"));
        return this;
    },

    /**
     *  Displays the articles after they are fetched.
     * @param models
     */
    loadData: function(models) {

        this.collection.each(function(model) {
            var template = _.template($('#new-item-template').html());
            this.$el.append(template({ imageURL : model.get("urlToImage"), title : model.get("title"),
                description : model.get("description"), author : model.get("author"), publishedAt: model.get("publishedAt"),
                url : model.get("url")
            }))
        }, this);

    },

    /**
     *  Opens the article link on a new tab.
     * @param evt
     */
    openNews: function(evt) {
        var url = $(evt.target).attr("url");
        window.open(url, "_blank")
    },

    /**
     *  Navigates back to the sources
     * @param evt
     */
    goBack: function(evt) {
        this.$el.empty().addClass("hide");
        $("#sources-view").removeClass("hide");
    }
});

var app = app || {};
app.views = app.views || {};
app.views.NewsView = NewsView;