import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SurveyList } from "./survey/SurveyList";
import { SurveyCreate } from "./survey/SurveyCreate";
import { SurveyEdit } from "./survey/SurveyEdit";
import { SurveyShow } from "./survey/SurveyShow";
import { MatchList } from "./match/MatchList";
import { MatchCreate } from "./match/MatchCreate";
import { MatchEdit } from "./match/MatchEdit";
import { MatchShow } from "./match/MatchShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TestSyncList } from "./testSync/TestSyncList";
import { TestSyncCreate } from "./testSync/TestSyncCreate";
import { TestSyncEdit } from "./testSync/TestSyncEdit";
import { TestSyncShow } from "./testSync/TestSyncShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DrinkingBuddyService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Survey"
          list={SurveyList}
          edit={SurveyEdit}
          create={SurveyCreate}
          show={SurveyShow}
        />
        <Resource
          name="Match"
          list={MatchList}
          edit={MatchEdit}
          create={MatchCreate}
          show={MatchShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="TestSync"
          list={TestSyncList}
          edit={TestSyncEdit}
          create={TestSyncCreate}
          show={TestSyncShow}
        />
      </Admin>
    </div>
  );
};

export default App;
