package com.company.jytweb.dao.userjytinfo;

import com.company.jytweb.support.db.BaseDao;

/**
 * 用户京医通信息Dao
 *
 * @author wangzhj
 */
public interface UserJytInfoDao extends BaseDao<Long, UserJytInfoEO> {

    /**
     * 获取用户京医通信息
     *
     * @param ubId
     * @return UserJytInfoEO
     */
    UserJytInfoEO getByUbId(Long ubId);
}
