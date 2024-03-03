import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PublishIcon from '@mui/icons-material/Publish';
import { deployTranslations, downloadTranslations } from '../../DAL/server-requests/ApplicationDAL';

const AppCard = ({ app }) => {
    const downloadHandle = async (app) => {
        await downloadTranslations(app.id, app.name);
    };

    const deployHandle = async (app) => {
        await deployTranslations(app.id);
    };

    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h5"> {app.name}</Typography>
                <Typography color="text.secondary">Last deployment: {app.lastDeployment}</Typography>
                <Button
                    variant="contained"
                    startIcon={<CloudDownloadIcon />}
                    onClick={() => downloadHandle(app)}
                    sx={{ mr: 1 }}
                >
                    Download XLSX
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PublishIcon />}
                    onClick={() => deployHandle(app)}
                >
                    Deploy
                </Button>
            </CardContent>
        </Card>
    );
};
export default AppCard;
