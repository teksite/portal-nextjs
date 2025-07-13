//import callApi from "@/helpers/callApi";
import fetchApi from "@/helpers/fetchApi";
import {ServiceType} from "@/models/serviceModel";

const api = fetchApi();

export async function getServices() :Promise<ServiceType[]| undefined> {
    // const res = await callApi().post('/GetServices');
    // return res.data;

    try {
        const {Services}:{Services :ServiceType[]} = await api('GetServices', {
            method: 'POST',
            next: {tags: ['GetServices'], revalidate: 120},
        });
        return Services
    } catch (error) {
        console.error(error);
    }
}

export async function getGroupServices() {
    // const res = await callApi().post('/GetServiceGroup');
    // return res.data;
    try {
        const {SGData}:{SGData: any} = await api('GetServiceGroup', {
            method: 'POST',
            next: {tags: ['GetServiceGroup'], revalidate: 120},
        });
        return SGData
    } catch (error) {
        console.error(error);
    }

}