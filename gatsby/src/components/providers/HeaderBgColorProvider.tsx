import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

const HeaderBgColorStateContext = createContext<string>('none');
const HeaderBgColorDispatchContext = createContext<Dispatch<SetStateAction<string>>>(() => 'none');

// Header 컴포넌트의 배경색상을 관리하는 context
export function HeaderBgColorProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<string>('none');

  return (
    <HeaderBgColorStateContext.Provider value={state}>
      <HeaderBgColorDispatchContext.Provider value={setState}>
        {children}
      </HeaderBgColorDispatchContext.Provider>
    </HeaderBgColorStateContext.Provider>
  );
}

export const useGetHeaderBgColor = () => {
  const headerBgColor = useContext(HeaderBgColorStateContext);
  return headerBgColor;
};

export const useSetHeaderBgColor = () => {
  const setHeaderBgColor = useContext(HeaderBgColorDispatchContext);
  return setHeaderBgColor;
};
