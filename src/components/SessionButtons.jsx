import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import { FontAwesome } from '@expo/vector-icons';
const SessionButtons = ({
  label,
  leftIcon,
  rightIcon,
  altLabel,
  style,
  onPress,
}) => {
  return (
    <View className="px-1" style={style}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <View style={styles.iconWrapper}>
          <FontAwesome
            name={leftIcon}
            size={24}
            color={leftIcon ? 'white' : 'transparent'}
            style={styles.leftIcon}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.buttonMainText}>{label}</Text>
          </View>
        </View>

        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>{altLabel}</Text>
          <FontAwesome
            name={rightIcon}
            size={16}
            color={rightIcon ? 'white' : 'transparent'}
            style={styles.rightIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SessionButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#2C2C2C',
    height: 55,
    borderRadius: 10,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },

  iconWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
  },

  textWrapper: {
    marginLeft: 20,
  },

  buttonMainText: {
    color: '#fff',
    fontWeight: 400,
    fontSize: 16,
    textAlign: 'center',
  },

  subTextContainer: {
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },

  subText: {
    color: 'white',
  },
});
