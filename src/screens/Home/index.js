import styles from './styles';
import global_variables from '../../../global_variables';
import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem from '../../components/CarouselCardItem';
import {StyleProvider} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import green from '../../../native-base-theme/variables/variables';
import LinearGradient from 'react-native-linear-gradient';
import MenuButton from '../../components/MenuButton';

const HomeScreen = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const isCarousel = React.useRef(null);
  const images = [
    {
      imgUrl:
        'https://thumbs.dreamstime.com/b/vlog-video-content-creation-social-networks-vector-illustration-lifestyle-bloggers-influencers-trendy-flat-cartoon-170210970.jpg',
    },
    {
      imgUrl:
        'https://blog.adobe.com/hlx_a2ede45ea97211937ad1c19cc555bb30f3b3ceee.jpg?auto=webp&format=pjpg&optimize=medium&width=1200',
    },
    {
      imgUrl:
        'https://unblast.com/wp-content/uploads/2020/03/Marketing-Campaign-Vector-Illustration-1.jpg',
    },
  ];

  return (
    <StyleProvider style={getTheme(green)}>
      <View style={styles.container}>
        {/* <AppHeader /> */}

        <View
          style={{
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={styles.carousel}>
            <Carousel
              layout="default"
              layoutCardOffset={9}
              ref={isCarousel}
              data={images}
              renderItem={CarouselCardItem}
              sliderWidth={1000}
              itemWidth={300}
              onSnapToItem={index => setIndex(index)}
              useScrollView={true}
              autoplay={true}
              loop={true}
            />
            <Pagination
              dotsLength={images.length}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={styles.paginationDot}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              tappableDots={true}
              containerStyle={{paddingVertical: 2}}
            />
          </View>
          <View style={styles.userInfo}>
            <View style={styles.profilepicContainer}>
              <Image
                source={require('../../assets/img/dp.jpeg')}
                style={styles.profilepic}
              />
            </View>
            <Text style={styles.name}>Mohsin Kamal</Text>
            <Text style={styles.availableBalance}>Available balance</Text>
            <Text style={styles.cash}>Rs.500</Text>
            <TouchableOpacity>
              <Text style={styles.transactionHistory}>Transaction History</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.btnBig}
            onPress={() => navigation.navigate('Grocers')}>
            <LinearGradient
              colors={[
                global_variables.greenGradient.color1,
                global_variables.greenGradient.color2,
              ]}
              style={{
                borderRadius: 20,
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={styles.btnBigText}>Spend Cash</Text>
              <Image
                style={styles.btnBigImage}
                source={require('../../assets/icons/cart.png')}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </StyleProvider>
  );
};

HomeScreen.navigationOptions = navdata => {
  return {
    // headerLeft: <MenuButton onPress={() => navigation.toggleDrawer()} />,
    headerLeft: (
      <TouchableOpacity
        onPress={() => {
          navdata.navigation.toggleDrawer();
        }}>
        <MenuButton />
      </TouchableOpacity>
    ),
  };
};

export default HomeScreen;
