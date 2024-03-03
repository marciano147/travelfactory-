import React, { FC, useEffect, useState } from 'react';
import { Card, CardContent, Typography, TextField, Box, Button } from '@mui/material';
import { Translation, TranslationValue } from '../../models/AllTypes';
import { addTranslationToApplication } from '../../DAL/server-requests/ApplicationDAL';

interface TranslationCardProps {
    translationKey: string;
    translationsValues: TranslationValue;
    appId: string;
    refreshContainer?: boolean;
    setRefreshContainer?: (refresh: boolean) => void;
    translations?: Translation[]; // Optional translation object
}

const TranslationCard: FC<TranslationCardProps> = (props) => {
    const { translationKey, translationsValues, appId, refreshContainer, setRefreshContainer } = props;
    const [hasChanges, setHasChanges] = useState(false);
    const [textFieldStates, setTextFieldStates] = useState<TranslationValue>(translationsValues);

    useEffect(() => {
        setTextFieldStates(translationsValues);
        if (hasChanges) setHasChanges(false); // Reset changes flag if translations change
    }, [translationsValues, appId]); // Depend on translations prop

    const handleTextChange = (language: string, newText: string) => {
        setTextFieldStates((prev) => ({ ...prev, [language]: newText }));
        setHasChanges(true); // Indicate that changes have been made
    };

    const handleSave = async () => {
        const translationItem: Translation = {
            key: translationKey,
            values: textFieldStates,
        };

        await addTranslationToApplication(appId, translationItem);

        setRefreshContainer(!refreshContainer);
        setHasChanges(false);
    };

    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography sx={{ width: '10%' }}>{translationKey}</Typography>
                    {Object.entries(textFieldStates).map(([language, text]) => (
                        <TextField
                            key={language}
                            label={language}
                            variant="outlined"
                            size="small"
                            value={text || ''} // Fallback to empty string if text is undefined
                            sx={{ width: '20%', mx: 1 }}
                            onChange={(e) => handleTextChange(language, e.target.value)}
                        />
                    ))}
                    {hasChanges && (
                        <Button variant="contained" color="primary" onClick={handleSave}>
                            Save
                        </Button>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default TranslationCard;
