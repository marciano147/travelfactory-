import { FC, useEffect, useState } from 'react';
import { TranslationAppLayout } from './TranslationAppLayout';
import MenuSideBar from '../../components/menu-side-bar/MenuSideBar';
import Header from '../../components/header/Header';
import TranslationContainer from '../../components/translation-container/TranslationContainer';
import { Apps } from '../../models/AllTypes';
import { useParams } from 'react-router-dom';

interface TranslationApp {
    apps: Apps;
    setApps: (apps: Apps) => void;
}

export const TranslationApp: FC<TranslationApp> = (props) => {
    const { apps, setApps } = props;
    const { appId } = useParams();

    // eslint-disable-next-line eqeqeq
    const app = apps.find((a) => a.id == appId);
    if (!app) {
        return <div>LOADING</div>;
    }
    const [translationsState, setTranslationsState] = useState([...app.translations]);
    useEffect(() => {
        setTranslationsState([...app.translations]);
    }, [appId]);

    const handleAddTranslation = (key: string) => {
        const newTranslation = {
            key,
            values: { English: '', French: '', Dutch: '' },
        };
        setTranslationsState([...translationsState, newTranslation]);
        const updatedApps = apps.map((app) => {
            if (app.id === appId) {
                // If this is the current app, add the new translation
                return { ...app, translations: [...app.translations, newTranslation] };
            }
            return app;
        });
        setApps(updatedApps); // Update the apps state with the new translations for the specific app
    };

    return (
        <TranslationAppLayout>
            <MenuSideBar apps={apps} />
            <Header isAppPage={true} appName={app.name} onAddTranslation={handleAddTranslation} />
            <TranslationContainer setApps={setApps} translations={translationsState} appId={appId} />
        </TranslationAppLayout>
    );
};
