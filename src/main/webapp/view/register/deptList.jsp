<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>修改密码</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <link href="/static/css/mine.css" type="text/css" rel="stylesheet">
    <link href="/static/validform/css/style.css" type="text/css" rel="stylesheet">
</head>
<body>
<div></div>
<div style="font-size: 13px;margin: 10px 5px">
    <form id="_form" action="#">
        <table border="1" width="100%" class="table_a">
            <tr>
                <td style="width:15%"><span class="need">*</span>就诊人</td>
                <td><input type="text" name="jytLoginName" value="${jytLoginName}"></td>
            </tr>
            <tr>
                <td><span class="need">*</span>一级科室</td>
                <td><input type="password" name="jytLoginPwd" value="${jytLoginPwd}"></td>
            </tr>
            <tr>
                <td><span class="need">*</span>二级科室</td>
                <td><input type="password" name="jytLoginPwd" value="${jytLoginPwd}"></td>
            </tr>
            <tr>
                <td><span class="need">*</span>科室</td>
                <td><input type="password" name="jytLoginPwd" value="${jytLoginPwd}"></td>
            </tr>
            <tr>
                <td><span class="need">*</span>科室</td>
                <td><input type="password" name="jytLoginPwd" value="${jytLoginPwd}"></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="submit" value="绑定">
                </td>
            </tr>
        </table>
    </form>
    <script type="text/javascript" src="/static/jquery.min.js"></script>
    <script type="text/javascript" src="/static/jqueryform/jquery.form.min.js"></script>
    <script type="text/javascript" src="/static/validform/Validform_v5.3.2_min.js"></script>
    <script type="text/javascript" src="/static/layer/layer.js"></script>
    <script type="text/javascript">
        $("#_form").Validform({
            tiptype: 3,
            tipSweep: false
        });
        $('#_form').ajaxForm({
            url: '/user/bind_jyt',
            type: 'post',
            clearForm: false,
            // beforeSubmit: function (formData, jqForm, options) {
            //     return true;
            // },
            success: function (responseText, statusText, xhr, $form) {
                layer.msg('绑定成功', {icon: 1, offset: '100px'});
            },
            error: function (xhr, statusText, error) {
                var status = xhr.status;
                layer.alert('系统异常[' + status + ']', {icon: 5, offset: '100px'});
            }
        });
    </script>
</div>
</body>
</html>