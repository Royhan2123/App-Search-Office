/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Gs} from '../../../assets/style/GlobalStyle';
import {colors} from '../../../assets/style/Colors';
import InputText from '../../components';
import NewsworthyItem from '../../components/NewSworty/index';
import BottomNav from '../../Bottom_Nav';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  const newswortyData = [
    {
      title: 'Hajime',
      addres: 'Pantai Utara No. 90',
      price: '$421/day',
      image: require('../../../assets/images/item_2_a.png'),
    },
    {
      title: 'DeppWork',
      addres: 'Pantai Selatan No. 1',
      price: '$500/day',
      image: require('../../../assets/images/item_3_a.png'),
    },
  ];
  const renderHeader = () => {
    return (
      <View style={style.headerContainer}>
        <View style={Gs.flexRow}>
          <View>
            <Image
              source={require('../../../assets/images/profile_1.png')}
              style={style.profileContainer}
            />
          </View>
          <View>
            <Text style={Gs.textBlack}> Hi, Shayna</Text>
            <Text style={[Gs.font700, Gs.textBlack]}>@shaynawork</Text>
          </View>
        </View>
        <View style={Gs.flexRow}>
          <Image
            source={require('../../../assets/icons/gift.png')}
            style={style.iconContainer}
          />
          <Image
            source={require('../../../assets/icons/notification.png')}
            style={style.iconContainer}
          />
        </View>
      </View>
    );
  };

  const renderPopularSection = () => {
    return (
      <View style={style.sectionContainer}>
        <Text style={[style.sectionTitle, Gs.h1]}>Popular</Text>
        <View style={Gs.flexRow}>
          <Image
            source={require('../../../assets/images/item_1_a.png')}
            style={style.popularMainpage}
          />
          <View>
            <Image
              source={require('../../../assets/images/item_1_b.png')}
              style={style.popularImage}
            />
            <Image
              source={require('../../../assets/images/item_1_c.png')}
              style={style.popularImage}
            />
          </View>
        </View>
        <View style={style.popularContent}>
          <View>
            <Text style={[Gs.h2, Gs.textBlack]}>IndoorWork</Text>
            <Text style={Gs.textGrey}>Jalan Angga Bekerja No. 10</Text>
          </View>
          <View style={style.popularPriceContainer}>
            <Text style={style.popularPriceLabel}>$599/day</Text>
          </View>
        </View>
      </View>
    );
  };
  const renderSearch = () => {
    return (
      <View
        style={{
          paddingHorizontal: 24,
          paddingBottom: 20,
        }}>
        <InputText
          icon={require('../../../assets/icons/location.png')}
          placeholder="Find work spaces in Jakarta"
        />
      </View>
    );
  };

  const renderNewsworthy = () => {
    return (
      <View>
        <Text
          style={{
            paddingHorizontal: 24,
            paddingBottom: 15,
            color: 'black',
            fontSize: 16,
            fontWeight: '800',
          }}>
          NewSworty
        </Text>
        <FlatList
          horizontal={true}
          data={newswortyData}
          renderItem={({item}) => (
            <NewsworthyItem
              title={item.title}
              addres={item.addres}
              price={item.price}
              image={item.image}
              onPress={() => {
                navigation.navigate('Detail');
              }}
            />
          )}
          keyExtractor={item => item.title}
          contentContainerStyle={{paddingHorizontal: 24}}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  return (
    <View style={style.container}>
      <View style={style.contentContainer}>
        <View>
          {renderHeader()}
          {renderSearch()}
        </View>
        <ScrollView>
          {renderPopularSection()}
          {renderNewsworthy()}
        </ScrollView>
      </View>
      <BottomNav/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    padding: 24,
    ...Gs.justifyBetween,
  },
  profileContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  iconContainer: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  popularMainpage: {
    ...Gs.cornerXL,
    flex: 1,
    height: 200,
    marginRight: 10,
  },
  popularImage: {
    ...Gs.cornerMD,
    width: 130,
    height: 95,
    marginBottom: 10,
  },
  sectionTitle: {
    ...Gs.textBlack,
    marginBottom: 20,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  popularContent: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    marginTop: 10,
  },
  popularPriceContainer: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.secondary,
    ...Gs.cornerXS,
  },
  popularPriceLabel: {
    ...Gs.font600,
    ...Gs.textPrimary,
  },
});

export default Home;
