<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <%
        String baseUrl = request.getContextPath();
    %>
    <title>新增角色</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <link href="<%=baseUrl%>/static/css/mine.css" type="text/css" rel="stylesheet">
    <link href="<%=baseUrl%>/static/validform/css/style.css" type="text/css" rel="stylesheet">
</head>
<body>
<div class="div_head">
            <span>
                <span style="float:left">当前位置是：挂号管理 => 挂号</span>
            </span>
</div>
<div></div>
<div style="font-size: 13px;margin: 10px 5px">
    <form id="_form">
        <table border="1" width="100%" class="table_a">
            <tr>
                <td style="width:15%"><span class="need">*</span>就诊人</td>
                <td>
                    <select name="ubPrId" datatype="*" nullmsg="请选择所属角色！">
                        <option value="">--请选择--</option>
                        <c:forEach items="${cardLt}" var="card">
                            <option value="${card.cardNo}">${card.userName}</option>
                        </c:forEach>
                    </select>
                </td>
            </tr>
            <tr>
                <td style="width:15%"><span class="need">*</span>医院</td>
                <td>
                    <select name="ubPrId" datatype="*" nullmsg="请选择所属角色！">
                        <option value="">--请选择--</option>
                        <c:forEach items="${hosLt}" var="hos">
                            <option value="${hos.hosCode}">${hos.hosName}</option>
                        </c:forEach>
                    </select>
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="submit" value="新增"> &nbsp;
                    <input type="button" value="返回" onclick="javascript:history.go(-1)">
                </td>
            </tr>
        </table>
    </form>
</div>
<script type="text/javascript" src="<%=baseUrl%>/static/lib/jquery.min.js"></script>
<script type="text/javascript" src="<%=baseUrl%>/static/validform/Validform_v5.3.2_min.js"></script>
<script type="text/javascript">
    $("#_form").Validform({
        tiptype: 3,
        tipSweep: false
    });
</script>
</body>
</html>