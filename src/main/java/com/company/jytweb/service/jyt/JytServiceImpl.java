package com.company.jytweb.service.jyt;

import com.company.jytweb.support.jyt.Resp;
import com.company.jytweb.support.jyt.card.Card;
import com.company.jytweb.support.jyt.card.CardApi;
import com.company.jytweb.support.jyt.card.CardData;
import com.company.jytweb.support.jyt.hospital.Hospital;
import com.company.jytweb.support.jyt.hospital.HospitalApi;
import com.company.jytweb.support.jyt.hospital.HospitalData;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

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
}
