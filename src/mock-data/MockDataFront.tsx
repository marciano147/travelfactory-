import { App, Translation } from '../models/AllTypes';

const mockTranslations: Translation[] = [
    {
        key: 'Hello',
        values: { English: 'hello', French: 'bonjour', Dutch: 'hallo' },
    },
    {
        key: 'Goodbye',
        values: { English: 'goodbye', French: 'au revoir', Dutch: 'tot ziens' },
    },
    {
        key: 'Thank you',
        values: { English: 'thank you', French: 'merci', Dutch: 'dank u' },
    },
    {
        key: 'Welcome',
        values: { English: 'welcome', French: 'bienvenue', Dutch: 'welkom' },
    },
    {
        key: 'Yes',
        values: { English: 'yes', French: 'oui', Dutch: 'ja' },
    },
    {
        key: 'No',
        values: { English: 'no', French: 'non', Dutch: 'nee' },
    },
    {
        key: 'Please',
        values: { English: 'please', French: `s'il vous plaît`, Dutch: 'alsjeblieft' },
    },
    {
        key: 'Sorry',
        values: { English: 'sorry', French: 'désolé', Dutch: 'sorry' },
    },
    {
        key: 'Excuse me',
        values: { English: 'excuse me', French: 'excusez-moi', Dutch: 'pardon' },
    },
];

const mockApps = [
    {
        name: 'Translator Pro',
        lastDeployment: '2024-02-20T14:45:00Z',
        id: '1',
    },
    {
        name: 'QuickTranslate',
        lastDeployment: '2024-02-19T09:30:00Z',
        id: '2',
    },
    {
        name: 'LinguaWorld',
        lastDeployment: '2024-02-18T16:15:00Z',
        id: '3',
    },
    {
        name: 'Polyglot Tools',
        lastDeployment: '2024-02-17T13:00:00Z',
        id: '4',
    },
    {
        name: 'GlobalSpeak',
        lastDeployment: '2024-02-16T11:45:00Z',
        id: '5',
    },
];

export const mockAppsExtended: App[] = mockApps.map((app) => ({
    ...app,
    translations: mockTranslations,
}));
