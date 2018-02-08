package com.company.jytweb.web.controller;

import com.company.jytweb.support.JytCookieCache;
import com.company.jytweb.support.JytCookieCacheX;
import com.company.jytweb.support.jyt.JytCookie;
import com.company.jytweb.support.jyt.Resp;
import com.company.jytweb.support.jyt.department.Department;
import com.company.jytweb.support.jyt.department.DepartmentApi;
import com.company.jytweb.support.jyt.department.DepartmentData;
import com.company.jytweb.support.jyt.hospital.Hospital;
import com.company.jytweb.support.jyt.hospital.HospitalApi;
import com.company.jytweb.support.jyt.hospital.HospitalData;
import com.google.common.collect.Maps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/jyt")
public class JytController {

    private static final Logger LOGGER = LoggerFactory.getLogger(JytController.class);

    /**
     * 医院列表
     */
    @RequestMapping("/get_hos")
    public ModelAndView getHos(HttpServletRequest request, HttpServletResponse response) {
        //医院列表
        Resp<HospitalData> resp = HospitalApi.getHospitalLt();
        List<Hospital> hosLt = resp.getData().getHospitals();
        //
        Map<String, Object> data = Maps.newHashMap();
        data.put("hosLt", hosLt);
        return new ModelAndView("/register/hosList", data);
    }

    /**
     * 科室列表
     */
    @RequestMapping("/get_dept")
    public ModelAndView getDept(HttpServletRequest request, HttpServletResponse response,
                                String hosCode) {
        //科室列表
        Resp<DepartmentData> resp = DepartmentApi.getDeptLt(hosCode);
        List<Department> deptLt = resp.getData().getDepartments();
        //
        Map<String, Object> data = Maps.newHashMap();
        data.put("deptLt", deptLt);
        return new ModelAndView("/register/deptList", data);
    }

    /**
     * 号源日期
     */
    @RequestMapping("/get_date")
    public Map<String, String> getDate(HttpServletRequest request, HttpServletResponse response,
                                       String hosCode, String firstDeptCode, String secondDeptCode) {
        return null;
    }
}
