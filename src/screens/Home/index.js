import styles from './styles';

import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem from '../../components/CarouselCardItem';
import {StyleProvider} from 'native-base';
import AppFooter from '../../components/Footer';
import AppHeader from '../../components/Header';
import getTheme from '../../../native-base-theme/components';
import green from '../../../native-base-theme/variables/variables';
const HomeScreen = () => {
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
      <View style={{height: '100%'}}>
        <AppHeader />
        <View
          style={{
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={{paddingTop: '2%', maxHeight: '40%'}}>
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
            <Text style={styles.name}>Mohsin Kamal</Text>
            <Text style={styles.availableBalance}>Available balance</Text>
            <Text style={styles.cash}>Rs.500</Text>
          </View>
          <TouchableOpacity style={styles.btnBig}>
            <Text style={styles.btnBigText}>Transaction History</Text>
            <Image
              style={styles.btnBigImage}
              source={require('../../assets/icons/transaction.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnBig}>
            <Text style={styles.btnBigText}>My Campaigns</Text>
            <Image
              style={styles.btnBigImage}
              source={require('../../assets/icons/campaign.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <AppFooter />
        </View>
      </View>
    </StyleProvider>
  );
};

export default HomeScreen;
