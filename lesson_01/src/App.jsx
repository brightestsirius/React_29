import List from "./components/List/List";

import { animals } from "./mockData/index";

const App = () => {
  return (
    <>
      <List list={animals} />
    </>
  );
};

export default App;
