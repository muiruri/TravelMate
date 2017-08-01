<%--
  Created by IntelliJ IDEA.
  User: kenny
  Date: 06/04/2017
  Time: 20:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<!DOCTYPE html>
<html>
<head>
    <title>Directions</title>
    <script>
        var page = "directions";
    </script>
    <title>Products</title>
    <link href='resources/vendor/bootstrap/dist/css/bootstrap.min.css' rel='stylesheet' type='text/css' />
    <link href='resources/vendor/bootstrap-table/dist/bootstrap-table.min.css' rel='stylesheet' type='text/css' />
    <link href='resources/css/style.css' rel='stylesheet' type='text/css' />
    <script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>
    <script>

    </script>
</head>
<body>
<div class="page-header">
    <%@ include file="/WEB-INF/views/menu.jsp" %>
    <h3><spring:message code="general.appName" /> <small>Find your way around</small></h3>
</div>
<div class="container" id="table-view">
    <div class="modal-body container-fluid">
        <div id="map">
            <div class="">
                <input class="form-control input input-sm" id="search" type="text"/>
            </div>
        </div>
    </div>
</div>
</body>

<script type="text/javascript" src="resources/vendor/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="resources/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="resources/vendor/underscore/underscore-min.js"></script>
<script type="text/javascript" src="resources/vendor/backbone/backbone-min.js"></script>
<script type="text/javascript" src="resources/vendor/moment/min/moment.min.js"></script>
<script type="text/javascript" src="resources/vendor/notifyjs/dist/notify.js"></script>
<script type="text/javascript" src="resources/vendor/bootstrap-table/dist/bootstrap-table.min.js"></script>
<script type="text/javascript" src="resources/js/travelmate.js"></script>

<script type="text/javascript" src="resources/js/app.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAP_8poecyZZHV9AQEzZPGPwFulBQXXRHY&libraries=places&callback=app.initMap"
></script>
</html>
