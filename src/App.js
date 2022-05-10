import './App.css';

function App() {
  return (
    <div className="h-screen w-screen">
      {/* <header>
        <div className='w-full container mx-auto flex flex-row justify-between p-4 bg-background-accent text-text_dark' >
          <div>
            NFsTore
          </div>
          <div className='container mx-auto flex flex-row justify-end'>
            <div className='mx-1'>
              Mint
            </div>
            <div className='mx-1'>
              Social
            </div>
          </div>
        </div>
      </header> */}
      <main className='h-full grid grid-cols-4 grid-rows-6'>
        <div id='title' className='col-span-3 row-span-4 bg-background-accent'>
          <h1 className=''>NFsTore</h1>
        </div>
        <div id='description' className='col-span-1 row-span-4 bg-background-main' >
          Qui facciamo cose per vedere altre cose.
        </div>
        <div id='slideshow' className='col-span-4 bg-background-main row-span-2' >
          Qui ci andranno le immagini
        </div>

      </main>
    </div >
  );
}

export default App;
