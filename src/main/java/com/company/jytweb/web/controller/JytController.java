package com.company.jytweb.web.controller;

import com.company.jytweb.support.jyt.Resp;
import com.company.jytweb.support.jyt.department.DepartmentApi;
import com.company.jytweb.support.jyt.department.DepartmentData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
@RequestMapping("/jyt")
public class JytController {

    @RequestMapping("/get_dept")
    public Map<String, String> getDept(String hosCode) {
        Resp<DepartmentData> resp = DepartmentApi.getDeptLt(null);

        return null;
    }

    @RequestMapping("/get_date")
    public Map<String, String> getDate(String hosCode, String firstDeptCode, String secondDeptCode) {
        return null;
    }
}
