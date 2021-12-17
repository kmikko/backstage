/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { SearchBarBase, SearchBarBaseProps } from '../SearchBar';
import { useNavigateToQuery } from '../util';

const useStyles = makeStyles({
  searchBar: {
    border: '1px solid #555',
    borderRadius: '6px',
    fontSize: '1.5em',
  },
});

export type HomePageSearchBarProps = Partial<
  Omit<SearchBarBaseProps, 'onChange' | 'onSubmit'>
>;

export const HomePageSearchBar = ({
  className: defaultClassName,
  ...props
}: HomePageSearchBarProps) => {
  const classes = useStyles();
  const [query, setQuery] = React.useState('');
  const handleSearch = useNavigateToQuery();

  const className = defaultClassName
    ? `${classes.searchBar} ${defaultClassName}`
    : classes.searchBar;

  const handleSubmit = () => {
    handleSearch({ query });
  };

  const handleChange = React.useCallback(
    value => {
      setQuery(value);
    },
    [setQuery],
  );

  return (
    <SearchBarBase
      className={className}
      value={query}
      onSubmit={handleSubmit}
      onChange={handleChange}
      {...props}
    />
  );
};
