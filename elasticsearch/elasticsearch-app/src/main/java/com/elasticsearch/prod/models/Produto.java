package com.elasticsearch.prod.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.math.BigDecimal;

@Document(indexName = "produtos")
public class Produto {

    @Id
    private Long id;
    private String marca;
    private String nome;
    private String categoria;
    private String modelo;
    private Integer ano;
    private BigDecimal preco;
    private Integer quilometragem;
    private Integer quantidade;
    private String imagem;

    // Construtores
    public Produto() {}

    public Produto(Long id, String marca, String nome, String categoria, String modelo, Integer ano, BigDecimal preco, Integer quilometragem, Integer quantidade, String imagem) {
        this.id = id;
        this.marca = marca;
        this.nome = nome;
        this.categoria = categoria;
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
        this.quilometragem = quilometragem;
        this.quantidade = quantidade;
        this.imagem = imagem;
    }

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public Integer getAno() {
        return ano;
    }

    public void setAno(Integer ano) {
        this.ano = ano;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

    public Integer getQuilometragem() {
        return quilometragem;
    }

    public void setQuilometragem(Integer quilometragem) {
        this.quilometragem = quilometragem;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }
}
