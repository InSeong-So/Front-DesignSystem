import { MouseEventHandler, MutableRefObject, useCallback, useEffect } from 'react';
/**
 * @param ref: 현재 기준이 되는 element
 * @param callback : element바깥을 눌렀을때 실행할 callback 함수
 * @param inputs : hook안에서 dependency로 작용될 param
 * @description : 기준이 되는 element이외의 부분을 클릭했을때 동작하는 hook EX) 모달창이 띄워져있을때 모달 바깥쪽을 클릭하면 모달창이 꺼진다.
 */
function useClickOutside<T>(
  ref: MutableRefObject<T>,
  callback: (...data: unknown[]) => any,
  inputs = [],
) {
  const handleClick = useCallback((e: MouseEventHandler<T>) => {
    if (e.target === undefined) return;
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  }, []);

  useEffect(() => {
    document.getElementById('app')!.addEventListener('click', handleClick);

    return () => {
      document.getElementById('app')!.removeEventListener('click', handleClick);
    };
  }, [handleClick, ...inputs]);
}

export default useClickOutside;
