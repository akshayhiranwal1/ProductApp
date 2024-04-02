package com.SIS.ProductApp.Services;

import com.SIS.ProductApp.Repository.CategoryRepo;
import com.SIS.ProductApp.model.Category;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoryService implements ICategorySer {
    private final CategoryRepo _repo;
    public CategoryService(CategoryRepo repo) {
        _repo = repo;
    }

    @Override
    public List<Category> getAll() {
        return _repo.findAll();
    }

    @Override
    public Category addCategory(Category model) {
        return _repo.save(model);
    }
}
