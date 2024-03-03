import { FC, useState } from 'react';
import { MyAppsLayout } from './MyAppsLayout';
import MenuSideBar from '../../components/menu-side-bar/MenuSideBar';
import Header from '../../components/header/Header';
import AppsContainer from '../../components/apps-container/AppsContainer';
import { Apps } from '../../models/AllTypes';

interface MyAppsProps {
    apps: Apps;
    setApps: (apps: Apps) => void;
}

export const MyApps: FC<MyAppsProps> = (props) => {
    const { apps, setApps } = props;
    const [showDialog, setShowDialog] = useState(false);
    return (
        <MyAppsLayout>
            <MenuSideBar apps={apps} />
            <Header isAppPage={false} setShowDialog={setShowDialog} />
            <AppsContainer
                setShowDialog={setShowDialog}
                showDialog={showDialog}
                apps={apps}
                onDeploy={(app) => console.log('Deploying:', app)}
                setApps={setApps}
            />
        </MyAppsLayout>
    );
};
