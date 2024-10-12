import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    TouchableOpacity
  } from 'react-native';
  
  const DATA = [
    {
      id: '1',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      vote: require('./assets/Group 4.png'),
      image: require('./assets/dauchuyendoi 1.png'),
    },
    {
      id: '2',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      vote: require('./assets/Group 4.png'),
      image: require('./assets/daynguon 1.png'),
    },
    {
      id: '3',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      vote: require('./assets/Group 4.png'),
      image: require('./assets/dauchuyendoipsps2 1.png'),
    },
    {
      id: '4',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      vote: require('./assets/Group 4.png'),
      image: require('./assets/dauchuyendoi 1.png'),
    },
    {
      id: '5',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      vote: require('./assets/Group 4.png'),
      image: require('./assets/carbusbtops2 1.png'),
    },
    {
      id: '6',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      vote: require('./assets/Group 4.png'),
      image: require('./assets/daucam 1.png'),
    },
  ];
  
  
  
  const Item = ({item}) => (
    <View style={styles.item}>
      <View>
        <Image source={item.image} style={{height:90,width:155}}/>
        <View style={{marginLeft:10}}>
          <Text style={styles.title}>{item.title}</Text>
          <Image source={item.vote} />
          <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:700}}>69.900 đ</Text>
            <Text style={{marginLeft:10,color:'#969DAA'}}>-39%</Text>
          </View>
        </View>
        
      </View>
      
      
    </View>
  );
  
  const App = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection:'row',backgroundColor:'#1BA9FF',justifyContent:'space-between'}}>
          <Image source={require('./assets/ant-design_arrow-left-outlined 1.png')} style={{width:30,padding:20}}/>
          <Text style={{fontSize:15,color:'#fff',alignContent:'center'}}>Chat</Text>
          <Image source={require('./assets/bi_cart-check.png')} style={{width:30,padding:20,marginRight:30}}/>
        </View>
        <FlatList
          data={DATA}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />
        <Image source={require('./assets/Group 11.png')}/>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      width:360,
    },
    item: {
      backgroundColor: '#fff',
      padding: 5,
      marginVertical: 2,
      width:180
      // marginHorizontal: 16,
    },
    title: {
      fontSize: 14,
      width:130
    },
    shop:{
      fontSize: 12,
      fontFamily:'Roboto',
      marginTop:10,
    },
    row:{
      flexDirection:'row'
    },
  
  });
  
  export default App;