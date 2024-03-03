import React, { FC } from 'react';
import { Container } from '@mui/material';
import AppCard from '../app-card/AppCard';
import AddAppDialog from '../add-app-dialog/AddAppDialog';
import { Apps } from '../../models/AllTypes';

interface AppsContainerProps {
    apps: Apps;
    onDeploy: (app: any) => void;
    showDialog: boolean;
    setShowDialog: (show: boolean) => void;
    setApps: (apps: Apps) => void;
}

const AppsContainer: FC<AppsContainerProps> = (props) => {
    const { apps, showDialog, setShowDialog, setApps } = props;

    const showDialogComponent = showDialog ? (
        <AddAppDialog showDialog={showDialog} onClose={() => setShowDialog(false)} setApps={setApps} apps={apps} />
    ) : null;

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {apps.map((app) => (
                <AppCard key={app.id} app={app} />
            ))}
            {showDialogComponent}
        </Container>
    );
};

export default AppsContainer;
