package com.SIS.ProductApp.Services;

import com.SIS.ProductApp.model.Category;

import java.util.List;

public interface ICategorySer {
    public List<Category> getAll();
    public Category addCategory(Category model);
}
