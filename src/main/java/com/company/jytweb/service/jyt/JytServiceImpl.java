package com.company.jytweb.service.jyt;

import com.company.jytweb.support.jyt.Resp;
import com.company.jytweb.support.jyt.card.CardApi;
import com.company.jytweb.support.jyt.card.CardData;
import com.company.jytweb.support.jyt.hospital.HospitalApi;
import com.company.jytweb.support.jyt.hospital.HospitalData;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("jytService")
public class JytServiceImpl implements JytService {

    @Override
    public List<Map<String, Object>> getCardLt() {
        Resp<CardData> resp = CardApi.getCardLt(null);
        return null;
    }

    @Override
    public List<Map<String, Object>> getHosLt() {
        Resp<HospitalData> resp = HospitalApi.getHospitalLt();
        return null;
    }
}
