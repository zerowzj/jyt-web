package com.company.jytweb.service.jyt;

import com.company.jytweb.support.jyt.Resp;
import com.company.jytweb.support.jyt.card.Card;
import com.company.jytweb.support.jyt.card.CardApi;
import com.company.jytweb.support.jyt.card.CardData;
import com.company.jytweb.support.jyt.department.Department;
import com.company.jytweb.support.jyt.department.DepartmentApi;
import com.company.jytweb.support.jyt.department.DepartmentData;
import com.company.jytweb.support.jyt.hospital.Hospital;
import com.company.jytweb.support.jyt.hospital.HospitalApi;
import com.company.jytweb.support.jyt.hospital.HospitalData;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("jytService")
public class JytServiceImpl implements JytService {

    @Override
    public List<Card> getCardLt() {
        Resp<CardData> resp = CardApi.getCardLt(null);
        return resp.getData().getCardDetailList();
    }

    @Override
    public List<Hospital> getHosLt() {
        Resp<HospitalData> resp = HospitalApi.getHospitalLt();
        return resp.getData().getHospitals();
    }

    @Override
    public List<Department> getDeptLt(String hosCode) {
        Resp<DepartmentData> resp = DepartmentApi.getDeptLt(hosCode);
        return resp.getData().getDepartments();
    }
}
