import Image from "next/image";

export default function OfficeLocations() {
  return (
    <main className="min-h-screen">
      <section className="max-w-[1400px] mx-auto  grid grid-cols-2 h-screen items-center gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="mb-12 text-5xl font-medium capitalize underline underline-offset-20 decoration-primary">
            Office Locations
          </h2>
          <p className="text-2xl text-foreground/60 ">
            The CAI Nairobi office is strategically located at Nyaku House, 2nd
            Floor, Room F2_04, on Argwings Kodhek Road, Hurlingham. In addition,
            CAI maintains a subsidiary office in Kampala, Uganda, to strengthen
            our regional presence and enhance service delivery.
          </p>
        </div>

        <Image
          className="shadow-[16px_16px_0px_0px_var(--color-secondary)] rounded-2xl"
          height={1000}
          width={1000}
          src={"/about-us/office-location.jpeg"}
          alt=""
        />
      </section>

        <iframe
        className="w-full max-w-[1400px] h-[500px] rounded-xl mx-auto mb-16  shadow-xl border border-foreground"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7990882663307!2d36.79623067577078!3d-1.2951105986925737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10be1cd0bc33%3A0x6733974af7e19a5c!2sNyaku%20House!5e0!3m2!1sen!2ske!4v1758867399864!5m2!1sen!2ske"
        
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />


    </main>
  );
}
