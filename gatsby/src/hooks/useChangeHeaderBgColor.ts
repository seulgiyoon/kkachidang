import { useSetHeaderBgColor } from 'components/providers/HeaderBgColorProvider';
import { RefObject, useCallback, useEffect } from 'react';

const SECTION_THRESHOLD = [0.1, 1];

const useChangeHeaderBgColor = ({
  sectionRef,
  currentColor,
  nextColor,
}: {
  sectionRef: RefObject<HTMLElement>;
  currentColor: string;
  nextColor: string;
}) => {
  const setHeaderBgColor = useSetHeaderBgColor();

  const handleSetHeaderBgColor = useCallback(
    (color: string) => setHeaderBgColor(color),
    [setHeaderBgColor],
  );

  const onObserve = useCallback(
    (callback: (color: string) => void) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.boundingClientRect.bottom <= 140 && entry.boundingClientRect.bottom >= 0) {
          callback(nextColor);
        }

        if (entry.isIntersecting && entry.boundingClientRect.top <= 140) {
          callback(currentColor);
        }
      });
    },
    [nextColor, currentColor],
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    try {
      if (sectionRef?.current) {
        observer = new IntersectionObserver(onObserve(handleSetHeaderBgColor), {
          threshold: SECTION_THRESHOLD,
        });
        observer.observe(sectionRef.current);
      }
    } catch (error) {
      return undefined;
    }

    return () => observer?.disconnect();
  }, [handleSetHeaderBgColor, onObserve, sectionRef]);
};

export default useChangeHeaderBgColor;
