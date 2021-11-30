import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import {AppText} from '../AppText';
import {PickerItem} from './PickerItem';

import styles from './styles';

interface Props {
  items: Array<any>;
  selectedItem: any;
  setSelectedItem(item: any): void;
}

export const AppPicker: React.FC<Props> = ({
  items,
  selectedItem,
  setSelectedItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.pickerContainer}>
          <Entypo name="list" size={24} color="gray" />
          <AppText style={styles.pickerText}>
            {selectedItem ? selectedItem.label : 'Category'}
          </AppText>
          <Entypo name="chevron-down" size={24} color="gray" />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
            // horizontal={true}
            numColumns={4}
            contentContainerStyle={styles.listContainer}
            data={items}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                color={item.color}
                icon={item.icon}
                onPress={() => {
                  setModalVisible(false);
                  setSelectedItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
};
