import {
	getRecentServices,
	getAllLicensesData,
} from "@/http/controller/servicesController";

export async function GET() {
	try {
		// const result = await getRecentServices();
		const result = await getAllLicensesData();
		return Response.json(result);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
