<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
    <title>角色列表</title>
    <link href="/static/css/mine.css" type="text/css" rel="stylesheet"/>
</head>
<body>
<div class="div_head">
    <span>
        <span style="float: left;">当前位置是：挂号管理 => 医院列表</span>
        <span style="float: right; margin-right: 8px; font-weight: bold;"></span>
    </span>
</div>
<div></div>
<div style="font-size: 13px; margin: 10px 5px;">
    <table class="table_a" border="1" width="100%">
        <tbody id="data_list">
        <tr style="font-weight: bold;">
            <td>序号</td>
            <td>医院名称</td>
            <td>所在区</td>
            <td>医院级别</td>
            <td>操作</td>
        </tr>
        <c:forEach items="${hosLt}" var="hos" varStatus="index">
            <tr>
                <td><c:out value="${index.index + 1}"/></td>
                <td><c:out value="${hos.hosName}"/></td>
                <td><c:out value="${hos.countyName}"/></td>
                <td><c:out value="${hos.hosLevel}"/></td>
                <td>
                    <a href="#" data-code=${hos.hosCode} data-name=${hos.hosName}>挂号</a>
                </td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
</div>
<script type="text/javascript" src="/static/jquery.min.js"></script>
<script type="text/javascript" src="/static/layer/layer.js"></script>
<script>
    $(document).ready(function () {
        $("#data_list").on('click', "a[href='#']", function () {
            layer.open({
                type: 2,
                title: $(this).attr("data-name"),
                shadeClose: false,
                area: ['80%', '80%'],
                content: '/jyt/get_dept?hosCode=' + $(this).attr("data-code")
            });
        });
    })
</script>
</body>
</html>