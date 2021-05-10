import React from 'react'
import { BrowserRouter as Router ,useHistory} from "react-router-dom";
import Routes from './Routes';
import { useDispatch, useSelector } from 'react-redux';

import { ifLoged } from './redux/slices/authSlice';
function App() {
  const history = useHistory()
   const dispatch = useDispatch();
  const { isAuthenticated: auth} = useSelector(
    (state) => state.authentification
  );
  console.log(history ,"App")
  React.useEffect(() => {
    dispatch(ifLoged());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);
  return (
     <Router >
       <Routes/>
     </Router>
  )
}

export default App
