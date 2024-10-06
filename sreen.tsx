import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image
  } from 'react-native';
  
  const DATA = [
    {
      id: '1',
      title: 'Ca nấu lẩu,nấu mì mini...',
      shop:'Shop Devang',
      image:require('./assets/ca_nau_lau.png'),
    },
    {
      id: '2',
      title: '1 KG',
      image:require('./assets/ca_nau_lau.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      image:require('./assets/ca_nau_lau.png'),
    },
  ];
  
  
  
  const Item = ({item}) => (
    <View style={styles.item}>
      <View style={styles.row}>
        <Image source={item.image} style={{height:100,width:100}}/>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.shop}</Text>
        </View>
      </View>
    </View>
  );
  
  const App = () => {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={Item}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#fff',
      marginVertical: 8,
      marginHorizontal: 16,
    },
    row:{
      flexDirection:'row',
    }
  });
  
  export default App;