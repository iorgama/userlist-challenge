import { FC } from "react";
import Template from "../style/template/Template";
import Toogle from "../components/Toogle/Toogle";
import { SearchWrapper } from "./style";
import Input from "../components/Input/Input";
import { useNavigate } from "react-router-dom";
import HomePageContent from "./components/HomePageContent/HomePageContent";
import { useUserContext } from "../contexts/UsersContext";

const HomePage: FC = () => {
  const { searchUser, setSearchUser, setView } = useUserContext();

  const navigate = useNavigate();

  const handleSearchUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchUser(value);

    const params = new URLSearchParams(location.search);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    navigate(`?${params.toString()}`);
  };

  return (
    <Template>
      <SearchWrapper>
        <Input searchUser={searchUser} handleSearchUser={handleSearchUser}/>
        <Toogle setView={setView} />
      </SearchWrapper>
      <HomePageContent />
    </Template>
  );
};




export default HomePage;
