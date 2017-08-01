/**
 * Created by kenny on 07/04/2017.
 */

var app = app || {};

var LoginView = Backbone.View.extend({
    events: {
        "click .loginUser" : "login",
        "click .signup" : "showSignup",
        "click .add-attachment" : "addAttachment"
    },

    initialize: function() {

    },

    render: function() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                window.location = "products";
            }
        });
        return this;
    },

    showSignup: function() {
        var signupView = new app.views.InstitutionSignupView();

        signupView.render();
    },

    login: function(event) {
        event.preventDefault();
        var error = false;
        if(this.$("#email").val() == "") {
            this.$("#email").parent(".form-group").addClass("has-error");
            error = true;
        }
        if(this.$("#password").val() == "") {
            this.$("#password").parent(".form-group").addClass("has-error");
            error = true;
        }
        if(error) {
            return;
        }

        var formData = {};
        formData.username = this.$("#email").val();
        formData.password = this.$("#password").val();



        firebase.auth().signInWithEmailAndPassword( this.$("#email").val(), this.$("#password").val()).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            // ...
        });

    }
});

$(function () {
    var loginView = new LoginView({el : document.getElementById("loginView")});
    loginView.render();
});

