/**
 * Created by kenny on 31/07/2016.
 */

var app = app || {};
$(function () {
    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/gim,
        evaluate: /\{\{(.+?)\}\}/gim,
        escape: /\{\{\-(.+?)\}\}/gim
    };
    $.notify.defaults({ autoHide: false});
    

    app.closeNotify = function(successMessage, syncId, type) {
        $(".notifyjs-bootstrap-base." + syncId).
        removeClass("notifyjs-bootstrap-info").
        addClass("notifyjs-bootstrap-" + type).
        find("[data-notify-text]").
        text(successMessage);

        close = function() {
            $(".notifyjs-bootstrap-base." + syncId).trigger("notify-hide")
        }
        setTimeout(close, 3000);
    }
    app.getHeight = function() {
        return $(window).height() - 100;
    }
    app.formatterName = function(value, row, index) {
        var template = null;
        if(row.user_id != userId) {
            template = _.template(
                $( "#journal-content" ).html()
            );
        } else {
            template = _.template(
                $( "#journal-owner-content" ).html()
            );
        }
        var journal = app.userJournals.where({journalId : row.id});
        var div = template({ journalId : row.id });
        if(journal.length > 0) {
            div = $(div).find(".subscribe").html("Unsubscribe").parent().clone().wrap('<div/>').parent().html();
        }
        return div;
    }
});