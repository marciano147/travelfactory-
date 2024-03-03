import React, { FC } from 'react';
import {
    Drawer,
    List,
    ListItemIcon,
    ListItemText,
    Typography,
    Box,
    ListItemButton,
    Divider,
    ButtonBase,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import { Apps } from '../../models/AllTypes';

const drawerWidth = 240;

interface MenuSideBarProps {
    apps: Apps;
}

const MenuSideBar: FC<MenuSideBarProps> = (props) => {
    const { apps } = props;
    const navigate = useNavigate();

    const handleAppClick = (appId: string) => {
        navigate(`/app/${appId}`);
    };

    const handleMyAppsClick = () => {
        navigate('/');
    };

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <ButtonBase sx={{ textAlign: 'center', width: '100%' }} onClick={() => handleMyAppsClick()}>
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6">My Apps</Typography>
                </Box>
            </ButtonBase>
            <Divider />
            <List>
                {apps.map((app, index) => (
                    <ListItemButton key={app.id} onClick={() => handleAppClick(app.id)}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={app.name} />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    );
};

export default MenuSideBar;
