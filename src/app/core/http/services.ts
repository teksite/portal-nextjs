import callApi from "@/app/core/helpers/callApi";

export async function getServices() {
    const res = await callApi().post('/GetServices');
    return res.data;
}
export async function getGroupServices() {
    const res = await callApi().post('/GetServiceGroup');
    return res.data;
}