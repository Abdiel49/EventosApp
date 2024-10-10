import React, { useState } from 'react';

import FiledBase, { FiledBaseProps } from './FiledBase';

export type FieldSearchProps = FiledBaseProps & {
  onSearch?: (text: string) => void;
}

const FieldSearch = (props: FieldSearchProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (text: string) => {
    setSearchValue(text);
    // props.onSearch?.(text);
    props.onChangeText && props.onChangeText(text);
  };

  const handleOnSearch = () => {
    props.onSearch && props.onSearch(searchValue);
    // setSearchValue('');
  };

  return (
    <FiledBase
      {...props}
      placeholder={props.placeholder ?? 'Search'}
      input
      onChangeText={handleOnChange}
      returnKeyType="search"
      returnKeyLabel="Buscar"
      onEndEditing={handleOnSearch}
    >
      {props.children}
    </FiledBase>
  );
};

export default FieldSearch;
