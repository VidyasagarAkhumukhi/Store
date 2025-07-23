import React from "react";

const AboutPage = () => {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        Built For
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          You
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        Let's be honest: online shopping can be a hassle. Between endless
        scrolling, questionable quality, and frustrating returns, finding what
        you actually want can feel like a full-time job. We knew there had to be
        a better way. <br />
        That's why we created NextStore. <br />
        We're not just another online retailer. We're a team of product
        enthusiasts, designers, and problem-solvers who have obsessed over every
        detail of the shopping experience to make it work for you. We started by
        asking simple questions: What if every product was guaranteed to be
        excellent? What if finding the perfect item was easy and intuitive? What
        if you could trust that you were getting something truly special every
        single time? <br />
        Our solution is a highly curated collection of best-in-class products,
        presented in a clean, simple, and beautiful online space. We do the hard
        work of sourcing and testing so you don't have to. <br />
        <br />
        Here's our promise to you: <br />
        - Expertly Vetted: If it's here, it's one of the best. <br />
        - Effortless Discovery: Find what you need, and discover what you'll
        love. <br />
        - Dedicated Support: A real human is always here to help. <br />
        <br />
        Welcome to the new standard in online shopping. Welcome to NextStore.
      </p>
    </section>
  );
};

export default AboutPage;
