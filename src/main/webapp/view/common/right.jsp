<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <%
        String baseUrl = request.getContextPath();
    %>
    <meta http-equiv=content-type content="text/html; charset=utf-8"/>
    <link href="<%=baseUrl%>/static/css/admin.css" type="text/css" rel="stylesheet"/>
</head>
<body>
<table cellspacing=0 cellpadding=0 width="100%" align=center border=0>
    <tr height=28>
        <td background=<%=baseUrl%>/static/img/title_bg1.jpg>当前位置：首页</td>
    </tr>
    <tr>
        <td bgcolor=#b1ceef height=1></td>
    </tr>
    <tr height=20>
        <td background=<%=baseUrl%>/static/img/shadow_bg.jpg></td>
    </tr>
</table>
<table cellspacing=0 cellpadding=0 width="90%" align=center border=0>
    <tr height=100>
        <td align=middle width=100><img height=100 src="<%=baseUrl%>/static/img/admin_p.gif"
                                        width=90></td>
        <td width=60>&nbsp;</td>
        <td>
            <table height=100 cellspacing=0 cellpadding=0 width="100%" border=0>

                <tr>
                    <td><h1 style="color:red"></h1></td>
                </tr>
                <tr>
                    <td style="font-weight: bold; font-size: 16px"></td>
                </tr>
                <tr>
                    <td>欢迎使用！</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td colspan=3 height=10></td>
    </tr>
</table>
<table cellspacing=0 cellpadding=0 width="95%" align=center border=0>
    <tr height=20>
        <td></td>
    </tr>
    <tr height=22>
        <td style="padding-left: 20px; font-weight: bold; color: #ffffff"
            align=middle background=<%=baseUrl%>/static/img/title_bg2.jpg>您的相关信息
        </td>
    </tr>
    <tr bgcolor=#ecf4fc height=12>
        <td></td>
    </tr>
    <tr height=20>
        <td></td>
    </tr>
</table>
<table cellspacing=0 cellpadding=2 width="95%" align=center border=0>
    <tr>
        <td align=right width=100>登录名：</td>
        <td style="color: #880000">${SessionUserInfo.ubLoginName}</td>
    </tr>
    <tr>
        <td align=right>真实姓名：</td>
        <td style="color: #880000">${SessionUserInfo.ubName}</td>
    </tr>
    <tr>
        <td align=right>注册时间：</td>
        <td style="color: #880000"><fmt:formatDate value="${SessionUserInfo.ubBeginTime}"
                                                   pattern="yyyy-MM-dd HH:mm:ss"/></td>
    </tr>
    <tr>
        <td align=right>上线时间：</td>
        <td style="color: #880000"><fmt:formatDate value="${SessionUserInfo.loginTime}"
                                                   pattern="yyyy-MM-dd HH:mm:ss"/></td>
    </tr>
</table>
<div style="text-align:center;">
</div>
</body>
</html>