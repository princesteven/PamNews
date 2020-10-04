import axios from 'axios';
import { Badge } from 'react-native-paper';
import { Layout } from '@ui-kitten/components';
import React, {useState, useEffect} from 'react';
import NewsItem from '../components/NewsComponent';
import SplashScreen from 'react-native-splash-screen';
import { FlatList, RefreshControl, StyleSheet, Text } from 'react-native';


const HomeScreen = ({ navigation }) => {
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(false);
  const [badge, setBadge] = useState(false);
  const [badgeMessage, setBadgeMessage] = useState('');
  var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=47acd6a0638d4c9cb1db8ff55b79241c';

  const getNews = () => {
    axios.get(url)
      .then((response) => {
        setNews(response.data.articles);
      })
      .then(() => {
        setLoading(false)
        setBadge(false)
        setBadgeMessage('')
      })
  }

  useEffect(() => {
    setLoading(true)
    setBadge(true)
    setBadgeMessage('Loading...')
  }, [])

  useEffect(() => {
    getNews();
  }, [])
  
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  const onRefresh = React.useCallback(() => {
    getNews()
    setLoading(true);
    console.log('refresh action')
  }, [loading]);

  const handleRefresh = () => {
    <RefreshControl refreshing={loading} onRefresh={onRefresh} />
  }

  return (
    <Layout>
      <FlatList
        data={news}
        renderItem={({item}) => <NewsItem news={item} {...navigation} />}
        keyExtractor={(item,index) => index}
        refreshing={loading}
        onRefresh={handleRefresh}
      />
      <Badge style={styles.badge} visible={badge} size={35}>
        <Text>{badgeMessage}</Text>
      </Badge>
    </Layout>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  badge: {
    bottom: 80,
    paddingLeft: 25,
    paddingRight: 25,
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
});