import React, {useState} from 'react';
import {
    Button, Dimensions,
    ImageBackground, KeyboardAvoidingView,
    SafeAreaView, ScrollView,
    StyleSheet,
    Text,
    TextInput, TouchableHighlight,
    View
} from "react-native";
import {Component} from "react";
import fire from "../../firebase";

const auth = fire.auth();

class Login extends Component {
    state = {email: '', password: '', user: null}
    handleLogin = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => {
                console.log(user)
                this.state.user = user;
                this.props.navigation.navigate('Home');
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <KeyboardAvoidingView>
                <ScrollView>
                    <SafeAreaView>
                        <ImageBackground source={require('../../assets/login.png')} style={styles.image}>
                            <View style={styles.container}>
                                <View style={{marginLeft: 'auto', marginRight: 'auto', marginVertical: 100}}>
                                    <Text style={{color: '#ffffff', fontSize: 24}}>WELCOM TO CHAP APP</Text>
                                </View>
                                <Text style={styles.label}>Your email:</Text>
                                <TextInput
                                    placeholder='Type your email'
                                    style={styles.input}
                                    placeholderTextColor='#ffffff'
                                    onChangeText={email => this.setState({email})}
                                    value={this.state.email}
                                />
                                <Text style={styles.label}>Your password:</Text>
                                <TextInput
                                    secureTextEntry={true}
                                    placeholder='Type your password'
                                    style={styles.input}
                                    placeholderTextColor='#ffffff'
                                    onChangeText={password => this.setState({password})}
                                    value={this.state.password}
                                />
                                <View>
                                    <TouchableHighlight
                                        onPress={this.handleLogin}
                                        style={styles.button}
                                        underlayColor='#fff'>
                                        <Text style={styles.submitText}>Login</Text>
                                    </TouchableHighlight>
                                </View>
                                <View>
                                    <TouchableHighlight
                                        style={styles.button}
                                        underlayColor='#fff'>
                                        <Text style={styles.submitText}>Register</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </ImageBackground>
                    </SafeAreaView>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flex: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: ScreenHeight
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ffffff',
        color: '#ffffff',
        paddingLeft: 15,
    },
    label: {
        marginBottom: 10,
        marginTop: 10,
        color: '#ffffff'
    },
    button: {
        marginTop: 15,
        borderRadius: 5,
        paddingVertical: 15,
        backgroundColor: '#add6fa'
    },
    submitText: {
        textAlign: 'center',
        color: '#ffffff',
    }
});

export default Login;
