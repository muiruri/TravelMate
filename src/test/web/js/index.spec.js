/**
 * Created by kenny on 27/07/2016.
 */
var expect = chai.expect;
describe("Fetch Exchange Rates", function () {

    beforeEach(function() {
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        $.ajax.restore();
    })

    it('Should make ajax call to fetch exhange rates', function() {
        var model = new app.models.ExchangeModel();
        model.fetch();
        expect($.ajax.calledOnce).to.be.true;
        //done();
    });

});

describe("Fetch news sources", function () {

    beforeEach(function() {
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
         $.ajax.restore();
    })

    it('Should make ajax call to Fetch news sources', function() {
        window.journalId = 1;
        var sourcesCollection = new app.collections.SourcesCollection();
        sourcesCollection.fetch();
        expect($.ajax.calledOnce).to.be.true;
        //done();
    });

});

describe("Fetch News", function () {

    beforeEach(function() {
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
         $.ajax.restore();
    })

    it('Should make ajax call to fetch news articles', function() {
        window.userId = 7;
        var newsCollection = new app.collections.NewsCollection();
        newsCollection.fetch({ source : "abc-news-au"});

        expect($.ajax.calledOnce).to.be.true;
        //done();
    });

});



describe("Should initialize exchange view,  render and test events", function () {

    beforeEach(function() {
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        $.ajax.restore();
        this.dateChangedSpy.reset()
    })

    before(function() {
        this.sandbox = sinon.sandbox.create()
        this.dateChangedSpy = this.sandbox.spy(app.views.ExchangeView.prototype, "dateChanged" )
        this.loadRatesSpy = this.sandbox.spy(app.views.ExchangeView.prototype, "loadRates" )

        this.model = new app.models.ExchangeModel();
        this.exchangeView = new app.views.ExchangeView({ el : document.getElementById("exchange-view"),  model : this.model });
    })

    after(function() {
        this.sandbox.restore()
    })

    it('Should initialize Exchange View and test events', function() {
        this.exchangeView.render();
        expect($.ajax.calledOnce).to.be.true;
        sinon.assert.callCount(this.dateChangedSpy, 1);
    });

    it('It should trigger change ', function() {
        this.exchangeView.$('.datepicker').trigger("change")
        sinon.assert.callCount(this.dateChangedSpy, 1)
    })

    it('Should trigger loading of data when model values are set', function() {
        this.model.set({
            "base": "EUR",
            "date": "2017-08-01",
            "rates": {
                "AUD": 1.4813,
                "BGN": 1.9558,
                "BRL": 3.688,
                "CAD": 1.4737,
                "CHF": 1.1414,
                "CNY": 7.9371,
                "CZK": 26.132,
                "DKK": 7.4369,
                "GBP": 0.8944,
                "HKD": 9.2284,
                "HRK": 7.409,
                "HUF": 303.6,
                "IDR": 15738,
                "ILS": 4.2141,
                "INR": 75.714,
                "JPY": 130.53,
                "KRW": 1325.5,
                "MXN": 21.002,
                "MYR": 5.062,
                "NOK": 9.3343,
                "NZD": 1.5813,
                "PHP": 59.508,
                "PLN": 4.2563,
                "RON": 4.5596,
                "RUB": 71.175,
                "SEK": 9.5563,
                "SGD": 1.6042,
                "THB": 39.322,
                "TRY": 4.1602,
                "USD": 1.1812,
                "ZAR": 15.692
            }
        })
        sinon.assert.callCount(this.loadRatesSpy, 1)
    })



});

describe("Should Initialize Sources View, render and test events", function () {

    before(function() {
        this.sandbox = sinon.sandbox.create()
        this.loadDataSpy = this.sandbox.spy(app.views.SourcesView.prototype, "loadData" );
        this.sourceCollection = new app.collections.SourcesCollection();
        this.sourceView = new app.views.SourcesView({ el : document.getElementById("sources-view"), collection: this.sourceCollection });
    });

    after(function() {
        this.sandbox.restore()
    })

    beforeEach(function() {
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        $.ajax.restore();
    })


    it('Should render sources view', function() {
        this.sourceView.render();

    });

    it('Should trigger load data when data is added to collection', function() {
        this.sourceCollection.add([
            {
                "status": "ok",
                "sources": [{
                "id": "abc-news-au",
                "name": "ABC News (AU)",
                "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
                "url": "http://www.abc.net.au/news",
                "category": "general",
                "language": "en",
                "country": "au",
                "urlsToLogos": { "small": "",
                    "medium": "", "large": ""
                }, "sortBysAvailable" : [
                    "top"
                ]
                } ]
            }
        ])
        sinon.assert.callCount(this.loadDataSpy, 1)

    });
});

describe("Should Initialize  news view, render and trigger events", function () {

    before(function() {
        this.sandbox = sinon.sandbox.create()
        this.loadDataSpy = this.sandbox.spy(app.views.NewsView.prototype, "loadData" );
        this.goBackSpy = this.sandbox.spy(app.views.NewsView.prototype, "goBack" );

        this.model = new app.models.SourcesModel()
        this.model.set(
            {
                "id": "abc-news-au",
                "name": "ABC News (AU)",
                "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
                "url": "http://www.abc.net.au/news",
                "category": "general",
                "language": "en",
                "country": "au",
                "urlsToLogos": { "small": "",
                    "medium": "", "large": ""
                }
            }
        )

        this.newsCollection = new app.collections.NewsCollection();
        this.newsView = new app.views.NewsView({ el : document.getElementById("news-view"), collection : this.newsCollection, model : this.model });
        //this.newsCollection.fetch({ source : model.get("id") })
    });

    after(function() {
        this.sandbox.restore()
    })

    beforeEach(function() {
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        $.ajax.restore();
    })


    it('Should render the news items views', function() {
        this.newsView.render()
    });

    it('Should load the news items when collection is updated', function() {
        this.newsCollection.add([
            {
                "author": "Napier Lopez",
                "title": "LG’s V30 is almost certainly dropping the second screen, but it’s worth it",
                "description": "LG's V10 and V20 were defined by their secondary display, but it seems the company is abandoning that trademark feature this time around.\r\n\r\nNot that it's all that surprising. Reliable ...",
                "url": "https://thenextweb.com/gadgets/2017/08/01/lgs-v30-almost-certainly-dropping-second-screen-worth/",
                "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/LG-V20-More-9.jpg",
                "publishedAt": "2017-08-01T22:34:21Z"
            }
        ])
        sinon.assert.callCount(this.loadDataSpy, 1)
    })

    it('Should call the go back function when link is clicked', function() {
        this.newsView.$(".back").click()
        sinon.assert.callCount(this.goBackSpy, 1)
    })
});

describe("Should load the map", function () {

    before(function() {
        this.sandbox = sinon.sandbox.create()
        this.drawRoute = this.sandbox.spy(app.views.MapView.prototype, "drawRoute" );
        this.goBackSpy = this.sandbox.spy(app.views.NewsView.prototype, "goBack" );

        this.mapView = new app.views.MapView()


        //this.newsCollection.fetch({ source : model.get("id") })
    });

    after(function() {
        this.sandbox.restore()
    })

    beforeEach(function() {
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        $.ajax.restore();
    })

    it('Should render the map view', function() {
        this.mapView.render()
    });

    it('Should call the draw route when button is clicked', function() {
        this.mapView.$(".findDirection").click()
        sinon.assert.callCount(this.drawRoute, 1)
    })
});



