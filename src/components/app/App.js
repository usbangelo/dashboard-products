import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import Routes from "../Routes";

import { AppLayout, Content, MainContent } from "./style";
//import "./App.css";

const Layout = () => {
	const themeReducer = useSelector((state) => state.ThemeReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		const themeClass = localStorage.getItem("themeMode", "theme-mode-light");
		const colorClass = localStorage.getItem("colorMode", "theme-mode-light");
		dispatch(ThemeAction.setMode(themeClass));
		dispatch(ThemeAction.setColor(colorClass));
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Route
				render={(props) => (
					<AppLayout
						className={`layout ${themeReducer.mode} ${themeReducer.color}`}
					>
						<Sidebar {...props} />
						<Content className="content">
							<TopNav />
							<MainContent className="content-main">
								<Routes />
							</MainContent>
						</Content>
					</AppLayout>
				)}
			/>
		</BrowserRouter>
	);
};

export default Layout;
