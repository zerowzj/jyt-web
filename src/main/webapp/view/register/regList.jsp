<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
    <title>角色列表</title>
    <link href="../../static/css/mine.css" type="text/css" rel="stylesheet"/>
    <link href="../../static/pagination/pagination.css" type="text/css" rel="stylesheet"/>
</head>
<body>
<div class="div_head">
            <span>
                <span style="float: left;">当前位置是：权限管理 => 角色列表</span>
                <span style="float: right; margin-right: 8px; font-weight: bold;">
                </span>
            </span>
</div>
<div></div>
<div class="div_search">
            <span>
                <form id="_form" action="/role/list" method="post">
                    角色名称：<input type="text" name="prName" value="${prName}" style="width: 120px;">
                    <input value="查询" type="submit"/>
                    <input type="hidden" id="_pageNo" name="pageNo">
                </form>
            </span>
</div>
<div style="font-size: 13px; margin: 10px 5px;">
    <table class="table_a" border="1" width="100%">
        <tbody>
        <tr style="font-weight: bold;">
            <td>角色编号</td>
            <td>角色名称</td>
            <td>角色状态</td>
            <td>创建时间</td>
            <td>描述</td>
            <td align="center">操作</td>
        </tr>
        <c:forEach items="${prEOLt}" var="prEO" varStatus="index">
            <tr>
                <td><c:out value="${prEO.prId}"/></td>
                <td><c:out value="${prEO.prName}"/></td>
                <td>
                    <c:if test="${prEO.prStatus == 'Y'}">启用</c:if>
                    <c:if test="${prEO.prStatus == 'N'}">停用</c:if>
                </td>
                <td><fmt:formatDate value="${prEO.prBeginTime}" pattern="yyyy-MM-dd HH:mm:ss" /></td>
                <td><c:out value="${prEO.prDesc}"/></td>
                <td>
                    <a href="/roleFunc/toConf?prId=${prEO.prId}">配置权限</a>
                </td>
            </tr>
        </c:forEach>
        <tr>
            <td colspan="20" style="text-align: center;">
                <div id="page" class="m-pagination" align="center"></div>
            </td>
        </tr>
        </tbody>
    </table>
</div>
<script src="../../static/lib/jquery.min.js"></script>
<script src="../../static/pagination/pagination.js"></script>
<script>
    $("#page").pagination({
        pageIndex: ${pageNo - 1},
        pageSize: ${pageSize},
        total: ${totalCount},
        pageBtnCount: 11,
        showInfo: true,
        infoFormat: '共{total}条',
        noInfoText:'查询结果为空'
    }).on("pageClicked", function (event, data) {
        $("#_pageNo").val(data.pageIndex + 1);
        $("#_form").submit();
    });
</script>
</body>
</html>