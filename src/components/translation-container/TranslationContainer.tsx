import React, { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import TranslationCard from '../translation-card/TranslationCard';
import { Translation } from '../../models/AllTypes';
import { getAllApplications } from '../../DAL/server-requests/ApplicationDAL';

interface TranslationContainerProps {
    translations: Translation[];
    appId: string;
    setApps: (apps: any) => void;
}

const TranslationContainer: FC<TranslationContainerProps> = (props) => {
    const { translations, appId, setApps } = props;
    const [refreshContainer, setRefreshContainer] = useState(false);
    useEffect(() => {
        const fetchApps = async () => {
            const newApps = await getAllApplications();
            setApps(newApps);
        };

        fetchApps();
    }, [appId, refreshContainer]); // Ensure these dependencies are correct

    return (
        <Box sx={{ maxWidth: '100%' }}>
            {translations.map((translation, index) => (
                <TranslationCard
                    key={index}
                    translationKey={translation.key}
                    translationsValues={translation.values}
                    appId={appId}
                    refreshContainer={refreshContainer}
                    setRefreshContainer={setRefreshContainer}
                    translations={translations}
                />
            ))}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mb: 2 }} />
        </Box>
    );
};

export default TranslationContainer;
