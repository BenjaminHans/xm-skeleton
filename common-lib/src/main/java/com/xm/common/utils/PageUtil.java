package com.xm.common.utils;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.xm.common.vo.ExtraVo;

/**
 * 从请求参数中初始化分页
 * @author xiaomalover <xiaomalover@gmail.com>
 */
public class PageUtil<T> {

    public IPage<T> initIPage(ExtraVo extraVo) {

        IPage<T> iPage = new Page<>();
        int pageNumber = extraVo.getPageNumber();
        int pageSize = extraVo.getPageSize();

        if (pageNumber < 1) {
            pageNumber = 1;
        }
        if (pageSize < 1) {
            pageSize = 10;
        }
        iPage.setCurrent(pageNumber);
        iPage.setSize(pageSize);
        return iPage;
    }
}
