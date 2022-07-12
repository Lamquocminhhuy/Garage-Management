import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";
import "styles/antd.less";
import routerProvider from "@pankod/refine-react-router-v6";
import nestjsxCrudDataProvider from "@pankod/refine-nestjsx-crud";
import { UserCreate, UserList, UserShow, UserEdit } from "pages/users";
import { GarageCreate, GarageEdit, GarageList } from "pages/garages";
import { ServiceList } from "pages/sevices";
import { Title, Sider, Footer, Layout, OffLayoutArea } from "components/layout";
import { Login } from "./pages/login";
import { authProvider } from "./authProvider";
import { Header } from "./components/header";
import { ServiceEdit } from "pages/sevices/edit";
import { ServiceCreate } from "pages/sevices/create";
import { ReservationCreate, ReservationList } from "pages/reservations";

function App() {
  const API_URL = "http://localhost:3000";
  const dataProvider = nestjsxCrudDataProvider(API_URL);

  return (
    <Refine
      notificationProvider={notificationProvider}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      routerProvider={routerProvider}
      authProvider={authProvider}
      dataProvider={dataProvider}
      LoginPage={Login}
      resources={[
        {
          name: "users",
          list: UserList,
          create: UserCreate,
          edit: UserEdit,
          show: UserShow,
        },
        {
          name: "garage",
          create: GarageCreate,
          list: GarageList,
          edit: GarageEdit,
        },
        {
          name: "service",
          list: ServiceList,
          edit: ServiceEdit,
          create: ServiceCreate,
        },

        {
          name: "reservation",
          list: ReservationList,
          create: ReservationCreate,
        },
      ]}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
    />
  );
}

export default App;
