import { Fragment } from "react";
import { Provider } from "react-redux";
import { Switch } from "react-router-dom";
import Footer from "./component/Header/Footer";
import Header from "./component/Header/Header";
import About from "./container/Departments/About";
import Apointments from "./container/Departments/Apointments";
import Contact from "./container/Departments/Contact";
import Departments from "./container/Departments/Departments";
import Doctors from "./container/Departments/Doctors";
import Home from "./container/Home/Home";
import LoginPage from "./container/Login/LoginPage";
import Medicines from "./container/Medicines/Medicines";
import RefEx from "./container/RefEx";
import ThemeProvider from "./context/ThemeProvider";
import store, { persistor } from "./redux/store";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react'


function App() {
    return (
        <SnackbarProvider maxSnack={5}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>

                    <ThemeProvider>
                        <Header />
                        <Switch>
                            <PublicRoute path="/" exact component={Home} />
                            <PublicRoute
                                path="/departments"
                                exact
                                component={Departments}
                            />
                            <PublicRoute path="/doctors" exact component={Doctors} />
                            <PublicRoute path="/about" exact component={About} />
                            <PublicRoute path="/contact" exact component={Contact} />
                            <PrivateRoute path="/apointment" component={Apointments} />
                            <PublicRoute
                                path="/login"
                                restricted={true}
                                exact
                                component={LoginPage}
                            />
                            <PublicRoute
                                path="/medicine"
                                data={"hello"}
                                exact
                                component={Medicines}
                            />
                            <PublicRoute path="/ref" exact component={RefEx} />
                        </Switch>

                        <Footer />
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </SnackbarProvider>
    );
}

export default App;
