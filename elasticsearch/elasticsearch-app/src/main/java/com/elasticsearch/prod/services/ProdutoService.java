package com.elasticsearch.prod.services;

import com.elasticsearch.prod.models.Produto;
import com.elasticsearch.prod.repositories.ProdutoRepository;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.data.elasticsearch.core.query.StringQuery;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private ElasticsearchOperations elasticsearchOperations;

    public Produto save(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto update(Produto produto) {
        return produtoRepository.save(produto);
    }

    public void delete(Long id) {
        produtoRepository.deleteById(id);
    }

    public Iterable<Produto> findAll() {
        return produtoRepository.findAll();
    }

    public List<Produto> searchByFilters(String nome, String categoria, BigDecimal precoMin, BigDecimal precoMax) {
        BoolQueryBuilder queryBuilder = QueryBuilders.boolQuery();
        
        if (nome != null && !nome.isEmpty()) {
            queryBuilder.must(QueryBuilders.matchQuery("nome", nome));
        }
    
        if (categoria != null && !categoria.isEmpty()) {
            queryBuilder.must(QueryBuilders.matchQuery("categoria", categoria));
        }
    
        if (precoMin != null || precoMax != null) {
            queryBuilder.must(QueryBuilders.rangeQuery("preco")
                    .gte(precoMin != null ? precoMin : 0)
                    .lte(precoMax != null ? precoMax : Double.MAX_VALUE));
        }
    
        // Executar a query
        Query searchQuery = new StringQuery(queryBuilder.toString());
        
        SearchHits<Produto> searchHits = elasticsearchOperations.search(searchQuery, Produto.class);
    
        return searchHits.stream()
                .map(hit -> hit.getContent())
                .collect(Collectors.toList());
    }
    
    
}
