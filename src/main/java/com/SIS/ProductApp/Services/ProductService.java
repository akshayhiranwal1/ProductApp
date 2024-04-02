package com.SIS.ProductApp.Services;

import com.SIS.ProductApp.Repository.CategoryRepo;
import com.SIS.ProductApp.Repository.ProductRepo;
import com.SIS.ProductApp.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService implements IProductSer {
    private final ProductRepo _repo;
    public ProductService(ProductRepo repo) {
        _repo = repo;
    }

    @Override
    public List<Product> getAll() {
        return _repo.findAll();
    }

    @Override
    public List<Product> getAllByCategory(int categoryId) {
        return _repo.findAll().stream()
                .filter(i-> i.getFkCategoryId() == categoryId)
                .collect(Collectors.toList());
    }

    @Override
    public Product addProduct(Product model) {
        return _repo.save(model);
    }

    @Override
    public Product updateProduct(Product model) {
        return _repo.save(model);
    }

    @Override
    public void deleteProduct(Product model) {
        _repo.delete(model);
    }
}
