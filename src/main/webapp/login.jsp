<%--
  Created by IntelliJ IDEA.
  User: administrator
  Date: 2018/1/31
  Time: 17:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script src="/static/js/login.js" type="text/javascript"></script>
</head>
<body>
<form action="/login" method="post">
    用户名：<input type="text" name="loginName">
    密码：<input type="text" name="loginPwd">
    <input type="submit" value="登录" />
</form>
</body>
</html>
