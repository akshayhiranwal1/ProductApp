package com.SIS.ProductApp.Services;

import com.SIS.ProductApp.model.Product;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface IProductSer {
    public List<Product> getAll();
    public List<Product> getAllByCategory(int categoryId);
    public Product addProduct(Product model);
    public Product updateProduct(Product model);
    public void deleteProduct(int id);
}
