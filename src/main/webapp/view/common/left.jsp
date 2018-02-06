<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" buffer="128kb" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv=content-type content="text/html; charset=utf-8"/>
    <link href="../../static/css/admin.css" type="text/css" rel="stylesheet"/>
    <script language=javascript>
        function expand(el) {
            childobj = document.getElementById("child" + el);
            if (childobj.style.display == 'none') {
                childobj.style.display = 'block';
            }
            else {
                childobj.style.display = 'none';
            }
            return;
        }
    </script>
</head>
<body>
<table height="100%" cellspacing=0 cellpadding=0 width=170 background=../../static/img/menu_bg.jpg border=0>
    <tr>
        <td valign=top align=middle>
            <table cellspacing=0 cellpadding=0 width="100%" border=0>
                <tr>
                    <td height=10></td>
                </tr>
            </table>


            <table cellspacing=0 cellpadding=0 width=150 border=0>
                <tr height=22>
                    <td style="padding-left: 30px" background=../../static/img/menu_bt.jpg>
                        <a class=menuparent onclick=expand(1) href="javascript:void(0);">权限管理</a>
                    </td>
                </tr>
                <tr height=4>
                    <td></td>
                </tr>
            </table>
            <table id=child1 cellspacing=0 cellpadding=0 width=150 border=0>
                <tr height=20>
                    <td align=middle width=30>
                        <img height=9 src="../../static/img/menu_icon.gif" width=9></td>
                    <td>
                        <a class=menuchild href="/register/toReg" target=right>挂号</a>
                    </td>
                </tr>
                <tr height=20>
                    <td align=middle width=30>
                        <img height=9 src="../../static/img/menu_icon.gif" width=9></td>
                    <td>
                        <a class=menuchild href="/register/list" target=right>挂号列表</a>
                    </td>
                </tr>
                <tr height=4>
                    <td colspan=2></td>
                </tr>
            </table>


            <table cellspacing=0 cellpadding=0 width=150 border=0>
                <tr height=22>
                    <td style="padding-left: 30px" background=../../static/img/menu_bt.jpg>
                        <a class=menuparent onclick=expand(0) href="javascript:void(0);">个人管理</a>
                    </td>
                </tr>
                <tr height=4>
                    <td></td>
                </tr>
            </table>
            <table id=child0 cellspacing=0 cellpadding=0
                   width=150 border=0>
                <tr height=20>
                    <td align=middle width=30>
                        <img height=9 src="../../static/img/menu_icon.gif" width=9>
                    </td>
                    <td>
                        <a class=menuchild href="/user/to_bind" target=right>绑定京医通</a>
                    </td>
                </tr>
                <tr height=4>
                    <td colspan=2></td>
                </tr>
                <tr height=20>
                    <td align=middle width=30>
                        <img height=9 src="../../static/img/menu_icon.gif" width=9>
                    </td>
                    <td>
                        <a class=menuchild href="/system/toPwdModify" target=right>修改密码</a>
                    </td>
                </tr>
                <tr height=20>
                    <td align=middle width=30>
                        <img height=9 src="../../static/img/menu_icon.gif" width=9>
                    </td>
                    <td>
                        <a class=menuchild onclick="if (confirm('确定要退出吗？')) return true; else return false;"
                           href="/logout" target=_top>退出系统</a>
                    </td>
                </tr>
            </table>
        </td>
        <td width=1 bgcolor=#d1e6f7></td>
    </tr>
</table>
</body>
</html>