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
    title: 'Ca nấu lẩu,nấu mì mini...',
    shop:'Devang',
    image: require('./assets/ca_nau_lau.png'),
  },
  {
    id: '2',
    title: '1 KG KHÔ GÀ BƠ TỎI ...',
    shop:'LTD Food',
    image: require('./assets/ga_bo_toi.png'),
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    shop:'Thế giới đồ chơi',
    image: require('./assets/xa_can_cau.png'),
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    shop:'Thế giới đồ chơi',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    shop:'Minh Long Book',
    image: require('./assets/lanh_dao_gian_don.png'),
  },
  {
    id: '6',
    title: 'Hiểu lòng con trẻ',
    shop:'Minh Long Book',
    image: require('./assets/hieu_long_con_tre.png'),
  },
];



const Item = ({item}) => (
  <View style={styles.item}>
    <View style={styles.row}>
      <Image source={item.image} style={{height:70,width:70}}/>
      <View style={{marginLeft:10}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.shop}>Shop: {item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.btn_form}>
        <Text style={styles.btn_text}>Chat</Text>
      </TouchableOpacity>
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
    width:360
  },
  item: {
    backgroundColor: '#ccc',
    padding: 5,
    marginVertical: 2,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
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
  btn_form:{
    backgroundColor:'#F31111',
    width:88,
    height:38,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:25,
    marginTop:17
  },
  btn_text:{
    color:'#fff',
    fontFamily:'Roboto',
    fontWeight:400
  }
});

export default App;