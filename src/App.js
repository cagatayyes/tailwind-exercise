import drogbaaaaa from './drogbaaaaa.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='flex flex-col w-[140px] md:w-[280px] laptop:w-[480px] border-2 border-[#282c34] dark:border-white border-solid rounded-md'>
          <img src={drogbaaaaa} className='rounded-t-md' alt='drogba' />

          <div className='flex flex-col p-5 bg-[#282c34] transition delay-150 duration-300 ease-in-out hover:bg-purple-700 border-t-2 border-[#282c34] dark:border-white'>
            <h3 className='text-ivoryOrange text-left'>
              Didier Drogba
            </h3>

            <h3 className='text-white text-center'>
              Fildişi Sahili
            </h3>

            <h3 className='text-[#009A44] text-right'>
              Dünyanın en iyi forveti
            </h3>
          </div>
        </div>


        <button className='mt-5 p-5 border-solid border-2 border-[#282c34] 
                          dark:border-white dark:text-white rounded-md'
          onClick={() => {
            if (localStorage.getItem('color-theme')) {
              if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
              } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
              }

              // if NOT set via local storage previously
            } else {
              if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
              } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
              }
            }
          }}
        >
          Change Theme
        </button>

      </header>
    </div >
  );
}

export default App;
