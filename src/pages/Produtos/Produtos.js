import React, { useState } from 'react';
import styles from './Produtos.module.css';

const Produtos = () => {
  const [formVisible, setFormVisible] = useState(true);
  const [produto, setProduto] = useState({ nome: '', tipo: '', marca: '', preco: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Novo produto:', produto);
    setProduto({ nome: '', tipo: '', marca: '', preco: '' });
    setFormVisible(false);
  };

  return (
    <div className={styles['menu-container']}> 
      <ul className={styles['product-list']}>
      </ul>

      {formVisible && (
        <form onSubmit={handleSubmit} className={styles['add-product-form']}>
          <h2>Adicionar Novo Produto</h2>
          
          <input
            type="text"
            name="nome"
            placeholder="Nome do Produto"
            value={produto.nome}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="tipo"
            placeholder="Tipo"
            value={produto.tipo}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="marca"
            placeholder="Marca"
            value={produto.marca}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="preco"
            placeholder="Preço"
            value={produto.preco}
            onChange={handleInputChange}
          />
          <button type="submit">Adicionar</button>
        </form>
      )}
    </div>
  );
};

export default Produtos;
