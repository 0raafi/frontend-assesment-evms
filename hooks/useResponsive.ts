import { useEffect, useState } from 'react';

declare interface IResponsive {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export default function useResponsive() {
  const [responsive, setResponsive] = useState<IResponsive>({} as any);

  function handleWindowSizeChange() {

    if (window.innerWidth <= 700) {
      setResponsive({
        isMobile: true,
        isTablet: false,
        isDesktop: false,
      });

      return;
    }

    if (window.innerWidth >= 701 && window.innerWidth <= 1120) {
      setResponsive({
        isMobile: false,
        isTablet: true,
        isDesktop: false,
      });

      return;
    }

    setResponsive({
      isMobile: false,
      isTablet: false,
      isDesktop: true,
    });

  }

  useEffect(() => {
    if (Object.keys(responsive).length === 0) {
      handleWindowSizeChange();
    }

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };

  }, [responsive]);

  return responsive;
}