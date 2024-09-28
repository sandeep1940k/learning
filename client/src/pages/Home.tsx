import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <section className="fixed top-0 left-0 w-full h-full z-50 flex flex-row justify-center items-center bg-white">
                <div className="spinner border border-transparent rounded-[5px] relative">
                    <span
                        className="absolute top-1/2 left-1/2 w-[45px] h-[45px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-400 border-t-transparent"
                        style={{
                            borderTopColor: 'var(--white-color)',
                            animation: 'spinner 0.9s linear infinite',
                        }}
                    />
                </div>
            </section>

            <main>
                <nav className='bg-white fixed top-0 right-0 left-0 py-[25px] z-2 will-change-transform transition-transform duration-300 ease-linear'>
                    <div>
                        <button>
                            <span></span>
                        </button>

                        <a href="">
                            <strong><span></span></strong>
                        </a>

                        <div>
                            <a href=""></a>
                            <a href=""></a>
                        </div>

                        <div></div>
                    </div>
                </nav>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
            </main>
        </>
    );
};

export default Home;
