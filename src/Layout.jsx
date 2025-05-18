import { useState } from 'react';
import poster from './assets/post.jpg';
import poster1 from './assets/post1.jpg';
import poster2 from './assets/post2.jpg';
import fact from './assets/S__991251.jpg';
import migan from './assets/S__991250.jpg';
import farm from './assets/S__991249.jpg';
function Layout() {

    const PAGES = {
        HOME: 'home',
        VIEW: 'view',
    };
    const [activePage, setActivePage] = useState(PAGES.HOME);
    const [showModal, setShowModal] = useState(false);
    const cardImages = [fact, migan, farm];
    const cardDescriptions = ['金格觀光工廠', '龍岡米干街', '埔心牧場'];
    return (

        <div>
            <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0 flex items-center justify-center">
                <div className="text-[52px] font-bold text-gray-600 opacity-15 text-center rotate-[-45deg] whitespace-pre leading-snug">
                    This is a demo version{"\n"}Ideatree{"\n"}Made By W. M. Lai
                </div>
            </div>
            <header className="h-16 px-6 bg-[#e5ece5] flex items-center text-xl font-semibold text-[#2f4f4f]">點子樹</header>
            <div className="flex">
                <aside className="w-64 flex flex-col bg-gray-100 h-screen text-lg font-medium">
                    <div className={`flex items-center py-2 px-4 rounded cursor-pointer transition hover:bg-[#e5ece5] ${activePage === PAGES.HOME ? 'bg-[#d2dcd3] border-l-4 border-[#9daea1] text-[#2f3f33] font-semibold' : 'text-[#3b4a3e]'}`}
                        onClick={() => setActivePage(PAGES.HOME)}>
                        <span>🏠</span>
                        <span className="ml-2">首頁</span>
                    </div>
                    <div className={`flex items-center py-2 px-4 rounded cursor-pointer transition hover:bg-[#e5ece5] ${activePage === PAGES.VIEW ? 'bg-[#d2dcd3] border-l-4 border-[#9daea1] text-[#2f3f33] font-semibold' : 'text-[#3b4a3e]'}`}
                        onClick={() => setActivePage(PAGES.VIEW)}>
                        <span>🛒</span>
                        <span className="ml-2">瀏覽商品</span>
                    </div>

                </aside>
                <main className="flex-1 p-6 bg-white overflow-y-auto">
                    {activePage === PAGES.HOME && (
                        <div>
                            <h1 className="text-2xl font-bold mb-2">🌳歡迎來到 點子樹</h1>
                            <p className="text-red-600 font-bold">這是一個來自中原大學資訊管理學系學生的企業概論專案，非真實旅遊業者，請勿當真。</p>
                            <div className="max-w-6xl mx-auto p-6 space-y-10">

                                {/* Slogan */}
                                <div className="bg-gray-100 text-center p-6 rounded-xl shadow text-3xl font-bold">
                                    我們用一天，換一段剛剛好的回憶
                                </div>

                                {/* Horizontal Line */}
                                <hr className="border-t border-gray-300" />

                                {/* Three Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {cardImages.map((img, index) => (
                                        <div key={index} className="border rounded-xl p-4 text-center shadow">
                                            <img
                                                src={img}
                                                alt={`Card ${index + 1}`}
                                                className="w-full h-60 object-cover rounded-md mb-2"
                                            />
                                            <p className="text-lg">{cardDescriptions[index]}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Horizontal Line */}
                                <hr className="border-t border-gray-300" />

                                {/* Section Title & Paragraph */}
                                <div>
                                    <h1 className="text-2xl font-bold mb-2">行程特色說明</h1>
                                    <p className="text-gray-700">包車行動｜充實行程｜創建回憶</p>
                                    <h2 className="font-bold text-red-600">7/1 桃園一日遊 前20名只要1899元！</h2>
                                </div>

                                {/* Two Side-by-Side Pics */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <img src={poster1} alt="海報" className="w-64 h-128 object-cover rounded-md mb-2" />
                                    <img src={poster2} alt="海報" className="w-64 h-128 object-cover rounded-md mb-2" />
                                </div>

                                {/* Horizontal Line */}
                                <hr className="border-t border-gray-300" />

                                {/* Bottom Paragraph */}
                                <div className="text-gray-700">
                                    ig:<a href="https://www.instagram.com/ty.ideatree" target="_blank" rel="noopener noreferrer">ty.ideatree</a><br/>
                                    email:<a href="mailto:ty.ideatree@gmail.com">ty.ideatree@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    )}

                    {activePage === PAGES.VIEW && (
                        <div>
                            <h1 className="text-xl font-bold mb-2">🛒 瀏覽商品</h1>
                            <div className="flex flex-row items-center justify-between border border-gray-400 rounded-lg p-6 w-full max-w-5xl bg-white shadow">
                                {/* 左邊圖片 */}
                                <div className="w-44 h-32 border rounded-lg flex items-center justify-center text-gray-500 text-sm">
                                    <img src={poster} alt="海報" />
                                </div>

                                {/* 中間文字區 */}
                                <div className="flex-1 mx-6">
                                    <h2 className="text-2xl font-bold">【特價】7/1 桃園一日遊</h2>
                                    <div className="text-gray-600 mt-2">
                                        一場從甜點開始的輕旅行<br />
                                        一起走進海洋、走入草地<br />
                                        走進人情味的夜市光景<br />
                                        放下匆忙的日常 <br />
                                        換來剛剛好的快樂與回憶
                                    </div>
                                </div>

                                {/* 右邊按鈕與價格 */}
                                <div className="flex flex-col items-center space-y-2 mr-8">
                                    <button
                                        disabled
                                        className="px-6 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
                                    >
                                        已額滿
                                    </button>
                                    <button
                                        onClick={() => setShowModal(true)}
                                        className="text-sm text-blue-600 underline mt-1 hover:text-blue-800"
                                    >
                                        行程資訊
                                    </button>
                                    {showModal && (
                                        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                                            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
                                                {/* 關閉按鈕 */}
                                                <button
                                                    onClick={() => setShowModal(false)}
                                                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
                                                >
                                                    ×
                                                </button>
                                                <h3 className="text-lg font-bold mb-2">行程資訊</h3>
                                                <p className="text-gray-700 mb-4">

                                                    金格觀光工廠⮕龍岡米干街⮕埔心牧場⮕Xpark⮕中壢夜市
                                                </p>

                                            </div>
                                        </div>
                                    )}
                                    <p className="text-gray-700 text-sm">原價2200元</p>
                                    <p className="text-red-700 text-mid">前20名只要1899元！</p>
                                </div>
                            </div>

                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default Layout;
