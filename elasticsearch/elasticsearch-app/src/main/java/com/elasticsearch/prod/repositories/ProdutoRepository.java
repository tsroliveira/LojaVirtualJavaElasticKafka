package com.elasticsearch.prod.repositories;

import com.elasticsearch.prod.models.Produto;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface ProdutoRepository extends ElasticsearchRepository<Produto, Long> {

    // Busca produtos por parte do nome
    List<Produto> findByNomeContaining(String nome);

    // Busca produtos por parte da categoria
    List<Produto> findByCategoriaContaining(String categoria);

    // Busca por nome, categoria, faixa de preço e quantidade mínima
    List<Produto> findByNomeContainingAndCategoriaContainingAndPrecoBetweenAndQuantidadeGreaterThan(
        String nome, 
        String categoria, 
        BigDecimal minPrice, 
        BigDecimal maxPrice, 
        int quantidade
    );
}
