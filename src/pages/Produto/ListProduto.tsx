import React, { useEffect, useState } from "react";

import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  FlatListProps,
} from "react-native";
import { ceil } from "react-native-reanimated";

import api from "../../api/api";

interface ListProps {
  id: number;
  nome: string;
  categoria: string;
  dataValidade: Date;
  qtdCaixa: number;
  produtor?: any;
}

export function ListProduto() {
  const [lista, setLista] = useState<ListProps[]>([]);

  useEffect(() => {
    async function load() {
      const response = await api.get<ListProps[]>("/produto");
      //console.log(response.data);
      if (response.data !== null) {
        setLista(response.data);
      }
    }
    load();
  }, []);

  const renderItem = (produto: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{produto.item.nome}</Text>
        <Text>{produto.item.categoria}</Text>
        <Text>{produto.item.dataValidade}</Text>
        <Text>{produto.item.qtdCaixa.toString()}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList data={lista} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
