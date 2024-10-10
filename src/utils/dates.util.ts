import moment from 'moment';

export const formatDate = (date: Date, format: string = 'D MMM'): string => {
  return moment(date).format(format);
};
