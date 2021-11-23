import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ListItem from './ListItem';
import ErrorComponent from './ErrorComponent';
import fetchData from '../services/fetchData';
import Divider from './Divider';
import Loader from './Loader';
import OverlayImage from './OverlayImage';
import { COLORS, fonts, fontWeight, SIZES } from '../styles';
import { filterData } from '../services/parsingServices';

const UsersList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  let page = 1;

  useEffect(() => {
    setLoading(true);
    fetchData(page).then(result => {
      setData(filterData(result));
      setLoading(false);
    });
  }, [page]);

  const fetchMore = () => {
    page = page + 1;
    fetchData(page).then(result =>
      setData(prevData => [...prevData, ...filterData(result)]),
    );
  };

  const handleImageOverlay = item => {
    setImageUri(item?.avatar);
    setTimeout(() => {
      setImageUri(null);
    }, 1000);
  };

  if (loading) {
    return <Loader />;
  }

  if (!loading && !data) {
    return <ErrorComponent description="No data." />;
  }

  if (data) {
    return (
      <>
        {imageUri && <OverlayImage uri={imageUri} />}
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Gists</Text>
          </View>
          <FlatList
            data={data}
            onEndReached={fetchMore}
            onEndReachedThreshold={0.5}
            renderItem={({ item }) => (
              <TouchableOpacity
                disabled={imageUri}
                onPress={() => handleImageOverlay(item)}>
                <ListItem avatar={item?.avatar} fileName={item?.fileName} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => item.id + index}
            initialNumToRender={30}
            ItemSeparatorComponent={() => <Divider />}
          />
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: COLORS.backgroundSecondary,
  },
  title: {
    fontSize: SIZES.l,
    color: COLORS.textColor,
    fontFamily: fonts.secondary,
    fontWeight: fontWeight.bold,
    marginVertical: SIZES.s,
    marginHorizontal: SIZES.m,
  },
});

export default UsersList;
