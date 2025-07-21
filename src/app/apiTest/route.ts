import { getRecentServices } from "@/http/controller/servicesController";

export async function GET() {
	try {
		const result = await getRecentServices();
		return Response.json(result);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
