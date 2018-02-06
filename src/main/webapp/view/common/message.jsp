<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>修改商品</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <link href="../../static/css/mine.css" type="text/css" rel="stylesheet">
</head>

<body>

<div class="div_head">
            <span>
                <span style="float:left">当前位置是：消息提示</span>

            </span>
</div>
<div></div>

<div style="font-size: 13px;margin: 10px 5px">
        <table border="1" width="100%" class="table_a">
            <tr>
                <td align="center"><font color="red"><c:out value="${message}" /></font></td>
            </tr>
        </table>
</div>
</body>
</html>