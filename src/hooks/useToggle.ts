import {useState} from 'react';

interface UseToggleButton {
  value: boolean;
  toggleButton(): void;
}

export const useToggleButton = (): UseToggleButton => {
  const [value, setValue] = useState<boolean>(false);

  const toggleButton = (): void => setValue(!value);

  return {value, toggleButton};
};
