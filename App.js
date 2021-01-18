import React, {Component} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';

import {Icon} from 'native-base';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <StatusBar backgroundColor={'#252525'} barStyle={'light-content'} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            backgroundColor: '#f1f1f1',
            flexGrow: 1,
          }}>
          <View
            style={{
              flex: 0,
              backgroundColor: '#252525',
              minHeight: 126,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Image
                source={require('./src/imagens/Linkedin.png')}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: '#fff',
                  marginBottom: 10,
                }}
              />
              <Text style={{fontWeight: 'bold', color: '#fff'}}>
                SCARLATT LUZ
              </Text>
              <Text
                style={{textAlign: 'center', color: '#fff', marginBottom: 12}}>
                React Native Developer
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
              }}>
              <TouchableOpacity
                onPress={() => Linking.openURL('tel:+5511984225403')}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Icon
                    type="FontAwesome"
                    name="mobile-phone"
                    style={{color: '#fff', fontSize: 28, marginLeft: 3}}
                  />
                  <Text style={{color: '#fff', marginLeft: 12}}>
                    (11) 98422-5403
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://github.com/Scarlattluz')
                }>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 16,
                  }}>
                  <Icon
                    type="FontAwesome"
                    name="github"
                    style={{color: '#fff', fontSize: 22}}
                  />
                  <View style={{marginLeft: 8}}>
                    <Text
                      numberOfLines={2}
                      style={{
                        color: '#fff',
                        textAlign: 'left',
                      }}>
                      github.com/
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        textAlign: 'left',
                      }}>
                      Scarlattluz
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('mailto:contatoscarlatt@gmail.com')
                }>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 16,
                    marginBottom: 16,
                  }}>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="email"
                    style={{color: '#fff', fontSize: 22}}
                  />
                  <View style={{marginLeft: 8}}>
                    <Text
                      numberOfLines={2}
                      style={{
                        color: '#fff',
                        textAlign: 'left',
                      }}>
                      contatoscarlatt
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        textAlign: 'left',
                      }}>
                      @gmail.com
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 70,
              width: '90%',
              backgroundColor: '#ffffff',
              marginTop: 16,
              borderRadius: 12,
              elevation: 5,
              paddingLeft: 12,
              paddingRight: 12,
              padding: 5,
            }}>
            <Text style={{fontWeight: 'bold'}}>Resumo Profissional</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <View
              style={{
                height: 90,
                width: '48%',
                backgroundColor: '#ffffff',
                marginTop: 16,
                borderRadius: 12,
                elevation: 5,
                paddingLeft: 12,
                paddingRight: 12,
                padding: 5,
              }}>
              <Text style={{fontWeight: 'bold'}}>Skills</Text>
            </View>
            <View
              style={{
                height: 90,
                width: '48%',
                backgroundColor: '#ffffff',
                marginTop: 16,
                borderRadius: 12,
                elevation: 5,
                paddingLeft: 12,
                paddingRight: 12,
                padding: 5,
              }}>
              <Text style={{fontWeight: 'bold'}}>Certificações</Text>
            </View>
          </View>
          <View
            style={{
              height: 70,
              width: '90%',
              backgroundColor: '#ffffff',
              marginTop: 16,
              borderRadius: 12,
              elevation: 5,
              paddingLeft: 12,
              paddingRight: 12,
              padding: 5,
            }}>
            <Text style={{fontWeight: 'bold'}}>Rede Social</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <View
              style={{
                height: 90,
                width: '48%',
                backgroundColor: '#ffffff',
                marginTop: 16,
                borderRadius: 12,
                elevation: 5,
                paddingLeft: 12,
                paddingRight: 12,
                padding: 5,
              }}>
              <Text style={{fontWeight: 'bold'}}>Experiências</Text>
            </View>
            <View
              style={{
                height: 90,
                width: '48%',
                backgroundColor: '#ffffff',
                marginTop: 16,
                borderRadius: 12,
                elevation: 5,
                paddingLeft: 12,
                paddingRight: 12,
                padding: 5,
              }}>
              <Text style={{fontWeight: 'bold'}}>Formações Acadêmicas</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <View
              style={{
                height: 90,
                width: '55%',
                backgroundColor: '#ffffff',
                marginTop: 16,
                borderRadius: 12,
                elevation: 5,
                paddingLeft: 12,
                paddingRight: 12,
                padding: 5,
              }}>
              <Text style={{fontWeight: 'bold'}}>Hobbies</Text>
            </View>
            <View
              style={{
                height: 90,
                width: '42%',
                backgroundColor: '#ffffff',
                marginTop: 16,
                borderRadius: 12,
                elevation: 5,
                paddingLeft: 12,
                paddingRight: 12,
                padding: 5,
              }}>
              <Text style={{fontWeight: 'bold'}}>Languages</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
