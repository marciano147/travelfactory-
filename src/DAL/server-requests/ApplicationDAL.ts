import { App, Apps, Translation } from '../../models/AllTypes';
import { backendServiceInstance } from './AxiosInstances';

// example to server request by the axios instances
export const getAllApplications = async (): Promise<Apps> => {
    try {
        const response = await backendServiceInstance.get<Apps>('/applications');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addApplication = async (app: App): Promise<App> => {
    try {
        const response = await backendServiceInstance.post<App>('/applications', app);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const downloadTranslations = async (applicationId: string, appName: string): Promise<void> => {
    try {
        const response = await backendServiceInstance.get<Blob>(`/applications/${applicationId}/download`, {
            responseType: 'blob',
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${appName}-${applicationId}.xlsx`); // or any other filename
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    } catch (error) {
        throw error;
    }
};

export const deployTranslations = async (applicationId: string): Promise<void> => {
    try {
        await backendServiceInstance.post(`/applications/${applicationId}/deploy`);
    } catch (error) {
        throw error;
    }
};

export const addTranslationToApplication = async (
    applicationId: string,
    translationItem: Translation,
): Promise<App> => {
    try {
        const response = await backendServiceInstance.post<App>(
            `/applications/${applicationId}/translations`,
            translationItem,
        );
        return response.data; // Assuming the server responds with the updated Application object
    } catch (error) {
        throw error;
    }
};

export const updateTranslation = async (
    applicationId: string,
    translationKey: string,
    translationUpdate: Translation,
): Promise<App> => {
    try {
        const response = await backendServiceInstance.put<App>(
            `/applications/${applicationId}/translations/${translationKey}`,
            translationUpdate,
        );
        debugger;
        return response.data; // Assuming the server responds with the updated Application object
    } catch (error) {
        throw error;
    }
};
