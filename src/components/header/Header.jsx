import React from 'react';

const Header = () => {
  return (
    <header
      className="w-full h-[80px] leading-[80px] fle
     items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ============= logo start ============== */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              M
            </span>

            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                {' '}
                Duc Anh
              </h2>
              <p className="text-smallTextColor text-[16px] font-[500]">
                profile
              </p>
            </div>
          </div>
          {/* ============= logo end ============== */}

          {/* ============= Menu start ============== */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  Services
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* ============= Menu end ============== */}

          {/* ============= Menu right start ============== */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-700">
              <i className="ri-send-plane-line"></i> Let's Talk
            </button>
          </div>
          {/* ============= Menu right end ============== */}

          {/* ============= Mobile Menu start ============== */}
          <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
            <i className="ri-menu-line"></i>
          </span>
          {/* ============= Mobile Menu end ============== */}
        </div>
      </div>
    </header>
  );
};

export default Header;
