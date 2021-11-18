import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from './ListItem';
import ErrorComponent from './ErrorComponent';
import fetchData from '../services/fetchData';

const UsersList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setLoading(true);
    fetchData(page).then(result => {
      setData(result.data);
      setLoading(false);
    });
  }, []);

  const fetchMore = () => {
    setPage(prevPage => prevPage + 1);
    fetchData(page).then(result =>
      setData(prevData => [...prevData, ...result.data]),
    );
  };

  if (loading) {
    return <Text>Loading</Text>;
  }

  if (!loading && !data) {
    return <ErrorComponent description="No data." />;
  }

  // eslint-disable-next-line no-extra-boolean-cast
  if (!!data) {
    return (
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
            <ListItem avatar={item?.owner.avatar_url} fileName={item?.files} />
          )}
          keyExtractor={item => item.id}
          initialNumToRender={30}
        />
      </View>
    );
  }
};

export default UsersList;
