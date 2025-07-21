import {getGroupServices} from "@/http/controller/servicesController";

export async function GET() {
    try {
        const result = await getGroupServices();
        return Response.json(result);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
