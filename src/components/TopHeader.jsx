const TopHeader = () => {
  return (
    <section className="dark:bg-gray-900">
      <marquee
        behavior="scroll"
        direction="left"
        className="mx-auto rounded-full border border-black p-2 dark:border-gray-700"
      >
        <p className="text-black dark:text-gray-300">
          Any required announcements would be done here.
        </p>
      </marquee>
    </section>
  );
};

export default TopHeader;
