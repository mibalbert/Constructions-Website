/**
 * card-categories.jsx
 */

const CardCategories = () => {
  return (
    // <section className="py-20 mx-auto border-dashed max-w-7xl border-x ">
    <section className="py-20 mx-auto max-w-7xl">
      <div className="grid w-full grid-cols-3 grid-rows-2 gap-3 px-4">
        <div className="p-20 border rounded-lg min-h-[330px] border-neutral-300">
          Building
        </div>
        <div className="p-20 border rounded-lg min-h-[330px] border-neutral-300">
          Interior
        </div>
        <div className="p-20 border rounded-lg min-h-[330px] border-neutral-300">
          Sewers
        </div>
        <div className="p-20 border rounded-lg min-h-[330px] border-neutral-300">
          Electrical
        </div>
        <div className="p-20 border rounded-lg min-h-[330px] border-neutral-300">
          Structural
        </div>
        <div className="p-20 border rounded-lg min-h-[330px] border-neutral-300">
          Roofing
        </div>
      </div>
    </section>
  );
};

export default CardCategories;
