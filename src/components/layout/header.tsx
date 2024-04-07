'use client';

import { useRouter } from 'next/navigation';

interface HeaderProps {
  prev?: boolean;
  next?: boolean;
  download?: boolean;
  home?: boolean;
}

export const Header = ({ prev, next, download, home }: HeaderProps) => {
  // TODO: svg를 컴포넌트화 시키기

  const router = useRouter();

  const goPrevPage = () => {
    router.back();
  };

  const goNextPage = () => {
    router.push('/letter/write');
  };

  const goHomePage = () => {
    router.push('/');
  };

  const handleDownload = () => {
    // TODO
  };

  return (
    <header className='w-full min-h-[60px] flex items-center justify-between cursor-pointer'>
      <div className='w-[36px] h-full flex items-center justify-between'>
        {prev && (
          <svg
            width='11'
            height='20'
            viewBox='0 0 11 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={goPrevPage}
          >
            <path
              d='M10.4194 1.07998C10.9271 1.58766 10.9271 2.41078 10.4194 2.91846L3.33867 9.99922L10.4194 17.08C10.9271 17.5877 10.9271 18.4108 10.4194 18.9185C9.91174 19.4261 9.08863 19.4261 8.58095 18.9185L0.580956 10.9185C0.0732752 10.4108 0.0732752 9.58766 0.580956 9.07998L8.58095 1.07998C9.08863 0.572298 9.91174 0.572298 10.4194 1.07998Z'
              fill='#171719'
            />
          </svg>
        )}
        {next && (
          <svg
            width='11'
            height='20'
            viewBox='0 0 11 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={goNextPage}
          >
            <path
              d='M0.581322 1.07998C0.0736412 1.58766 0.0736413 2.41078 0.581322 2.91846L7.66208 9.99922L0.581323 17.08C0.0736419 17.5877 0.073642 18.4108 0.581323 18.9185C1.089 19.4261 1.91212 19.4261 2.4198 18.9185L10.4198 10.9185C10.9275 10.4108 10.9275 9.58766 10.4198 9.07998L2.4198 1.07998C1.91212 0.572298 1.089 0.572298 0.581322 1.07998Z'
              fill='#171719'
            />
          </svg>
        )}
      </div>
      {download && (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={handleDownload}
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M20.9001 15L20.9001 18.4304C20.9001 18.6847 20.9001 18.9267 20.8835 19.1307C20.8653 19.3531 20.8229 19.6082 20.693 19.8632C20.5108 20.2207 20.2202 20.5113 19.8627 20.6935C19.6077 20.8234 19.3526 20.8658 19.1302 20.884C18.9262 20.9006 18.6842 20.9006 18.4299 20.9006H5.57034C5.31604 20.9006 5.07396 20.9006 4.87001 20.884C4.6476 20.8658 4.3925 20.8234 4.13752 20.6935C3.78001 20.5113 3.48935 20.2207 3.30719 19.8632C3.17727 19.6082 3.13488 19.3531 3.11671 19.1307C3.10005 18.9267 3.10007 18.6847 3.1001 18.4303V15H4.9001V19.0003C4.9001 19.0555 4.94487 19.1003 5.0001 19.1003H19.0001C19.0553 19.1003 19.1001 19.0555 19.1001 19.0003V15H20.9001Z'
            fill='#171719'
          />
          <path
            d='M11.1 4.00059V13.4186L8.36681 10.8462C8.00485 10.5055 7.43526 10.5228 7.0946 10.8847C6.75393 11.2467 6.77119 11.8163 7.13315 12.1569L11.3831 16.1569C11.7297 16.4831 12.2703 16.4831 12.6168 16.1569L16.8668 12.1569C17.2288 11.8163 17.246 11.2467 16.9054 10.8847C16.5647 10.5228 15.9951 10.5055 15.6332 10.8462L12.9 13.4186V4.00059C12.9 3.50353 12.497 3.10059 12 3.10059C11.5029 3.10059 11.1 3.50353 11.1 4.00059Z'
            fill='#171719'
          />
        </svg>
      )}
      {home && (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={goHomePage}
        >
          <path
            d='M19.5995 18.86V10.441C19.5995 10.2872 19.5643 10.1355 19.4966 9.99801C19.4289 9.86048 19.3306 9.74084 19.2095 9.64858L12.3845 4.44858C12.2157 4.32 12.0105 4.25049 11.7995 4.25049C11.5886 4.25049 11.3833 4.32 11.2145 4.44858L4.38951 9.64858C4.26842 9.74084 4.17014 9.86048 4.10245 9.99801C4.03475 10.1355 3.99951 10.2872 3.99951 10.441V18.86C3.99951 19.1227 4.10223 19.3746 4.28508 19.5604C4.46793 19.7461 4.71593 19.8505 4.97451 19.8505H8.87451C9.1331 19.8505 9.38109 19.7461 9.56394 19.5604C9.74679 19.3746 9.84951 19.1227 9.84951 18.86V15.8886C9.84951 15.6259 9.95223 15.374 10.1351 15.1882C10.3179 15.0025 10.5659 14.8981 10.8245 14.8981H12.7745C13.0331 14.8981 13.2811 15.0025 13.4639 15.1882C13.6468 15.374 13.7495 15.6259 13.7495 15.8886V18.86C13.7495 19.1227 13.8522 19.3746 14.0351 19.5604C14.2179 19.7461 14.4659 19.8505 14.7245 19.8505H18.6245C18.8831 19.8505 19.1311 19.7461 19.3139 19.5604C19.4968 19.3746 19.5995 19.1227 19.5995 18.86Z'
            stroke='#050505'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      )}
    </header>
  );
};
