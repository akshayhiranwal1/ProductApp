package com.SIS.ProductApp.controller;

import com.SIS.ProductApp.Services.IProductSer;
import com.SIS.ProductApp.model.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    private final IProductSer _service;
    public ProductController(IProductSer service) {
        _service = service;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAll()
    {
        return new ResponseEntity<List<Product>>(_service.getAll(), HttpStatus.OK);
    }

    @GetMapping("{categoryId}")
    public ResponseEntity<List<Product>> getAllByCategory(@PathVariable int categoryId)
    {
        return new ResponseEntity<List<Product>>(_service.getAllByCategory(categoryId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Product> postProduct(@RequestBody Product model)
    {
        return new ResponseEntity<Product>(_service.addProduct(model), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Product> putProduct(@RequestBody Product model)
    {
        return new ResponseEntity<Product>(_service.updateProduct(model), HttpStatus.OK);
    }

    @DeleteMapping
    public void deleteProduct(@RequestBody Product model)
    {
        _service.deleteProduct(model);
    }
}
