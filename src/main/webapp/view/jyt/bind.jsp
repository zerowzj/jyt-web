<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <%
        String baseUrl = request.getContextPath();
    %>
    <title>修改密码</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <link href="<%=baseUrl%>/static/css/mine.css" type="text/css" rel="stylesheet">
    <link href="<%=baseUrl%>/static/validform/css/style.css" type="text/css" rel="stylesheet">
</head>
<body>
<div class="div_head">
    <span>
        <span style="float:left">当前位置是：个人管理 => 绑定京医通</span>
    </span>
</div>
<div></div>
<div style="font-size: 13px;margin: 10px 5px">
    <form id="_form" action="/system/pwdModify" method="post">
        <table border="1" width="100%" class="table_a">
            <tr>
                <td style="width:15%"><span class="need">*</span>京医通登录名</td>
                <td><input type="text" name="jytLoginName" value="${jytLoginName}" datatype="s6-16" nullmsg="请输入新密码！">
                </td>
            </tr>
            <tr>
                <td><span class="need">*</span>京医通登录密码</td>
                <td><input type="password" name="jytLoginPwd" value="${jytLoginPwd}" datatype="s6-16"
                           nullmsg="请输入确认新密码！" recheck='ubLoginPwd'></td>
            </tr>
            <tr>
                <td><span class="need">*</span>Cookie</td>
                <td><textarea rows="10" cols="50">${jytCookie}</textarea></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="submit" value="绑定">
                </td>
            </tr>
        </table>
    </form>
    <script type="text/javascript" src="<%=baseUrl%>/static/lib/jquery.min.js"></script>
    <script type="text/javascript" src="<%=baseUrl%>/static/validform/Validform_v5.3.2_min.js"></script>
    <script type="text/javascript" src="<%=baseUrl%>/static/layer/layer.js"></script>
    <script type="text/javascript">
        //验证
        $("#_form").Validform({
            tiptype: 3,
            tipSweep: false
        });
    </script>
</div>
</body>
</html>