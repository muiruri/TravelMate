<%--
  Created by IntelliJ IDEA.
  User: kenny
  Date: 01/08/2017
  Time: 15:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<!DOCTYPE html>

<html>
<head>
    <title>Travel Mate | Exchange rates</title>
    <script>
        var page = "index";
    </script>
    <link href='resources/vendor/bootstrap/dist/css/bootstrap.min.css' rel='stylesheet' type='text/css' />
    <link href='resources/vendor/bootstrap-table/dist/bootstrap-table.min.css' rel='stylesheet' type='text/css' />
    <link href='resources/vendor/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css' rel='stylesheet' type='text/css' />
    <link href='resources/css/style.css' rel='stylesheet' type='text/css' />

</head>
<body>
<div class="page-header">
    <%@ include file="/WEB-INF/views/menu.jsp" %>
    <h3><spring:message code="general.appName" />  <small>Exchange rates</small></h3>
</div>
<div class="container" id="exchange-view">
    <div class="form-group col-md-3">
        <label for="rateDate">Select Date</label>
        <input type="text" class="form-control datepicker input-sm" id="rateDate" placeholder="date"/>
    </div>
    <table class="table">
        <thead>
        <tr>
            <th data-field="count">#</th>
            <th data-field="code"><spring:message code="general.currencyCode" /></th>
            <th data-field="rate"><spring:message code="general.rate" /></th>
        </tr>
        </thead>
    </table>
</div>
</body>
<script type="text/javascript" src="resources/vendor/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="resources/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="resources/vendor/underscore/underscore-min.js"></script>
<script type="text/javascript" src="resources/vendor/backbone/backbone-min.js"></script>
<script type="text/javascript" src="resources/vendor/notifyjs/dist/notify.js"></script>
<script type="text/javascript" src="resources/vendor/bootstrap-table/dist/bootstrap-table.min.js"></script>
<script type="text/javascript" src="resources/vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
<script type="text/javascript" src="resources/vendor/moment/moment.js"></script>
<script type="text/javascript" src="resources/js/travelmate.js"></script>
<script type="text/javascript" src="resources/js/app.js"></script>
</html>
