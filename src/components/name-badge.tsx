type NameBadgeProps = {
  name: string;
  greeting: string;
};

const NameBadge = ( nameProp: NameBadgeProps) => {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">{nameProp.greeting}</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">{nameProp.name}</p>
      </div>
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge;
