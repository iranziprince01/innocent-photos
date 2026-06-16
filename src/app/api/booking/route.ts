import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/booking-schema";
import { sendBookingEmail } from "@/lib/send-booking-email";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = bookingSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check the form and try again." },
        { status: 400 }
      );
    }

    await sendBookingEmail(parsed.data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Booking email failed:", error);
    return NextResponse.json(
      { error: "We could not send your inquiry right now. Please try WhatsApp or email instead." },
      { status: 500 }
    );
  }
}
