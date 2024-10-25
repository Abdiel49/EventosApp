import React, { useState } from 'react';
import DateTimePicker from 'react-native-ui-datepicker';

import FiledBase, { FiledBaseProps } from './FiledBase';
// import BottomModalBase from '../modals/BottomModalBase';

import { colors } from '@app/theme/colors';
// import { formatDate } from '@app/utils/dates.util';
import { StyleSheet } from 'react-native';
import { formatDate } from '@app/utils/dates.util';
import BottomModalBase from '../molecules/BottomModalBase';

export type FiledDatePickerProps = FiledBaseProps & {
  onChangeDate?: (date: Date) => void,
  open?: boolean,
  date?: Date,
  setOpen?: (open: boolean) => void,
}

const FiledDatePicker = (props: FiledDatePickerProps) => {
  const [dateSelected, setDateSelected] = useState<Date>(props.date ?? new Date());
  const [open, setOpen] = useState<boolean>(props.open ?? false);

  const handleConfirmDate = (date: Date) => {
    setOpen(false);
    setDateSelected( new Date(date));
    props.onChangeDate && props.onChangeDate(date);
  };

  return (
    <FiledBase
      {...props}
      value={formatDate(dateSelected)}
      onPress={() => setOpen(true)}
    >
      <BottomModalBase isVisible={open} setIsVisible={setOpen}>
        <DateTimePicker
          mode="single"
          date={dateSelected}
          selectedItemColor={colors.primary}
          calendarTextStyle={styles.textCalendar}
          headerTextStyle={styles.textCalendar}
          minDate={Date.now() - (1000 * 60 * 60 * 24)}
          onChange={(params) =>
            handleConfirmDate(params.date as Date)
          }
        />
      </BottomModalBase>
    </FiledBase>
  );
};

export default FiledDatePicker;

const styles = StyleSheet.create({
  textCalendar: {
    color: colors.dark,
  },
});
