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
      <main className='h-full grid grid-cols-1 grid-rows-6 md:grid-cols-4 md:grid-rows-6'>
        <div id='title' className='col-span-1 row-span-3 md:col-span-3 md:row-span-4 w-full h-full bg-background-accent place-content-center'>
          <div className='grid md:grid-cols-3 md:grid-rows-3 h-full place-items-center'>
            <h1 className='md:col-span-3 md:row-span-1 text-8xl'>NFsTore</h1>
            <div className='md:col-span-3 md:row-span-1'>
              <p className='text-sm md:col-span-3 md:row-span-3 mx-3'>You buy our token, you get discounts. Easy Peasy. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popu</p>
            </div>
            <h1 className='md:col-span-3 md:row-span-1 text-xl'>Button CTA</h1>
          </div>
        </div>
        <div id='social' className='col-span-1 row-span-1 md:col-span-1 md:row-span-4 bg-background-main place-items-center' >
          <div className='grid md:grid-cols-3 place-items-center self-center h-full content-center'>
            <div className='flex flex-row md:flex-col col-span-3 md:rows-span-4'>
              <span className='py-2 px-4 md:px-0'>Facebook</span>
              <span className='py-2 px-4 md:px-0'>OpenSea</span>
              <span className='py-2 px-4 md:px-0'>Twitter</span>
              <span className='py-2 px-4 md:px-0'>Instagram</span>
            </div>
          </div>
        </div>
        <div id='slideshow' className='col-span-1 row-span-2 md:col-span-4 md:row-span-2 bg-background-main' >
          Images Slideshow
        </div>
      </main>
    </div >
  );
}

export default App;
