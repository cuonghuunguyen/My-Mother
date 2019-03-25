import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import KidImgComponent from '../components/KidImgComponent';
import DrawerHeader from "../components/DrawerHeader";
import Icon from "react-native-vector-icons/AntDesign";
import CustomerInfoComponent from '../components/CustomerInfoComponent';
import { apiRequestGet } from '../api/api_request'
import DialogPopup from '../components/dialog/dialog-popup'


export class CustomerProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: {}
        };
    }
    state = {
        visibleModal: null,
    };
    getkidInfor() {
        let urlEnpoint = 'http://5bd05387142d360013a172ee.mockapi.io/kids'
        apiRequestGet(urlEnpoint).then(res => {
            this.setState({
                isLoading: false,
                dataSource: res.data
            });
        }).catch(err => {
            alert(JSON.stringify(err))
        })
    }
    getCustomInfor() {
        let urlEnpoint = 'http://5bd05387142d360013a172ee.mockapi.io/users/1'
        apiRequestGet(urlEnpoint).then(res => {
            this.setState({
                isLoading: false,
                customer: res.data
            });
        }).catch(err => {
            alert(JSON.stringify(err))
        })
    }
    componentDidMount() {
        this.getkidInfor();
        this.getCustomInfor();
    }
    render() {
        let customer = this.state.customer;
        return (
            <View style={styles.container}>
                <DrawerHeader navigation={this.props.navigation} title="Profile"/>
                <View style={{ flex: 5 }}></View>

                <View style={{ flex: 40 }}>
                    <View style={styles.cusInfor}>
                        <Image style={styles.cusImg}
                            source={require('../../assets/images/avatar.png')}
                        />
                        <View style={{ marginTop: 25, marginLeft: 20, flex: 1 }}>
                            {
                                <CustomerInfoComponent customer={customer} />
                            }
                        </View>
                    </View>
                </View>

                <View style={{ flex: 20, backgroundColor: 'white' }}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.refs.userprofile.show()}>
                            <View style={styles.button}>
                                <Text style={{ fontSize: 18, color:'white', fontWeight:'bold' }}>Update Profile here</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <DialogPopup ref='userprofile' style={{flex:1}} title="CusProfile" height={0.5}>
                    <View>
                        <View  style={styles.modalContent}>
                                <View>
                                    <Image style={styles.cusImg}
                                        source={require('../../assets/images/avatar.png')}
                                    />
                                </View>
                                <View style={{ marginTop: 0, marginLeft: 20, flex: 1 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Icon name="user" style={[styles.icon]} />
                                        <Text style={{ marginLeft: 15, marginTop: 5, justifyContent: 'center', fontWeight: 'bold', fontSize: 16 }}>{customer.name}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <Icon name="mail" style={[styles.icon]} />
                                        <Text style={{ marginLeft: 15, marginTop: 5, justifyContent: 'center', fontWeight: 'bold', fontSize: 16 }}>{customer.email} </Text>
                                    </View>
                                    <View style={{ flexDirection: "row", marginTop: 15 }}>
                                        <Icon name="phone" style={[styles.icon]} />
                                        <Text style={{ marginLeft: 15, marginTop: 5, justifyContent: 'center', fontWeight: 'bold', fontSize: 16 }}>{customer.phone}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", marginTop: 15 }}>
                                        <Icon name="home" style={[styles.icon]} />
                                        <Text style={{ marginLeft: 15, marginTop: 5, justifyContent: 'center', fontWeight: 'bold', fontSize: 16 }}>{customer.address}</Text>
                                    </View>
                                </View>
                        </View>
                        <View style={{marginTop:25, flexDirection:'row', alignItems:'center'}}>
                            <TouchableOpacity onPress={() =>alert('update here')}>
                                    <View style={styles.button}>
                                        <Text>Update</Text>
                                    </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.refs.userprofile.hide() }>
                                <View style={styles.canclebtn}>
                                    <Text>Cancle</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </DialogPopup>

                <View style={{ flex: 30, flexDirection: "row", backgroundColor: 'white' }}>
                    <View>
                        <Icon name="adduser" style={{ fontSize: 85 }} />
                    </View>
                    <ScrollView>
                        <View style={{ flex: 1, backgroundColor: 'white' }}>
                            <View style={{ height: 130 }}>
                                <FlatList
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    data={this.state.dataSource}
                                    renderItem={({ item }) =>
                                        <KidImgComponent imageUri={{ uri: item.avatar }} name={item.kidname} />
                                    }
                                    keyExtractor={({ id }, index) => id}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <DialogPopup ref='kidprofile' >
                    <View>
                            <View style={styles.modalContent}>
                                <View style={{ flex: 1 }}>
                                    <View>
                                        <Image style={styles.cusImg}
                                            source={require('../../assets/images/avatar.png')}
                                        />
                                    </View>
                                    <View style={{ marginTop: 0, marginLeft: 20, flex: 1 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Icon name="user" style={[styles.icon]} />
                                            <Text style={{ marginLeft: 15, marginTop: 5, justifyContent: 'center', fontWeight: 'bold', fontSize: 16 }}>{customer.name}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                                            <Icon name="mail" style={[styles.icon]} />
                                            <Text style={{ marginLeft: 15, marginTop: 5, justifyContent: 'center', fontWeight: 'bold', fontSize: 16 }}>{customer.email} </Text>
                                        </View>
                                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                                            <Icon name="phone" style={[styles.icon]} />
                                            <Text style={{ marginLeft: 15, marginTop: 5, justifyContent: 'center', fontWeight: 'bold', fontSize: 16 }}>{customer.phone}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                                            <Icon name="home" style={[styles.icon]} />
                                            <Text style={{ marginLeft: 15, marginTop: 5, justifyContent: 'center', fontWeight: 'bold', fontSize: 16 }}>{customer.address}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => {this.hideModal()}}>
                                    <View style={styles.button}>
                                        <Text>Close</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                </DialogPopup>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    icon: {
        fontSize: 26
    },
    kid: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    cusInfor: {
        flex: 1,
        flexDirection: "row",
    },
    cusImg: {
        width: 150,
        height: 150,
        alignItems: 'flex-start'
    },
    modalContent: {
        flexDirection:'row',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    button: {
        backgroundColor: '#0AAE9E',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        color:'white'
    },
    canclebtn:{
        backgroundColor: '#97CACC',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        color:'white'
    },
    updetProfile: {
        flexDirection: 'row',
        marginTop: 0,
    }
});

export default CustomerProfile