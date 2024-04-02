package com.SIS.ProductApp.model;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="Product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private String Description;
    @Column(name = "CanExpired")
    private boolean CanExpired;

    @Nullable
    @Column(name = "ExpiryDate")
    private Date ExpiryDate;

    @Column(name = "FkCategoryId")
    private int FkCategoryId;
    private float Price;

    @Column(name = "IsSpecial")
    private boolean IsSpecial;

//    @OneToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name="fkcategoryid")
//    private Category Category;

    public Product() {
    }

    public Product(int id, String description, boolean canExpired, @Nullable Date expiryDate, int fkCategoryId, float price, boolean isSpecial, com.SIS.ProductApp.model.Category category) {
        Id = id;
        Description = description;
        CanExpired = canExpired;
        ExpiryDate = expiryDate;
        FkCategoryId = fkCategoryId;
        Price = price;
        IsSpecial = isSpecial;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public boolean isCanExpired() {
        return CanExpired;
    }

    public void setCanExpired(boolean canExpired) {
        CanExpired = canExpired;
    }

    @Nullable
    public Date getExpiryDate() {
        return ExpiryDate;
    }

    public void setExpiryDate(@Nullable Date expiryDate) {
        ExpiryDate = expiryDate;
    }

    public int getFkCategoryId() {
        return FkCategoryId;
    }

    public void setFkCategoryId(int fkCategoryId) {
        FkCategoryId = fkCategoryId;
    }

    public float getPrice() {
        return Price;
    }

    public void setPrice(float price) {
        Price = price;
    }

    public boolean isSpecial() {
        return IsSpecial;
    }

    public void setSpecial(boolean special) {
        IsSpecial = special;
    }
}
