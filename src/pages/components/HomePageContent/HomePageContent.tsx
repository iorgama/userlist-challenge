import Message from "../../../components/Message/Message";
import SkeletonView from "../../../components/Skeleton/Skeleton";
import { useUserContext } from "../../../contexts/UsersContext";
import { StatusMode } from "../../../hooks/useUser";
import UsersContainer from "../UsersContainer/UsersContainer";

const HomePageContent = () => {
  const { status, users, view } = useUserContext();
  
  const componentMapping: Record<StatusMode, React.JSX.Element> = {
    error:  <Message message='Erro ao carregar informações' />,
    idle: <></>,
    loading: <SkeletonView /> ,
    success: <UsersContainer users={users} view={view} />
  }

  return componentMapping[status];
}


export default HomePageContent;