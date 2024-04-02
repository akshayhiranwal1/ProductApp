package com.SIS.ProductApp.controller;

import com.SIS.ProductApp.Services.ICategorySer;
import com.SIS.ProductApp.Services.IProductSer;
import com.SIS.ProductApp.model.Category;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
    private final ICategorySer _service;

    public CategoryController(ICategorySer service) {
        _service = service;
    }

    @GetMapping
    public ResponseEntity<List<Category>> getAll()
    {
        return new ResponseEntity<List<Category>>(_service.getAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Category> postCategory(@RequestBody Category model)
    {
        return new ResponseEntity<Category>(_service.addCategory(model), HttpStatus.CREATED);
    }
}
