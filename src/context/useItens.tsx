import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Item} from '../models/Item';
import {format} from 'currency-formatter';
interface ContextItens {
  savedItems: Array<Item>;
  cart: Array<Item>;
  listItem: Array<Item>;
  saveItem: (item: Item) => void;
  removeItem: (id: number) => void;
  addToCart: (product: Item) => void;
  remoteFromCart: (id: number) => void;
  getStoredList: () => void;
  storeList: (itens: Array<Item>) => void;
}

const ItensContext = createContext({} as ContextItens);

export const ItensProvider: React.FC = ({children}) => {
  const [cart, setCart] = useState<Array<Item>>([]);
  const [savedItems, setSavedItems] = useState<Array<Item>>([]);
  const [items, setItems] = useState<Array<Item>>([]);
  const [listItem, setListItem] = useState<Array<Item>>([]);

  function storeList(itensToSave: Item[]) {
    AsyncStorage.setItem('storedList', JSON.stringify(itensToSave));
  }

  async function getStoredList() {
    const itensSalvos = await AsyncStorage.getItem('storedList');
    if (itensSalvos != null) {
      setSavedItems(JSON.parse(itensSalvos));
      setListItem(JSON.parse(itensSalvos));
    }
  }

  useEffect(() => {
    getStoredList();
    getStoredCart();
  }, []);

  function addToCart(product: Item) {
    let selectedItem = savedItems.find((item) => item.id === product.id);
    product.preco = format(Number(product.preco), {
      symbol: '',
      decimal: '.',
      thousand: '.',
      precision: 2,
      format: '%s',
    });
    let cartItems = [...cart, {...selectedItem, ...product}];
    storeCart(cartItems);
    setCart(cartItems);
  }

  function remoteFromCart(id: Number) {
    let itemsNotDeleteds = cart.filter((item) => item.id !== id);
    storeCart(itemsNotDeleteds);
    setCart(itemsNotDeleteds);
  }

  function storeCart(itensToSave: Item[]) {
    AsyncStorage.setItem('storedCart', JSON.stringify(itensToSave));
  }

  async function getStoredCart() {
    const itensSalvos = await AsyncStorage.getItem('storedCart');
    if (itensSalvos != null) {
      setCart(JSON.parse(itensSalvos));
    }
  }

  function handleSetItens(itens: Array<Item>) {
    setSavedItems(itens);
    setItems(itens);
    setListItem(itens);
    storeList(itens);
  }

  function saveItem(dados: Item) {
    let itens = [...items];
    dados.id = Math.ceil(Math.random() * 100000);
    itens.push(dados);
    handleSetItens(itens);
  }

  function removeItem(id: number) {
    let itens = [...items];
    itens = itens.filter((item) => item.id != id);
    handleSetItens(itens);
  }

  return (
    <ItensContext.Provider
      value={{
        getStoredList,
        storeList,
        addToCart,
        savedItems,
        listItem,
        remoteFromCart,
        cart,
        saveItem,
        removeItem,
      }}>
      {children}
    </ItensContext.Provider>
  );
};

export default function useItens() {
  const context = useContext(ItensContext);
  return context;
}
