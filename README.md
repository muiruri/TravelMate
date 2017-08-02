**TravelMate**

This is a web application for travellers which provides the following
functionalities in one place

* Current exchange rates
* Map Directions
* Latest news from various sources

The application makes use of the following API
* Fixer API - JSON API for foreign exchange rates and currency conversion.   http://fixer.io/
* Google Maps API
* News API - This API provides news from over 70+ sources

Application architecture
This is a full stack application using the layered architecture.
The backend is built using Spring MVC framework and the front end is built using
Backbone framework.

Front end :

The front end consists of the following components

Collections - These are used store lists of data.
The application is composed of 2 collections

* Source Collections - This is a list of various news sources
* News Collections - This is a list of articles from a source.

Models
These represent the various objects that are needed by the application.

There are 3 models
Exchange Model
This represents an exchange rate object which has the following attributes
* base - the main currency
* date - the date of the rate
* rates - a list of currency codes and the exchange rate

Source Model
This represents a news source object and has the following attributes

* id - ID of the source
* name - The name of source
* description - A description of the source

News Model
This represents a news article and has the following attributes

* author - The author of the article
* title - The title of the article
* description - A short description of the article
* url - The link to the article
* urlToImage - A url to an image of the article
* publishedAt - The date and time when the article was published.

Views

This are the elements that are displayed on the screen. The application has the following views

Exchange view

This view is responsible for displaying the exchange rates for a specific date.
It has the following components

* date picker - This is used to select the date for which to display the rates
* table - this is the component that displays a list of the exchange rates

Events
A change in the date picker value will trigger the loading of exchange rates for the selected date.

Map View
The map view is used to display a map on the screen and also allows the user to search for
directions between two points.

The map view has the following components
* From text field - This text field is used to search for the starting point.
* To text field - This text field is used to search for the end point.
* Get directions button - This button triggers the invoking of the Google places API to get the directions.
* Map - This is the main map

Sources View

This view is used to display the various sources for news. It consists
of

* Sources list with name and description.
* Search box for searching the list

News View

This view is used to display a list of articles from a source. The view displays the article image, title, description,
author and published date.

**Back end**

The backend consists of Spring MVC and has one controller for serving the application pages.

**Design considerations**

* Scalability - The application could be deployed in multiple servers behind load balancers which distribute
the requests to various servers. This will ensure that the application will be able to handle 1M+ requests.

* Concurrency - the various components execute their own processes and after they are all done they present to the user
 the completed application. The models and collection fetch the data and the views are rendered concurrently.

* Caching - Some of the data is cached on the browser and reused to avoid reloading of data everytime.


**Tests**

The application includes unit tests for the various components. These tests verify that the components will function as they should.

Technical Specification.

The application requires the following

Dependencies
* Java 8
* Maven - For Java dependency management
* NodeJS - For JS build and testing tools
* Bower - For JS dependency management
* Grunt - For building JS and running tests

**Frameworks**
* Spring MVC
* Backbone
* Bootstrap

**Test Frameworks**
* Phantom JS
* Mocha
* Sinon
* JUnit

**Running the application**

After installing the dependencies, in the project root folder run the following commands

To install the JS dependencies run the following two commands

	nmp install
	bower install

To Compile the JS files, run the command

	grunt

Build the application to generate the executable

	mvn package

The file which can be deployed in any servelet container will be avilable in the target folder.

To run the application from the command line, run the following command

	mvn tomcat7:run -Dmaven.tomcat.port=8080

The application can then be accessed from

    http://localhost:8080/TravelMate

 To run the tests, run the following commands

    cd src/test/web/
    npm install
    grunt

 Please note the second command should be run just once, on a fresh installation

**Back end tests**
To run the back end tests, run the command

	mvn test

