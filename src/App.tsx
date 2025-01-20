import WholeButtonsView from './Buttons/WholeButtonsView.tsx';

function App() {
  return (
    <>
      <div className="fixed inset-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.4),rgba(255,255,255,0))] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgb(34,197,94,0.2),transparent)] before:mix-blend-overlay"></div>

      <WholeButtonsView />
    </>
  );
}

export default App;
