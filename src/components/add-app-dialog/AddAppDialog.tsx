import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import React, { FC } from 'react';
import { Apps } from '../../models/AllTypes';
import { addApplication } from '../../DAL/server-requests/ApplicationDAL';

interface AddAppDialogProps {
    showDialog: boolean;
    onClose: () => void;
    setApps?: (apps: Apps) => void;
    apps?: Apps;
}
const AddAppDialog: FC<AddAppDialogProps> = (props) => {
    const { showDialog, onClose, setApps, apps } = props;
    const [appName, setAppName] = React.useState('');

    const handleAdd = async () => {
        if (!appName) return;

        const deploymentDate = new Date().toISOString();
        const newApp = {
            id: `${apps.length + 1}`,
            lastDeployment: deploymentDate,
            name: appName,
            translations: [],
        };
        const newApps = [...apps, newApp];
        await addApplication(newApp);
        setApps(newApps);
        setAppName(''); // Reset the input field
        onClose();
    };

    return (
        <Dialog open={showDialog} onClose={onClose}>
            <DialogTitle>Add a new application</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Application Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleAdd}>Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddAppDialog;
