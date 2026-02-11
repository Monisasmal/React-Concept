const ReactFeatures = () => {
  const features = [
    {
      title: "1. Component-Based Architecture",
      what: "Breaking the UI into small, independent, and reusable pieces called components.",
      why: "It makes the code easier to maintain, test, and reuse across different parts of the app.",
      where: "Used in every React project to build everything from buttons to entire pages.",
      example: "Like LEGO blocks. You build small blocks (Button, Input) and combine them to make a castle (Webpage)."
    },
    {
      title: "2. JSX (JavaScript XML)",
      what: "A syntax extension that allows writing HTML-like code directly inside JavaScript.",
      why: "It makes the UI structure easy to visualize and write within the logic.",
      where: "Used in the return statement of your components.",
      example: "Like a recipe card that has both the ingredients (Data) and the instructions (HTML) in one place."
    },
    {
      title: "3. Virtual DOM",
      what: "A lightweight representation of the real DOM kept in memory.",
      why: "Updating the real DOM is slow; React updates the Virtual DOM first to find the fastest way to change the UI.",
      where: "React handles this automatically behind the scenes.",
      example: "Like editing a photo on your phone. You see the preview (Virtual) before you save the final file (Real DOM)."
    },
    {
      title: "4. Unidirectional Data Flow",
      what: "Data flows in only one direction: from Parent to Child via 'Props'.",
      why: "This makes debugging much simpler because you can easily trace where data is coming from.",
      where: "Used whenever you pass data between components.",
      example: "Like a waterfall. The water only flows down, making it predictable and easy to follow."
    },
    {
      title: "5. Hooks",
      what: "Functions that let you 'hook into' React state and lifecycle features from functional components.",
      why: "Allows you to use complex features without writing difficult 'Class' components.",
      where: "useState and useEffect are the most common hooks used in almost every component.",
      example: "Like a Swiss Army knife. You carry one tool, but it has different 'hooks' (blades, scissors) for different tasks."
    },
    {
      title: "6. Declarative UI",
      what: "You describe 'what' the UI should look like for a specific state, rather than 'how' to change it.",
      why: "Reduces bugs and makes the code much easier for other developers to read.",
      where: "The core philosophy of how you write React code.",
      example: "Like ordering at a restaurant. You tell the waiter 'What' you want (Pizza), you don't go to the kitchen to tell them 'How' to cook it."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-blue-600 mb-2 text-center">Major Features of React</h1>
      <p className="text-center text-slate-500 mb-12 italic">Everything that makes React the #1 library in the market.</p>
      
      <div className="grid gap-8">
        {features.map((f, index) => (
          <section key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{f.title}</h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm mb-6">
              <p><span className="font-bold text-blue-600 block mb-1 underline">What is it?</span> {f.what}</p>
              <p><span className="font-bold text-blue-600 block mb-1 underline">Why use it?</span> {f.why}</p>
              <p><span className="font-bold text-blue-600 block mb-1 underline">Where is it used?</span> {f.where}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 text-blue-900">
              <span className="font-bold">Real World Example:</span> {f.example}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ReactFeatures;