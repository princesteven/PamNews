import React from 'react';
import moment from "moment";
import { Layout } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import {
    Card, 
    Title, 
    Paragraph,
    Provider as PaperProvider,
} from 'react-native-paper';

const NewsComponent = ({ ...props }) => {
    const { news, navigate } = props;
    const source = `Source: ${news.source.name}`;
    const date = `Date: ${moment(news.publishedAt).format('MMMM Do YYYY')}`;

    const content = () => {
        navigate('NewsContent', {news_url: news.url});
    }
    
    return (
        <PaperProvider>
            <Layout style={styles.container}>
                <Card onPress={content}>
                    <Card.Cover source={{ uri: news.urlToImage }} />
                        <Card.Content>
                            <Title>{news.title}</Title>
                            <Paragraph>{news.description}</Paragraph>
                        </Card.Content>
                        <View style={styles.info}>
                            <Card.Title subtitle={source} style={{flex:1}} />
                            <Card.Title subtitle={date} style={{flex:1}} subtitleStyle={{marginRight: 0}} />
                        </View>
                </Card>
            </Layout>
        </PaperProvider>
    );
}

export default NewsComponent

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
      padding: 15
    },
    text: {
      textAlign: 'center',
    },
    likeButton: {
      marginVertical: 16,
    },
    card: {
      backgroundColor: '#fff', 
      marginBottom: 10
    },
    info: {
      flexDirection: 'row',
    }
});