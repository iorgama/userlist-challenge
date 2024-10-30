import { User } from "../../../models/User";
import { ViewMode } from "../../../components/Toogle/Toogle";
import List from "../../../components/Users/List/List";
import Table from "../../../components/Users/Table/Table";
import Message from "../../../components/Message/Message";

const UsersContainer = ({users, view}: {users: User[], view: ViewMode}) => {
  
  if (users.length === 0) {
    return <Message message='Não há dados para serem exibidos' />
  }
  
  return view === 'card' ? <List users={users} /> : <Table users={users} />
}


export default UsersContainer;