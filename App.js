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
  FlatList,
} from 'react-native';

import {Icon} from 'native-base';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [
        {
          id: '1',
          name: 'JavaScript',
          logo: 'language-javascript',
          typeLogo: 'MaterialCommunityIcons',
        },
        {
          id: '2',
          name: 'React Native',
          logo: 'react',
          typeLogo: 'MaterialCommunityIcons',
        },
        {
          id: '3',
          name: 'CSS',
          logo: 'language-css3',
          typeLogo: 'MaterialCommunityIcons',
        },
        {
          id: '4',
          name: 'HTML',
          logo: 'language-html5',
          typeLogo: 'MaterialCommunityIcons',
        },
        {
          id: '5',
          name: 'Node',
          logo: 'nodejs',
          typeLogo: 'MaterialCommunityIcons',
        },
        {
          id: '6',
          name: 'React.JS',
          logo: 'react',
          typeLogo: 'MaterialCommunityIcons',
        },
      ],
      courses: [
        {
          id: '1',
          name: 'Análise de Sistemas',
        },
        {
          id: '2',
          name: 'Ciência da Computação',
        },
      ],
      experience: [
        {
          id: '1',
          name: 'Rcky - Analista de Suporte',
          functions:
            'Realizava projetos autônoma, especializada em atendimento via chat, gerenciava o TED e era provedora de base de conhecimento.',
        },
        {
          id: '2',
          name: 'Tech Mahindra - Analista SAP',
          functions:
            'Realizo a resolução de solicitações de serviços SAP, gerencio tarefas e alimento a base de conhecimento. ',
        },
      ],
    };
  }

  render() {
    const renderItemSkills = ({item}) => (
      <ItemSkills name={item.name} logo={item.logo} typeLogo={item.typeLogo} />
    );

    const ItemSkills = ({name, logo, typeLogo}) => (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <Text style={{}}>{name}</Text>
        <Icon
          type={typeLogo}
          name={logo}
          style={{color: '#000', fontSize: 22}}
        />
      </View>
    );

    const renderItemExperience = ({item}) => (
      <ItemExperience name={item.name} functions={item.functions} />
    );

    const ItemExperience = ({name, functions}) => (
      <View>
        <Text style={{fontStyle: 'italic', marginTop: 5}}>{name}</Text>
        <Text style={{marginTop: 5}}>{functions}</Text>
      </View>
    );

    const renderItemCourse = ({item}) => <ItemCourse name={item.name} />;

    const ItemCourse = ({name}) => (
      <Text style={{marginTop: 5, fontStyle: 'italic'}}>{name}</Text>
    );

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
              flex: 0,
              maxWidth: '90%',
              backgroundColor: '#ffffff',
              marginTop: 16,
              borderRadius: 12,
              elevation: 5,
              paddingLeft: 12,
              paddingRight: 12,
              padding: 5,
            }}>
            <Text style={{fontWeight: 'bold'}}>Resumo Profissional</Text>
            <Text style={{fontWeight: '900', fontSize: 12}}>
              {`
              Consegui programar diversos projetinhos seguindo alguns cursos que realizei na Udemy, Alura e DIO (Digital Innovation One) de JavaScript, React.Js, HTML, CSS, React Native, UX, Node para praticar o conhecimento que adquiri com o decorrer do ano de 2020.
              É um prazer ver que faço parte desse momento histórico da humanidade, pois busco me atualizar a cada semana com novas tecnologias e novidades desse momento tecnológico que evolue a cada ano. 
              Por isto, meu objetivo é desenvolver novas ferramentas que possa melhorar a rotina de cada habitante deste planeta que compartilhamos.`}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <View
              style={{
                flex: 0,
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
              <FlatList
                style={{marginTop: 5}}
                data={this.state.skills}
                renderItem={renderItemSkills}
                keyExtractor={(item) => item.id}
              />
            </View>
            <View
              style={{
                width: '100%',
                marginLeft: 16,
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
                <Text style={{fontWeight: 'bold'}}>Rede Social</Text>
                <View
                  style={{
                    height: 50,
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(
                        'https://www.linkedin.com/in/scarlatt-luz/',
                      )
                    }>
                    <Icon
                      type="FontAwesome"
                      name="linkedin-square"
                      style={{color: '#0A66C2', fontSize: 28, marginLeft: 3}}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL('https://twitter.com/LuzScarlatt?s=09')
                    }>
                    <Icon
                      type="FontAwesome"
                      name="twitter"
                      style={{color: '#1DA1F2', fontSize: 28, marginLeft: 3}}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL('https://www.instagram.com/scarlatt_luz/')
                    }>
                    <Icon
                      type="FontAwesome"
                      name="instagram"
                      style={{color: '#000', fontSize: 28, marginLeft: 3}}
                    />
                  </TouchableOpacity>
                </View>
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
                <FlatList
                  data={this.state.courses}
                  renderItem={renderItemCourse}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 0,
              width: '90%',
              backgroundColor: '#ffffff',
              marginTop: 16,
              borderRadius: 12,
              elevation: 5,
              paddingLeft: 12,
              paddingRight: 12,
              padding: 5,
            }}>
            <Text style={{fontWeight: 'bold'}}>Experiências</Text>
            <FlatList
              data={this.state.experience}
              renderItem={renderItemExperience}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <View
              style={{
                height: 96,
                width: '100%',
                backgroundColor: '#ffffff',
                marginTop: 16,
                borderRadius: 12,
                elevation: 5,
                paddingLeft: 12,
                paddingRight: 12,
                padding: 5,
              }}>
              <Text style={{fontWeight: 'bold'}}>Certificações</Text>
              <View style={{marginTop: 5}}>
                <Text style={{fontStyle: 'italic'}}>
                  App Development - Mad Code/ Estação Hack from Facebook
                </Text>
                <Text style={{fontStyle: 'italic', marginTop: 5}}>
                  Java Programmer - Impacta
                </Text>
              </View>
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
                height: 80,
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
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '95%',
                  marginTop: 5,
                }}>
                <View>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="yoga"
                    style={{color: '#ef4a0e', fontSize: 28, marginLeft: 1}}
                  />
                  <Text style={{fontStyle: 'italic', fontSize: 12}}>Yoga</Text>
                </View>

                <View>
                  <Icon
                    type="FontAwesome"
                    name="film"
                    style={{color: '#000', fontSize: 28, marginLeft: 3}}
                  />
                  <Text
                    style={{fontStyle: 'italic', fontSize: 12, marginTop: 3}}>
                    Filmes
                  </Text>
                </View>

                <View>
                  <Icon
                    type="FontAwesome"
                    name="gamepad"
                    style={{
                      color: '#0e33ef',
                      fontSize: 28,
                      marginLeft: 3,
                    }}
                  />
                  <Text
                    style={{fontStyle: 'italic', fontSize: 12, marginTop: 1}}>
                    Games
                  </Text>
                </View>

                <View>
                  <Icon
                    type="MaterialIcons"
                    name="menu-book"
                    style={{color: '#000', fontSize: 28, marginLeft: 3}}
                  />
                  <Text
                    style={{fontStyle: 'italic', fontSize: 12, marginTop: 1}}>
                    Leitura
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 80,
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
              <View
                style={{
                  height: 50,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={require('./src/imagens/english.png')}
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 50,
                      borderWidth: 2,
                      borderColor: '#fff',
                      marginTop: 5,
                    }}
                  />
                  <Text style={{fontStyle: 'italic', fontSize: 12}}>
                    Avançado
                  </Text>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={require('./src/imagens/german.png')}
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 50,
                      borderWidth: 2,
                      borderColor: '#fff',
                      marginTop: 5,
                    }}
                  />
                  <Text style={{fontStyle: 'italic', fontSize: 12}}>
                    Básico
                  </Text>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={require('./src/imagens/spanish.png')}
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 50,
                      borderWidth: 2,
                      borderColor: '#fff',
                      marginTop: 5,
                    }}
                  />
                  <Text style={{fontStyle: 'italic', fontSize: 12}}>
                    Básico
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{height: 22, width: '100%'}} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
