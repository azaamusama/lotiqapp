import bannerCeramir from "@/assets/banner-ceramir.png";

const PromoBannerV4 = () => (
  <section className="w-full py-3">
    <div className="container">
      <img
        src={bannerCeramir}
        alt="Ceramir Crown & Bridge – Buy 3 Get 1 Free"
        className="w-full object-cover object-center block rounded-xl"
        style={{ maxHeight: "160px" }}
      />
    </div>
  </section>
);

export default PromoBannerV4;

