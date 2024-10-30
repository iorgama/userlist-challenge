import { Dispatch, FC, ReactNode, SetStateAction, createContext, useContext, useState } from "react"
import { ViewMode } from "../components/Toogle/Toogle"
import { StatusMode, useUser } from "../hooks/useUser"
import { User } from "../models/User"

type UsersContextValues = {
  status: StatusMode
  view: ViewMode
  users: User[]
  searchUser: string
  setView: Dispatch<SetStateAction<ViewMode>>;
  setSearchUser: (value: string) => void;
}

export const UsersContext = createContext<UsersContextValues | undefined>(undefined);

export const UsersProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [searchUser, setSearchUser] = useState<string>('');
  const { users, status } = useUser(searchUser);
  const [view, setView] = useState<ViewMode>('card');

  return (
    <UsersContext.Provider value={{ searchUser, setSearchUser, users, status, view, setView }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UsersProvider');
  }
  return context;
};

