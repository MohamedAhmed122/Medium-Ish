import {useState} from 'react';

interface UseToggleButton {
  value: boolean;
  toggleButton(): void;
}

export const useToggleButton = (
  initialValue: boolean | undefined = false,
): UseToggleButton => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleButton = (): void => setValue(!value);

  return {value, toggleButton};
};
