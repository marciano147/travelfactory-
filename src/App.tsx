import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MyApps } from './screens/my-apps-screen/MyApps';
import { darkTheme } from './theme/DarkTheme';
import { lightTheme } from './theme/LightTheme';
import { TranslationApp } from './screens/translation-app-screen/TranslationApp';
import { useEffect, useState } from 'react';
import { getAllApplications } from './DAL/server-requests/ApplicationDAL';

const App = () => {
    const [apps, setApps] = useState([]); // This can be a state or context to fetch data from an API [apps, setApps
    const darkMode = true; // This can be a state or context to toggle themes
    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllApplications();
            if (!response) {
                throw new Error('Network response was not ok');
            }
            // Set data to state
            setApps(response);
        };
        fetchData();
    }, []);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MyApps apps={apps} setApps={setApps} />} />
                    {/* Dynamic route based on app ID */}
                    <Route path="/app/:appId" element={<TranslationApp apps={apps} setApps={setApps} />} />

                    {/* Handle 404 - Not Found */}
                    <Route path="*" element={<div>404 - Not Found</div>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
