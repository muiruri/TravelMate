<%--
  Created by IntelliJ IDEA.
  User: kenny
  Date: 01/08/2017
  Time: 23:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<!DOCTYPE html>
<html>
<head>
    <title>News</title>
    <script>
        var page = "news";
    </script>
    <link href='resources/vendor/bootstrap/dist/css/bootstrap.min.css' rel='stylesheet' type='text/css' />
    <link href='resources/vendor/bootstrap-table/dist/bootstrap-table.min.css' rel='stylesheet' type='text/css' />
    <link href='resources/vendor/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css' rel='stylesheet' type='text/css' />
    <link href='resources/css/style.css' rel='stylesheet' type='text/css' />
</head>
<body>
<div class="page-header">
    <%@ include file="/WEB-INF/views/menu.jsp" %>
    <h3><spring:message code="general.appName" />  <small>News</small></h3>
</div>
<div class="container" id="sources-view">
    <table class="table">
        <thead>
            <tr>
                <th data-field="name"><spring:message code="general.name" /></th>
                <th data-field="description"><spring:message code="general.description" /></th>
            </tr>
        </thead>
    </table>
</div>
<div class="container hide" id="news-view">


</div>

<script type="text/template" id="news-header-template">
    <div>

        <h3 class="news-source">
            <small>
                <a aria-label="Left Align" class="back pointer">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Back to sources
                </a>
            </small>
            {{ source }}
        </h3>
    </div>
</script>
<script type="text/template" id="new-item-template">
    <div class="row news-item">
        <div class="col-md-3">
            <img src="{{ imageURL }}"/>
        </div>
        <div class="col-md-9">
            <label>{{ title }}</label>
            <p>{{ description }}</p>
        </div>
        <div class="col-md-12">
            <label class="text-muted">Author {{ author }} Published at {{ publishedAt }}</label>
        </div>
    </div>

</script>
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
