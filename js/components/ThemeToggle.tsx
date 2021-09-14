import React, { FC, useState } from 'react';
import { Switch } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { switchThemeMode } from '../common/theme';

export const ThemeSwitch: FC = () => {
  const dispatch = useDispatch();

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    dispatch(switchThemeMode());
  };

  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};
