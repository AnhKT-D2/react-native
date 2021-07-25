import React from "react";
import {Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import { EvilIcons } from '@expo/vector-icons';


let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam a"

class Chat extends React.Component {
    state = { chatSearch: '' }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBox}>
                    <EvilIcons name="search" size={24} color="black" />
                    <TextInput
                        placeholder='Tìm kiếm'
                        placeholderTextColor='#ffffff'
                        onChangeText={chatSearch => this.setState({chatSearch})}
                        value={this.state.chatSearch}
                    />
                </View>
                <View style={styles.listChat}>
                    <ScrollView>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <Image source={require('../assets/mina.webp')} style={styles.avatar} />
                            <View style={styles.previewChat}>
                                <Text style={{fontSize: 20}}>Bộ y tế</Text>
                                <Text numberOfLines={1}>
                                    { ((text).length > 45) ?
                                        (((text).substring(0,45-3)) + '...') :
                                        text }
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default Chat;

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        width: Dimensions.get('window').width
    },
    searchBox: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        paddingHorizontal: 5,
        paddingVertical: 5,
        backgroundColor: '#6b7599'
    },
    listChat: {

    },
    previewChat: {
        marginLeft: 20
    },
    chatItem: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 55,
    }
})
