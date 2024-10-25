import { Image, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import PhoneInput, { ICountry } from 'react-native-international-phone-number';
import EntypoIcon from 'react-native-vector-icons/Entypo'

// import { chevron_down_icon } from '@app/utils/images';
import { colors } from '@app/theme/colors';
import { ICountryCca2 } from 'react-native-international-phone-number/lib/interfaces/countryCca2';

type Props = {
  value?: string;
  initialCountry?: ICountryCca2;
  onChangeText?: (value: string) => void;
  onChangeCountry?: (value: ICountry) => void;
}

const FieldPhoneInput = (props: Props) => {
  const [inputValue, setInputValue] = useState('12371937912');
  const [selectedCountry, setSelectedCountry] = useState<ICountry>();

  const handleChangeInput = (phone: string) => {
    setInputValue(phone);
    props.onChangeText && props.onChangeText(phone);
  };

  const handleChangeCountry = (country: ICountry) => {
    setSelectedCountry(country);
    props.onChangeCountry && props.onChangeCountry(country);
  };

  return (
    <View style={styles.container}>
      <PhoneInput
        value={inputValue}
        placeholder="Teléfono movil"
        modalSearchInputPlaceholder="Buscar pais..."
        onChangePhoneNumber={handleChangeInput}
        selectedCountry={selectedCountry}
        onChangeSelectedCountry={handleChangeCountry}
        defaultCountry={props.initialCountry ?? 'BO'}
        customCaret={ <EntypoIcon name="chevron-small-down" style={styles.caretIcon} />}
        phoneInputStyles={{
          container: {
            backgroundColor: colors.white,
            borderWidth: 0,
            // borderStyle: 'solid',
            // borderColor: '#F3F3F3',
          },
          flagContainer: {
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            // alignItems: 'center',
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            backgroundColor: colors.light,
            borderWidth: 0.5,
            borderStyle: 'solid',
            borderColor: colors.muted,
            gap: 0,
            // paddingHorizontal: 16,
            // marginLeft: 10,
            // paddingHorizontal: 10,
            // paddingVertical: 16,
            height: 58,
            width: '40%',
            borderRadius: 16,
          },
          flag: {
            left: 4,
          },
          caret: {
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            // alignItems: 'center',
            backgroundColor: 'orange',
            // borderWidth: 0.5,
            // borderStyle: 'solid',
            // borderColor: colors.muted,
            // gap: 8,
            // paddingHorizontal: 16,
            // paddingVertical: 16,
            // height: 58,
            // // width: '36%',
            // borderRadius: 16,
            right: 0,
          },
          divider: {
            backgroundColor: 'red',
            width: 0,
          },
          callingCode: {
            fontSize: 16,
            right: 36,
            // left: 20,
            alignSelf: 'center',
            // fontWeight: 'bold',
            color: colors.dark,
            // fontFamily: 'Strawford-Regular',
            textAlign: 'center',
            // backgroundColor: 'red',
          },
          input: {
            color: colors.dark,
            // fontFamily: 'Strawford-Regular',
            backgroundColor: colors.light,
            borderWidth: 0.5,
            borderStyle: 'solid',
            borderColor: colors.muted,
            borderRadius: 16,
            height: 58,
            paddingHorizontal: 12,
            marginLeft: 12,
          },
        }}
      />
    </View>
  );
};

export default FieldPhoneInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginVertical: 4,
  },
  caretIcon: {
    fontSize: 20,
    width: 20,
    height: 20,
    tintColor: colors.muted,
    right: -56,
    // backgroundColor: 'red',
  },
  input: {
    color: colors.dark,
    fontSize: 16,
    // fontFamily: 'Strawford-Regular',
  },
  inputCountryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.light,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: colors.muted,
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    height: 58,
    width: '36%',
    borderRadius: 16,
  },
  inputText: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    width: '100%',
    height: 58,
    // flex: 1,
    backgroundColor: colors.light,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: colors.muted,
    // gap: 8,
    // padding: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 16,
  },
});

