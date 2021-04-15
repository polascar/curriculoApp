import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import ItemCourse from './courses-list-item';

export default class ListItemCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FlatList
        data={this.props.dataCourses}
        renderItem={({item}) => <ItemCourse name={item.name} />}
        keyExtractor={(item) => item.id}
      />
    );
  }
}
