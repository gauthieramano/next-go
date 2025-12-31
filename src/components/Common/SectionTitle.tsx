export default function SectionTitle({ mainTitle, title, paragraph }: any) {
  return (
    <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
      <span className="title"> {mainTitle} </span>
      <h2 className="mb-5 font-heading font-semibold text-3xl text-dark sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white">
        {title}
      </h2>
      <p className="text-base text-dark-text">{paragraph}</p>
    </div>
  );
}
