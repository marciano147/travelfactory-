import React, { FC, useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import AddTranslationDialog from '../add-translation-dialog/AddTranslationDialog';

interface HeaderProps {
    onAddTranslation?: (key: string) => void;
    onSave?: () => void;
    onAddApp?: () => void;
    isAppPage?: boolean;
    appName?: string;
    setShowDialog?: (show: boolean) => void;
}

const Header: FC<HeaderProps> = (props) => {
    const { onAddTranslation, onSave, isAppPage, appName, setShowDialog } = props;
    const [isTranslationDialogOpen, setIsTranslationDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setIsTranslationDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsTranslationDialogOpen(false);
    };

    const showDialogComponent = isTranslationDialogOpen ? (
        <AddTranslationDialog
            open={isTranslationDialogOpen}
            onClose={handleCloseDialog}
            onSubmit={onAddTranslation}
        />
    ) : null;

    const showTranslationAppMenu = isAppPage && (
        <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', marginLeft: '10vw' }}>
                App - {appName}
            </Typography>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpenDialog} sx={{ mr: 1 }}>
                Add Translation
            </Button>

            <Button variant="contained" startIcon={<SaveIcon />} onClick={onSave} sx={{ mr: 1 }}>
                Save Changes
            </Button>
        </>
    );

    const myAppsHeader = !isAppPage && (
        <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                Translator Manager
            </Typography>
            <Box>
                {!isAppPage && (
                    <Button variant="contained" startIcon={<AddIcon />} onClick={() => setShowDialog(true)}>
                        Add app
                    </Button>
                )}
            </Box>
        </>
    );

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    {myAppsHeader}
                    {showTranslationAppMenu}
                </Toolbar>
            </AppBar>
            {showDialogComponent}
        </>
    );
};

export default Header;
