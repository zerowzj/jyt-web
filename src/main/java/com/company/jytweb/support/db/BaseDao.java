package com.company.jytweb.support.db;

/**
 * 基础Dao
 *
 * @author wangzhj
 */
public interface BaseDao<PK, E extends BaseEO> {

    /**
     * 新增实体
     *
     * @param entity
     * @return int
     */
    int insert(E entity);

    /**
     * 更新实体
     *
     * @param entity
     * @return int
     */
    int update(E entity);

    /**
     * 删除实体
     *
     * @param pk
     * @return int
     */
    int delete(PK pk);

    /**
     * 获取实体
     *
     * @param pk
     * @return E
     */
    E get(PK pk);
}
