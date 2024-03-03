import React, { FC, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

interface AddTranslationDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (key: string) => void;
}

const AddTranslationDialog: FC<AddTranslationDialogProps> = (props) => {
    const { open, onClose, onSubmit } = props;
    const [key, setKey] = useState('');

    const handleClose = () => {
        onClose();
        setKey(''); // Reset the key when closing the dialog
    };

    const handleSubmit = () => {
        onSubmit(key);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Translation Key</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="key"
                    label="Translation Key"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddTranslationDialog;
