import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import ListItem from './ListItem';
import ErrorComponent from './ErrorComponent';
import fetchData from '../services/fetchData';
import Divider from './Divider';
import getFileName from '../services/parsingServices';
import Loader from './Loader';
import OverlayImage from './OverlayImage';

const UsersList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [showImage, setShowImage] = useState(false);
  let page = 1;

  useEffect(() => {
    setLoading(true);
    fetchData(page).then(result => {
      setData(result.data);
      setLoading(false);
    });
  }, [page]);

  const fetchMore = () => {
    page = page + 1;
    fetchData(page).then(result =>
      setData(prevData => [...prevData, ...result.data]),
    );
  };

  const handleImageOverlay = item => {
    setImageUri(item?.owner.avatar_url);
    setShowImage(true);
    setTimeout(() => {
      setShowImage(false);
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
        {showImage && <OverlayImage uri={imageUri} />}
        <View>
          <View style={{backgroundColor: '#c1c1c1'}}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
              Gists
            </Text>
          </View>
          <FlatList
            data={data}
            onEndReached={fetchMore}
            onEndReachedThreshold={0.5}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleImageOverlay(item)}>
                <ListItem
                  avatar={item?.owner.avatar_url}
                  fileName={getFileName(item?.files)}
                />
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

export default UsersList;
