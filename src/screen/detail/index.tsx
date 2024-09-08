import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {colors} from '../../../assets/style/Colors';
import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';

const DetailScreen = () => {
  const slider = [
    require('../../../assets/images/item_2_a.png'),
    require('../../../assets/images/item_2_b.png'),
    require('../../../assets/images/item_2_c.png'),
  ];

  const renderSLider = () => {
    return (
      <FlatList
        data={slider}
        keyExtractor={({index}) => index}
        horizontal
        renderItem={({item}) => <SliderItem image={item} />}
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  return (
    <View style={style.container}>
      <Header
        title="Office Details"
        subtitle="Space available for today"
        showRightButton
      />
      <ScrollView>
        {renderSLider()}
        {/* // {renderTitler()}
        // {renderDescription()}
        // {renderOwner()}} */}
      </ScrollView>
      {/* {renderBookingButton()} */}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default DetailScreen;
