import React from 'react'
import { View, StyleSheet } from "react-native"
import { WebView } from 'react-native-webview'
import { Button, Card, Modal, Text, Spinner } from '@ui-kitten/components'

const loading = () => (
    <Modal
        visible={true}
        backdropStyle={styles.backdrop}
    >
        <View style={{textAlign: 'center', flexDirection: 'row'}}>
            <Spinner status='basic' size='giant' /> 
            <Text style={{color: '#fff'}}>Loading...</Text>
        </View>
    </Modal>
)

 const NewsContentScreen = ({ route }) => {
     const { news_url } = route.params
    return (
        <WebView 
            source={{ uri: news_url }}
            startInLoadingState={true}
            renderLoading={loading}
        />
    )
}

export default NewsContentScreen

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});