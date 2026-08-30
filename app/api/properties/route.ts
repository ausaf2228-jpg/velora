import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.title || !data.developer || !data.priceAED || !data.areaSqFt) {
      return NextResponse.json(
        { message: "Missing required fields (title, developer, price, or area)." },
        { status: 400 }
      );
    }

    // TODO: Connect and write to your database (e.g. Prisma / Drizzle / Supabase / MongoDB)
    // Example:
    // const property = await prisma.property.create({ data });

    console.log("Saving Dubai Property to DB:", data);

    return NextResponse.json(
      { message: "Property successfully created", data },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}